let ip;
let ip_api = 'https://api.ipify.org?format=json';

let currentTemp, dayNight, temp5Hours;
let weather_api = 'https://api.open-meteo.com/v1/forecast?latitude=36.5&longitude=127.75&current=temperature_2m,is_day&hourly=temperature_2m&forecast_days=1';

async function getIP(){
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;

}

async function getWeather(){
  let data = await fetch(weather_api);
  let j_data = await data.json();
  currentTemp = j_data.current.temperature_2m;
  dayNight = j_data.current.is_day;
  temp5Hours = j_data.hourly.temperature_2m[5];
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  getIP();
  getWeather();

}

function draw() {
  background(135, 206, 235);

  textSize(15);
  text("Ipify API: " + ip, windowWidth/2, windowHeight - 30);

  textSize(15);
  text("Currrent Temperature: " + currentTemp + "°C", windowWidth/2, 300);
  text("Day or Night:", windowWidth/2, 320);
  text("Temperature in 5 hours later: " + temp5Hours + "°C", windowWidth/2, 340);
  
  if(dayNight == 0){
    textSize(20)
    text("🌑", windowWidth/2 + 95, 323);
  } else {
    text("☀️", windowWidth/2 + 95, 323);
  }

  textSize(100);
  text("🇰🇷", windowWidth/2, 260);
  
  textSize(25)
  text("WEATHER IN KOREA", windowWidth/2 + 100, 240);
}


