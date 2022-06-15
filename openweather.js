let weather;//create variable
let pollution;
let myFont;
let url1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let url2 = "&appid=e47ab545c3INVENTEDAPI34&units=metric";//appid is a token obtained openweathermp website for free
let input;
let x , y;
let z , z2;
let pos;
let wind;
let cry = -25;
let cry2 = -35;
let url3 = "http://api.waqi.info/feed/";
let url4 = "/?token=1f7a912999136935dae67ff92bec5f599751da5f";
function preload () {
  myFont=loadFont('Anna-Regular.otf');
}f
function setup() {
  textFont(myFont);
  createCanvas(2000,800);//size in pixels of the screen
  let button = select("#submit");//when I click button I can write a city
  button.mousePressed(weatherAsk);//when I press de mouse the function weatherAsk is executed
  input=select("#city");
  y = 670;
  pos = createVector(950,180);//a vector indicates a direction with two numbers
  wind = createVector();}

function weatherAsk(){
  let url = url1 + input.value() + url2;
  let url5 = url3 + input.value() + url4;
  loadJSON(url, gotData);
  loadJSON(url5, gotDate);}

function gotData(data){
  weather = data;
  let angle = radians(Number(weather.wind.deg));
  let windmag = Number(weather.wind.speed);
  wind = p5.Vector.fromAngle(angle);}

function gotDate(date){pollution = date;}
function draw() {
  background(0,0,100);
  colorMode(HSB);
  let jitter = random(10,20);
  if (pollution){
    fill(0);
    stroke(1);
    fill(0,100,0);
    textSize(24);
    text("AQI Pollution Index: " +pollution.data.aqi,80,400);
    noStroke();
    fill(0);
    rect(150,650,80,40);
    rect(350-200,650,20,-15)
    fill(20);
    ellipse(360-200, y-155, 24, 24);
    ellipse(345-200,y-160,24,24);
    y = y - 1;
    if (pollution.data.aqi>20){
      ellipse(350-200,y-170,24,24);}
    if (pollution.data.aqi>30){
      ellipse(360-200,y-175,28,28);}
    if (pollution.data.aqi>35){
      ellipse(340-200,y-173,31,31);}
    if (pollution.data.aqi>45){
      ellipse(355-200,y-177,34,34);}
    if (pollution.data.aqi>70){
      ellipse(350-200,y-175,37,37);}
   if (y < height-80) {y = height - 10;}
 }
  if (weather) {
    let h = map(weather.main.temp,-15,35,200,360);
    stroke(1);
    fill(0,100,0);
    textSize(24);
    text("Humidity: " +weather.main.humidity+" %",400,30);
    fill(0,100,0);
    textSize(24);
    text("Temperature: " +weather.main.temp+" C",80,30);
    fill(0,100,0);
    textSize(24);
    text("Pressure: " +weather.main.pressure+" hPa",600,30);
    fill(0,100,0);
    textSize(24);
    text("Wind Speed: " +weather.wind.speed+" m/s",850,30);
    fill(0,100,0);
    textSize(24);
    text("Clouds: " +weather.clouds.all+ " %",1100,30);
    speechSynthesis.speak(new SpeechSynthesisUtterance("The temperature in this city is about"+weather.main.temp+"celsius degrees,the humidity in this city is about" +weather.main.humidity+"percent, the preassure in this city is about"+weather.main.pressure+"hectopascals, the wind speed is about"+weather.wind.speed+" meters per second, the clouds in this city is about "+weather.clouds.all+" percent"));
    
    if (weather.main.temp<15) {
      fill(h,100,100);
      ellipse(200,150,200,200);
      fill(h,100,100);
      arc(160,115,50,50,0,PI);
      fill(h,100,100);
      arc(240,115,50,50,0,PI);
      fill(h,100,100);
      arc(200,200,75,75,PI,0);}
    else {
      fill(h,100,100);
      ellipse(200,150,200,200);
      ellipseMode(RADIUS);
      fill(0,0,100);
      ellipse(160,125,25,25);
      ellipseMode(CENTER);
      fill(0,100,0);
      ellipse(160,125,25,25);
      ellipseMode(RADIUS);
      fill(0,0,100);
      ellipse(240,125,25,25);
      ellipseMode(CENTER);
      fill(0,100,0);
      ellipse(240,125,25,25);
      fill(325,45,100);
      arc(200,175,100,100,0,PI,CHORD);}

     if(weather.main.temp<0) {
     fill(h,100,100);
     ellipse(200,150,200+jitter,200);
     fill(h,100,100);
     arc(160,115,50,50,0,PI);
     fill(h,100,100);
     arc(240,115,50,50,0,PI);
     fill(h,100,100);
     arc(200,200,75,75,PI,0);
     fill(0,100,100);
     arc(200,100,175+jitter,100,PI,TWO_PI);
     fill(0,0,100);
     ellipse(200,50,20+jitter,20);}

     if(weather.main.temp>30){
     fill(h,100,100);
     ellipse(200,150,200,200);
     fill(0,100,0);
     ellipse(160,125,50,50);
     fill(0,100,0);
     ellipse(240,125,50,50);
     fill(325,45,100);
     arc(200,175,100,100,0,PI, CHORD);
     fill(0,100,0);
     rect(150,100,100,5);
     noStroke();
     fill(195,96,100);
     triangle(120,180+cry,125,175+cry2,130,180+cry);
     ellipse(125,180+cry,10,10);
     triangle(280,190+cry,285,185+cry2,290,190+cry);
     ellipse(285,190+cry,10,10);
     cry=cry+0.2;
     if (cry>-10) {cry=-25;}
     cry2=cry2+0.2;
     if (cry2>-20) {cry2=-35;}
    }

    if(weather.wind.speed){
    pos.add(wind);
    stroke(1);
    fill(180,100,100);
    rect(875,105,150,150);
    fill(0,100,100);
    ellipse(pos.x,pos.y,20,20);
    if (pos.x < 885 ){ pos.x = 1015;}
    if (pos.x > 1015){ pos.x = 885;}
    if (pos.y < 115){ pos.y = 245;}
    if (pos.y > 245){ pos.y = 115;} }

   if(weather.main.humidity){
       fill(55,100,100);
       ellipse(455,240,100,100);
       fill(260,100,100);
       ellipse(455,240,weather.main.humidity,weather.main.humidity);
       fill(60);
       rect(435,140,40,-50);
       noStroke();
       fill(195,96,100);
       triangle(460,180+cry,465,175+cry2,470,180+cry);
       ellipse(465,180+cry,10,10);
       triangle(440,190+cry,445,185+cry2,450,190+cry);
       ellipse(445,190+cry,10,10);
       cry=cry+0.2;
       if (cry>-10) {cry=-25;}
       cry2=cry2+0.2;
       if (cry2>-20) {cry2=-35;}
     }

  if(weather.main.pressure){
     noStroke();
     fill(0,0,0);
     rect(650,105,50,200);
     fill(120,100,60)
     rect(650,(weather.main.pressure/4)-50,50,5);}

  if(weather.clouds.all){
    noStroke();
    fill(60,100,100);
    rect(1150,140,40,100);
    fill(179,140,86);
    ellipse(1155,128,30,30);
    ellipse(1170,128,30,30);
    ellipse(1185,128,30,30);
    ellipse(1160,117,30,30);
    ellipse(1175,117,30,30);
    ellipse(1155,235,30,30);
    ellipse(1170,235,30,30);
    ellipse(1185,235,30,30);
    ellipse(1160,245,30,30);
    ellipse(1175,245,30,30);
    fill(0,100,80);
    rect(1150,235-weather.clouds.all,40,5);}
}
}
