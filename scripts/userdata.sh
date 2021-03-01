#!/bin/bash

var1=$(</home/pi/SmartMirror/logs/config.txt)

destdir1=/home/pi/MagicMirror/config/config.js

if [ -f "$destdir1" ]
then 
    echo "$var1" > "$destdir1"
fi

var2=$(</home/pi/SmartMirror/logs/compliments.txt)

destdir2=/home/pi/MagicMirror/modules/default/compliments/compliments.js

if [ -f "$destdir2" ]
then 
    echo "$var2" > "$destdir2"
fi
