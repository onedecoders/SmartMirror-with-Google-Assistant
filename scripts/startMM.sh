#!/bin/bash

pm2 start /home/pi/SmartMirror/scripts/mm.sh
echo "MM has started"
echo ""
pm2 save
exit
