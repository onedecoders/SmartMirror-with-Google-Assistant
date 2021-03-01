const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

const app = express();

app.locals.enable = true;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var obj = [{
  "location":"Ahmedabad",
  "locationID":"1279233"
},
{
  "location":"Amritsar",
  "locationID":"1278710"
},
{
  "location":"Bhopal",
  "locationID":"1275841"
},
{
  "location":"Bengaluru",
  "locationID":"1277333"
},
{
  "location":"Bhubaneshwar",
  "locationID":"1275817"
},
{
  "location":"Chandigarh",
  "locationID":"1274746"
},
{
  "location":"Chennai",
  "locationID":"1264527"
},
{
  "location":"Chinchvad",
  "locationID":"1274165"
},
{
  "location":"Cochin",
  "locationID":"1273874"
},
{
  "location":"Coimbatore",
  "locationID":"1273865"
},
{
  "location":"Dehra Dūn",
  "locationID":"1273313"
},
{
  "location":"Delhi",
  "locationID":"1273294"
},
{
  "location":"Dhanbād",
  "locationID":"1272979"
},
{
  "location":"Faridabad",
  "locationID":"1271951"
},
{
  "location":"Gaya",
  "locationID":"1271439"
},
{
  "location":"Gorakhpur",
  "locationID":"1270926"
},
{
  "location":"Greater Noida",
  "locationID":"6954929"
},
{
  "location":"Guwahati",
  "locationID":"1271476"
},
{
  "location":"Indore",
  "locationID":"1269743"
},
{
  "location":"Jaipur",
  "locationID":"1269515"
},
{
  "location":"Jalandhar",
  "locationID":"1268782"
},
{
  "location":"Jamshedpur",
  "locationID":"1269300"
},
{
  "location":"Jodhpur",
  "locationID":"1268865"
},
{
  "location":"Kanpur",
  "locationID":"1267995"
},
{
  "location":"Kolhāpur",
  "locationID":"1266285"
},
{
  "location":"Kolkata",
  "locationID":"1275004"
},
{
  "location":"Lucknow",
  "locationID":"1264733"
},
{
  "location":"Ludhiāna",
  "locationID":"1264728"
},
{
  "location":"Meerut",
  "locationID":"1263214"
},
{
  "location":"Mumbai",
  "locationID":"1275339"
},
{
  "location":"Mysore",
  "locationID":"1262321"
},
{
  "location":"Nagpur",
  "locationID":"1262180"
},
{
  "location":"Nashik",
  "locationID":"1261731"
},
{
  "location":"Navi Mumbai",
  "locationID":"6619347"
},
{
  "location":"New Delhi",
  "locationID":"1261481"
},
{
  "location":"Panaji",
  "locationID":"1260607"
},
{
  "location":"Patna",
  "locationID":"1260086"
},
{
  "location":"Pimpri",
  "locationID":"1259652"
},
{
  "location":"Pondicherry",
  "locationID":"1259425"
},
{
  "location":"Pune",
  "locationID":"1259229"
},
{
  "location":"Raipur, Chhattisgarh",
  "locationID":"1258980"
},
{
  "location":"Raipur, Rajasthan",
  "locationID":"1258972"
},
{
  "location":"Rajkot",
  "locationID":"1258847"
},
{
  "location":"Ranchi",
  "locationID":"1258526"
},
{
  "location":"Shillong",
  "locationID":"1256523"
},
{
  "location":"Shimla",
  "locationID":"1256237"
},
{
  "location":"State of Jharkhand",
  "locationID":"1444365"
},
{
  "location":"Surat",
  "locationID":"2147854"
},
{
  "location":"Thane",
  "locationID":"5557906"
},
{
  "location":"Thiruvanantpuram",
  "locationID":"1254163"
},
{
  "location":"Vadodra",
  "locationID":"1253573"
},
{
  "location":"Vasai",
  "locationID":"1253372"
},
{
  "location":"Vijayawada",
  "locationID":"1253184"
},
{
  "location":"Visakhapatnam",
  "locationID":"1253102"
},
];


// let header =`ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdeve
// update_config=1
// country=IN`

// fs.writeFile("/home/pi/SmartMirror/smartmirror/wpa_supplicant.conf", header + "\n\n", function(err) {
// // fs.writeFile("wpa_supplicant.conf", header + "\n\n", function(err) {

//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 


// ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
// update_config=1
// country=IN

// network={
// 	ssid="Verma's"
// 	psk="Verma@1974"
// 	key_mgmt=WPA-PSK
// }

