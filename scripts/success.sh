#!/bin/bash

set -o errexit


LINECOUNT=$(wc -l < /etc/xdg/lxsession/LXDE-pi/autostart)

sudo tee -a /etc/xdg/lxsession/LXDE-pi/autostart > /dev/null <<EOT
@chromium-browser --kiosk --ignore-certificate-errors --disable-restore-session-state 
EOT
	
/bin/bash /home/pi/SmartMirror/scripts/userdata.sh
/bin/bash /home/pi/SmartMirror/scripts/startMM.sh & /bin/bash /home/pi/SmartMirror/scripts/startGA.sh & /bin/bash /home/pi/SmartMirror/scripts/startPIR.sh

if [ $LINECOUNT -gt 8 ]; then
	sudo sed -i '9,$d' /etc/xdg/lxsession/LXDE-pi/autostart
	echo "Extra lines deleted from autostart"
fi

echo "Restarting the system"
sudo reboot
