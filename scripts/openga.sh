#!/bin/bash

set -o errexit

count=0
size=0
temp=0

echo "Loop Number $count"
size=$(wc -c /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt | awk '{print $1}')

while [ $size -eq 0 ]; do
	temp=$(wc -c /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt | awk '{print $1}')
	size=$temp
done

#source /home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt
URL=$(</home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt)
echo "Now printing URl from checkURL"
echo "$URL"

cd /home/pi/SmartMirror/smartmirror/
chromium-browser --kiosk $URL

echo "checkurl.sh is Done!"
count=count+1