// network={
// 	ssid="Deepak"
// 	psk="987654321"
// 	key_mgmt=WPA-PSK
// }
fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt", "" , function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The URL was emptied!");
  }); 

fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/authtoken.txt", "" , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The URL was emptied!");
    }); 

app.get("/", function(req, res) {
  res.render("welcome");
});




app.get("/token", function(req, res) {
  res.render("token");
});


app.post("/token", function(req, res) {
  let mytoken = req.body.token;
  let token = `token=${mytoken}`;
  
  console.log(token);

  fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/authtoken.txt", token , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 

fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt", "" , function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The URL was emptied!");
  }); 
  
  res.redirect("/finish");


});

app.get("/finish", function(req, res) {
  res.render("finish");
});

app.get("/done", function(req, res) {
  let emptyit = ""
  
  let success = 1;
  success = `success=${success}`

  fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/authtoken.txt", emptyit , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was emptied!");
 }); 

 fs.writeFile("/home/pi/SmartMirror/logs/internet_status.txt", emptyit , function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was emptied!");
  }); 

  fs.writeFile("/home/pi/env/lib/python3.7/site-packages/google_auth_oauthlib/url.txt", emptyit , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was emptied!");
    }); 

  fs.writeFile("/home/pi/SmartMirror/logs/success.txt", success , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file is generated!");
  }); 
  // Running success.sh here
  const myShellScript = exec('bash /home/pi/SmartMirror/scripts/success.sh');
  myShellScript.stdout.on('data', (data)=>{
      console.log(data); 
      // do whatever you want here with data
  });
  myShellScript.stderr.on('data', (data)=>{
      console.error(data);
  });

  res.redirect("/finish");

});

app.get("/wifi", function(req, res) {
  res.render("wifi")
});

app.post("/wificonnect", function(req, res) {

  let ssid = req.body.ssid;
  let pwd = req.body.pwd;
  let wifi = `${ssid} ${pwd}`
  
  let cred = `network={
	ssid="${ssid}"
	psk="${pwd}"
  key_mgmt=WPA-PSK
  priority=1
}`
console.log(wifi);
  // console.log(ssid, pwd);


  var promise = new Promise(function(resolve, reject) {
    fs.writeFile("/home/pi/SmartMirror/smartmirror/network.txt", cred , function(err) {
    // fs.appendFile("network.txt", cred , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The wpa file was saved!");
      // Running cpwpa.sh script 
      resolve(true);      
      }); 
  });

  promise.then(startbash).then(function(response) {
    console.log(response);
  });
  
  function startbash() {
      const part1 = exec('bash /home/pi/SmartMirror/scripts/cpwpa.sh');
      part1.stdout.on('data', (data)=>{
          console.log(data); 
          // do whatever you want here with data
      });
      part1.stderr.on('data', (data)=>{
          console.error(data);
      });
      return true;
  }
  console.log("Before redirection");
  app.locals.enable = false;

  res.redirect("/wifi");

});

app.get("/userdata", function(req, res) {

  res.render("userdata", {obj : obj});
});

