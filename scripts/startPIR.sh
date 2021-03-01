#!/bin/bash

pm2 start /home/pi/SmartMirror/scripts/pir.sh
echo "PIR has starteed"
echo ""
pm2 save 
echo "StartPIR.sh has been completed."
echo ""
exit
