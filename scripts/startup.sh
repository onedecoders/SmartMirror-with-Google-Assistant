#!/bin/bash

FILE=/home/pi/SmartMirror/logs/success.txt
LINECOUNT=$(wc -l < /etc/xdg/lxsession/LXDE-pi/autostart)

if [ -f "$FILE" ]; then
    size=$(wc -c /home/pi/SmartMirror/logs/success.txt | awk '{print $1}')
    if [ $size -eq 0 ]; then
        if [ $LINECOUNT -gt 7 ]; then
            sudo sed -i '8,$d' /etc/xdg/lxsession/LXDE-pi/autostart
        fi
        echo "Running wifi.py" 
        sleep 20
        python3 /home/pi/SmartMirror/scripts/wifi.py 
        echo "Finished with wifi.py"
        intsize=$(wc -c /home/pi/SmartMirror/logs/internet_status.txt | awk '{print $1}')
        
        if [ $intsize -gt 0 ]; then
            sudo > /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt
            echo "Entered the if with internet ON"
            /bin/bash /home/pi/GassistPi/scripts/GA2.sh & PIDGA=$!
            
            sleep 5
            
            /bin/bash /home/pi/SmartMirror/scripts/checkurl.sh & PIDURL=$!
            
            wait $PIDURL
            wait $PIDGA
        else
            echo "Entered the else without internet"
            cd /home/pi/SmartMirror/smartmirror/
            node app.js & chromium-browser --kiosk --ignore-certificate-errors --disable-restore-session-state http://localhost:3000/
        fi
    else
        if [ $LINECOUNT -gt 8 ]; then
            sudo sed -i '9,$d' /etc/xdg/lxsession/LXDE-pi/autostart
        fi
        exit
    fi
fi

#parallel -u ::: './sh.sh 1' './sh.sh 2'
exit
