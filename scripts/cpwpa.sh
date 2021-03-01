#!/bin/bash

sleep 3 
value=$(</home/pi/SmartMirror/smartmirror/network.txt)
echo "$value"

sudo tee -a /etc/wpa_supplicant/wpa_supplicant.conf > /dev/null <<EOT

$value
EOT
wmctrl -c chromium
sleep 3
echo "Rebooting now"
sudo reboot


