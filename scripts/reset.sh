#!/bin/bash

LINECOUNT=$(wc -l < /etc/wpa_supplicant/wpa_supplicant.conf)

sudo truncate -s 0 /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt
sudo truncate -s 0 /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/authtoken.txt
sudo truncate -s 0 /home/pi/SmartMirror/logs/compliments.txt
sudo truncate -s 0 /home/pi/SmartMirror/logs/config.txt
sudo truncate -s 0 /home/pi/SmartMirror/logs/internet_status.txt
sudo truncate -s 0 /home/pi/SmartMirror/logs/success.txt
echo "Done emptying files"

pm2 delete mm.sh
pm2 delete ga.sh
pm2 delete startup.sh
pm2 delete pir.sh
pm2 save
echo "Done removing the process"

pm2 unstartup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 unstartup systemd -u pi --hp /home/pi
echo "pm2 unstartup done"

pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
echo "pm2 startup done"

if [ $LINECOUNT -gt 7 ]; then
	sudo sed -i '4,$d' /etc/wpa_supplicant/wpa_supplicant.conf
fi

pm2 start /home/pi/SmartMirror/scripts/startup.sh
echo "startup.sh has been added"
exit 
