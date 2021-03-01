import urllib.request
import urllib.error
import socket

loop=1
error=0


def Internet_check(error):
    while loop==1:
        try:
            urllib.request.urlopen("http://www.google.com", timeout=10)
            
        except urllib.error.URLError as err: 
            
            error="intoff"
            
        except socket.timeout as er:
    
            error="timeout"
           
        except socket.error as errr:
            
            error="sockerr"
            
        else:
            error="inton"

        return error 

status=Internet_check(error)
#while(status!="inton"):
status=Internet_check(error)

if(status=="inton"):
    f = open("/home/pi/SmartMirror/logs/internet_status.txt", "w")
    f.write("INT_STATUS='inton'")
    f.close()
else:
    f = open("/home/pi/SmartMirror/logs/internet_status.txt", "w")
    f.write("")
    f.close()

