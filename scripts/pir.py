# Download the helper library from https://www.twilio.com/docs/python/install
#from twilio.rest import Client #You must install this Library in Your System.
import RPi.GPIO as GPIO
import os
import time
import rec
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
# import Adafruit IO REST client.
from Adafruit_IO import Client, Feed

# Set to your Adafruit IO key.
# Remember, your key is a secret,
# so make sure not to publish it when you publish this code!
ADAFRUIT_IO_KEY = 'aio_MLDs72EaHtlD80HLvEvwrBqIt19H'

# Set to your Adafruit IO username.
# (go to https://accounts.adafruit.com to find your username).
ADAFRUIT_IO_USERNAME = 'decoder8421'

# Create an instance of the REST client.
aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

email = rec.email
count=0                 # This variable control the Flow of message sending.Without this messages will be send more than for each State(Low Or High).
msg=0                   # Stores the Message(User Defined).
start=0
myloop=0
total_time=0
diff=0
state=0
highcount=0
lowcount=0
mqtt="off"
switch_button = 12      # read switch button Low or High
PIR_input = 29				#read PIR input.Low or High
# Led is Optional.If you want, you can connect.
LED = 32				#LED 
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)		#choose pin number system 
GPIO.setup(PIR_input, GPIO.IN)          #PIR_input as Input.
GPIO.setup(switch_button, GPIO.IN)          #PIR_input as Input
GPIO.setup(LED, GPIO.OUT)               #LED as an OUTPUT.
GPIO.output(LED, GPIO.LOW)              #Initially Led must be off.

GPIO.input(switch_button)

def fun():
    global start
    global state
    global total_time
    global mqtt
    global count
    time.sleep(0)
    while 1:
        print("Current state:",GPIO.input(PIR_input))
        if(GPIO.input(PIR_input)==1):
            if(state==0):
                start=time.time()
                count=0
            total_time=time.time()-start
            print("Time elapsed: ",total_time)
            #time.sleep(1)
            state=1
            
        elif(GPIO.input(PIR_input)==0):
            if(state != GPIO.input(PIR_input)):
                state=0
                break
#        time.sleep(5)
        
        #mqtts = value()
    return total_time
        
def send(msg):
    message = Mail(
        from_email='decoder8421@gmail.com',
        #to_emails='kv77724@gmail.com',
        to_emails=email,
        subject='Intruder Alert!',
        html_content='<strong>'+'{}'.format(msg)+'</strong>')
    try:
        #sg = SendGridAPIClient(os.environ.get('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'))
        sg = SendGridAPIClient('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')
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e)
        print(e.body)
# while 1:
#     #print("Loop count: ",myloop)
#     print("PIR Status: ",GPIO.input(PIR_input))


try:
    OnOff = aio.feeds('onoff')
except:
    new_feed = Feed(name='onoff')
    aio.create_feed(new_feed)

#aio.send(OnOff.key, "OFF")
def value():
    value = aio.receive('onoff').value
    return value
try:
    mqtt = value()
except:
    pass
mqtt = mqtt.upper()
print(mqtt)

while 1:
#     if(mqtt=="ON"):
#         print("Switch On")
        #while 1:
#             if(GPIO.input(PIR_input)):

    if(mqtt == "ON"):
        print("User is Serious about security")
        if(fun()>=0.5):
                
                msg="Alert!!! Somebody At Home" # Assigning this value to "msg" variable when PIR is HIGH.
                GPIO.output(LED, GPIO.HIGH)
                print("I am looted....Please help")
                try:
                    mqtt=value()
                except:
                    pass
                mqtt = mqtt.upper()
                if(count==0 and mqtt=="ON"):
                    try:
                        send(msg)
                    except:
                        pass
                    print("Sent")
                    count=1
                    time.sleep(180)
                    
                    
        else:
            print("We are safe")
            GPIO.output(LED, GPIO.LOW)
#                print("Police...Im ok")
            if(count==1):
                count=0
#    else:
#        time.sleep(3)
#         global mqtt
    else:
        print("User is not worried about security")
        try:
            mqtt=value()
        except:
            pass
        mqtt = mqtt.upper()
        time.sleep(6)


            
        