app.post("/userdata", function(req, res) {
  let myName = req.body.myName;
  let DOB = req.body.DOB;
  let email = req.body.email;
  let calendarUrl = req.body.calendarUrl;
  let locations = JSON.parse(req.body.myLocation);
  let myLocation = locations.location;
  let myLocationId = locations.locationID;
  var bdate = DOB.split(/-|-/);
  console.log("Date:" + bdate[0] + " " + bdate[1] + " " + bdate[2]);

  console.log("In POST" + " " + myName + " " + DOB + " " + calendarUrl + " " + calendarUrl + " " + myLocation + " " + myLocationId + " ");
  let myconfig = `var config = 
  {
    address: '0.0.0.0',
    port: 8080,
    ipWhitelist: [],
    useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
    httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true
  
    language: "en",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"],
    timeFormat: 24,
    units: "metric",
    modules: [
      {
        module: 'alert',
      },
//      {
//       module: 'updatenotification',
//        position: 'top_bar',
//      },
      {
        module: 'clock',
        position: 'top_left',
      },
      {
        module: 'calendar',
        header: "${myName}'s Calendar",
        position: 'top_left',
        config: {
          calendars: [
            {
              symbol: 'calendar-check',
              url: 'webcal://www.calendarlabs.com/ical-calendar/ics/33/INDIA_Holidays.ics'
            },
            {
              symbol: 'calendar-check',
              url: '${calendarUrl}'
            }
          ]
        }
      },
      {
        module: 'compliments',
        position: 'middle_center',
      },
      {
        module: 'currentweather',
        position: 'top_right',
        config: {
          location: '${myLocation}',
          locationID: '${myLocationId}',   
          appid: '92dcf049143af00257aae7fdc1c1d54f'
        }
      },
      {
        module: 'weatherforecast',
        position: 'top_right',
        header: 'my day ',
        config: {
          location: '${myLocation}',
          locationID: '${myLocationId}',
          appid: '92dcf049143af00257aae7fdc1c1d54f'
        }
      },
      {
        module: 'newsfeed',
        position: 'lower_third',
        config: {
          feeds: [
            {
              title: 'The Indian Express',
              url: 'https://indianexpress.com/feed/'
            },
            {
              title: 'NDTV News',
              url: 'http://feeds.feedburner.com/NDTV-LatestNews'
            },
            {
              title: 'The Times of India',
              url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms?x=1'
            },
            {
              title: 'India Today',
              url: 'https://www.indiatoday.in/rss/1206578'
            }
          ],
          showDescription: true,
          showSourceTitle: true,
          showPublishDate: true,
          broadcastNewsFeeds: true,
          broadcastNewsUpdates: true,
        }
      },
      {
        module: 'MMM-Remote-Control',
        config: {
          apiKey: 'd85b1c91f1bc4c45a2d8d69f17ebdb5a'
        }
      },
      {
        module: 'helloworld',
        position: 'bottom_right',
        config: {
          text: 'CabbageSoft Technologies'
        }
      },
  
    ],
  
  }
  
  /*************** DO NOT EDIT THE LINE BELOW ***************/
  if (typeof module !== 'undefined') {module.exports = config;}`

  fs.writeFile("/home/pi/SmartMirror/logs/config.txt", myconfig , function(err) {
    // fs.writeFile("config.txt", myconfig , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was filled!");
    });

  let compliments = `/* Magic Mirror
  * Module: Compliments
  *
  * By Michael Teeuw https://michaelteeuw.nl
  * MIT Licensed.
  */
 Module.register("compliments", {
   // Module config defaults.
   defaults: {
     compliments: {
       anytime: ["Hey there beautiful!"],
       morning: ["Good morning, handsome!", "Enjoy your day!", "How was your sleep?"],
       afternoon: ["Hello, beauty!", "You look awesome!", "Looking good today!"],
       evening: ["Wow, you look beautiful!", "You look nice!", "Hi, beautiful!"],
       day_sunny: ["Today is a sunny day", "It's a beautiful day"],
       snow: ["Snowball battle!"],
       rain: ["Don't forget your umbrella"],
       "....-01-01": ["Happy New Year!"],
       "....-01-26": ["Happy Republic Day!"],
       "....-08-15": ["Happy Independence Day!"],
       "....-10-31": ["Happy Halloween!"],
       "....-12-25": ["Merry Christmas"],
       "....-${bdate[1]}-${bdate[2]}": ["Happy Birthday ${myName}!"],
 
     
     },
     updateInterval: 30000,
     remoteFile: null,
     fadeSpeed: 4000,
     morningStartTime: 3,
     morningEndTime: 12,
     afternoonStartTime: 12,
     afternoonEndTime: 17,
     random: true,
     mockDate: null
   },
   lastIndexUsed: -1,
   // Set currentweather from module
   currentWeatherType: "",
 
   // Define required scripts.
   getScripts: function () {
     return ["moment.js"];
   },
 
   // Define start sequence.
   start: function () {
     Log.info("Starting module: " + this.name);
 
     this.lastComplimentIndex = -1;
 
     var self = this;
     if (this.config.remoteFile !== null) {
       this.complimentFile(function (response) {
         self.config.compliments = JSON.parse(response);
         self.updateDom();
       });
     }
 
     // Schedule update timer.
     setInterval(function () {
       self.updateDom(self.config.fadeSpeed);
     }, this.config.updateInterval);
   },
 
   /* randomIndex(compliments)
    * Generate a random index for a list of compliments.
    *
    * argument compliments Array<String> - Array with compliments.
    *
    * return Number - Random index.
    */
   randomIndex: function (compliments) {
     if (compliments.length === 1) {
       return 0;
     }
 
     var generate = function () {
       return Math.floor(Math.random() * compliments.length);
     };
 
     var complimentIndex = generate();
 
     while (complimentIndex === this.lastComplimentIndex) {
       complimentIndex = generate();
     }
 
     this.lastComplimentIndex = complimentIndex;
 
     return complimentIndex;
   },
 
   /* complimentArray()
    * Retrieve an array of compliments for the time of the day.
    *
    * return compliments Array<String> - Array with compliments for the time of the day.
    */
   complimentArray: function () {
     var hour = moment().hour();
     var date = this.config.mockDate ? this.config.mockDate : moment().format("YYYY-MM-DD");
     var compliments;
 
     if (hour >= this.config.morningStartTime && hour < this.config.morningEndTime && this.config.compliments.hasOwnProperty("morning")) {
       compliments = this.config.compliments.morning.slice(0);
     } else if (hour >= this.config.afternoonStartTime && hour < this.config.afternoonEndTime && this.config.compliments.hasOwnProperty("afternoon")) {
       compliments = this.config.compliments.afternoon.slice(0);
     } else if (this.config.compliments.hasOwnProperty("evening")) {
       compliments = this.config.compliments.evening.slice(0);
     }
 
     if (typeof compliments === "undefined") {
       compliments = new Array();
     }
 
     if (this.currentWeatherType in this.config.compliments) {
       compliments.push.apply(compliments, this.config.compliments[this.currentWeatherType]);
     }
 
     compliments.push.apply(compliments, this.config.compliments.anytime);
 
     for (var entry in this.config.compliments) {
       if (new RegExp(entry).test(date)) {
         compliments.push.apply(compliments, this.config.compliments[entry]);
       }
     }
 
     return compliments;
   },
 
   /* complimentFile(callback)
    * Retrieve a file from the local filesystem
    */
   complimentFile: function (callback) {
     var xobj = new XMLHttpRequest(),
       isRemote = this.config.remoteFile.indexOf("http://") === 0 || this.config.remoteFile.indexOf("https://") === 0,
       path = isRemote ? this.config.remoteFile : this.file(this.config.remoteFile);
     xobj.overrideMimeType("application/json");
     xobj.open("GET", path, true);
     xobj.onreadystatechange = function () {
       if (xobj.readyState === 4 && xobj.status === 200) {
         callback(xobj.responseText);
       }
     };
     xobj.send(null);
   },
 
   /* complimentArray()
    * Retrieve a random compliment.
    *
    * return compliment string - A compliment.
    */
   randomCompliment: function () {
     // get the current time of day compliments list
     var compliments = this.complimentArray();
     // variable for index to next message to display
     let index = 0;
     // are we randomizing
     if (this.config.random) {
       // yes
       index = this.randomIndex(compliments);
     } else {
       // no, sequential
       // if doing sequential, don't fall off the end
       index = this.lastIndexUsed >= compliments.length - 1 ? 0 : ++this.lastIndexUsed;
     }
 
     return compliments[index] || "";
   },
 
   // Override dom generator.
   getDom: function () {
     var wrapper = document.createElement("div");
     wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
     // get the compliment text
     var complimentText = this.randomCompliment();
     // split it into parts on newline text
     var parts = complimentText.split("\\n");
     // create a span to hold it all
     var compliment = document.createElement("span");
     // process all the parts of the compliment text
     for (var part of parts) {
       // create a text element for each part
       compliment.appendChild(document.createTextNode(part));
       // add a break 
       compliment.appendChild(document.createElement("BR"));
     }
     // remove the last break
     compliment.lastElementChild.remove();
     wrapper.appendChild(compliment);
 
     return wrapper;
   },
 
   // From data currentweather set weather type
   setCurrentWeatherType: function (data) {
     var weatherIconTable = {
       "01d": "day_sunny",
       "02d": "day_cloudy",
       "03d": "cloudy",
       "04d": "cloudy_windy",
       "09d": "showers",
       "10d": "rain",
       "11d": "thunderstorm",
       "13d": "snow",
       "50d": "fog",
       "01n": "night_clear",
       "02n": "night_cloudy",
       "03n": "night_cloudy",
       "04n": "night_cloudy",
       "09n": "night_showers",
       "10n": "night_rain",
       "11n": "night_thunderstorm",
       "13n": "night_snow",
       "50n": "night_alt_cloudy_windy"
     };
     this.currentWeatherType = weatherIconTable[data.weather[0].icon];
   },
 
   // Override notification handler.
   notificationReceived: function (notification, payload, sender) {
     if (notification === "CURRENTWEATHER_DATA") {
       this.setCurrentWeatherType(payload.data);
     }
   }
 });`

   fs.writeFile("/home/pi/SmartMirror/logs/compliments.txt", compliments , function(err) {
    // fs.writeFile("complements.txt", compliments , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was filled!");
      });
    
  // writing Email to file
  fs.writeFile("/home/pi/SmartMirror/scripts/rec.py", `email="${email}"`, function(err) {
    // fs.writeFile("rec.py", `email="${email}"`, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was filled!");
      });


  res.redirect("/token");

});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started...");
});
