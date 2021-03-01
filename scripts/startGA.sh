#!/bin/bash

pm2 start /home/pi/SmartMirror/scripts/ga.sh
echo "GA has starteed"
echo ""
pm2 save 
echo "Success.sh has been completed."
echo ""
exit
