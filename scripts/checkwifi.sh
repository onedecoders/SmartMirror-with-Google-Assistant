#!/bin/bash

set -o errexit


sudo cp /home/pi/SmartMirror/smartmirror/wpa_supplicant.conf /etc/wpa_supplicant/
echo "Done copying wpa"
wpa_cli -i wlan0 reconfigure 

sudo cp /home/pi/SmartMirror/smartmirror/wpa_supplicant.conf /etc/wpa_supplicant/
echo "Done copying wpa again"
wpa_cli -i wlan0 reconfigure 

python3 /home/pi/SmartMirror/scripts/wifi.py 

echo "checkwifi.sh is Done!"
