     let weather;
let input;// city value
let urlpro1 = "https://api.weatherbit.io/v2.0/current?city=";//link1
let urlpro2 = "&key=f9bbfd9bcINVENTEDAPI08b2470";//link2
let cname;
let rh;
let cl;
let wp;
let snow;
let ss;
let sr;
let temp;
let pr;
let aqi;
let uv;
let querydone = false;// We create variable that it's false

 
//Here we create the variables that we are gonna use along the code

function setup () {
  createCanvas(2000,1300); //Create the Canvas to draw
  let button = select("#submit");//Create a variable and we give it the submit value from the button
  button.mousePressed(weatherAsk);//When the mouse is pressed the function weatherAsk runs
  input=select("#city");//Input have the value of the city in the submit button
  textSize(17);

}

function weatherAsk () {
  let url = urlpro1 + input.value() + urlpro2; //We put together the 1rs part of the url with input value (city) and the 2nd part of the url
  loadJSON(url, gotData); //We charge the JSON and we run the function gotData


}
function gotData(weather){
  colorMode(RGB);//We put red, green, blue to the color mode
  lon = weather.data[0].lon;//We assign a value from the json to a variable
  lat = weather.data[0].lat;
  cname = weather.data[0].city_name;
  rh = weather.data[0].rh;
  cl = weather.data[0].clouds;
  wp = weather.data[0].wind_spd;
  snow = weather.data[0].snow;
  ss = weather.data[0].sunset;
  sr = weather.data[0].sunrise;
  temp = weather.data[0].temp;
  uv = weather.data[0].uv;
  aqi = weather.data[0].aqi;
  pr = map(weather.data[0].pres,0,1500,0,200);//We assign a value from the json to a variable but in this time we map to make another interval

  console.log(weather);
  console.log(weather.data);
  console.log(weather.data["0"].lon);
  console.log(weather.data["0"].city_name);
  console.log(lon);
  console.log(temp);
//console.log to control the variable
  querydone = true; //Now querydone is true

  speechSynthesis.speak(new SpeechSynthesisUtterance("The longitude of "+cname+" is "+lon+" degrees"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The latitude of "+cname+" is "+lon+" degrees"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The relatively humidity in "+cname+" is "+rh+" percentage"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The cloud average in "+cname+" is "+cl+" percentage"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The wind speed in "+cname+" is "+wp+" meters per second"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The snow in "+cname+" is "+snow+" mm/hr"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The sunset in "+cname+" is "+ss));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The sunrise in "+cname+" is "+sr));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The pressure in "+cname+" is "+pr+" milibars"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The temperature in "+cname+" is "+temp+" degrees centigrads"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The Air Quality Index in "+cname+" is "+aqi));
  speechSynthesis.speak(new SpeechSynthesisUtterance("The UV Index in "+cname+" is "+uv));
    // To make speach and read the values
}

function draw(){
  background(255);//background color
  stroke(5);
  fill(0);

  if (querydone) { // As querydone is true, now the text will show up
    text("The longitud of "+cname+" is "+lon+" degrees",0,50);
    text("The latitude of "+cname+" is "+lat+" degrees",0,80);
    text("The relatively humidity in "+cname+" is "+rh+" %",500,590);
    text("The cloud average in "+cname+" is "+cl+" %",400,750);
    text("The wind speed in "+cname+" is "+wp+" m/s",1300,1075);
    text("The snow in "+cname+" is "+snow+" mm/hr",1200,750);
    text("The sunset in "+cname+" is on "+ss+" hh/mm",775,400);
    text("The sunrise in "+cname+" is "+sr+" hh/mm",1150,400);
    text("The pressure in "+cname+" is "+pr+" milibars",0,775);
    text("The temperature in "+cname+" is "+temp+" degrees centigrads",300,550);
    text("The Air Quality Index in "+cname+" is "+aqi,400,900);
    text("The UV Index in "+cname+" is "+uv,800,1000);

    //sunset
    fill(248,0,0);
    stroke(252,147,3);
    line(800,500,1000,500);
    arc(905,500,80,80,PI,0); //The sun
    //
    line(810,460,865,475); // the lines around the sun
    line(835,440,880,460);
    line(860,420,895,455);
    //
    line(980,460,945,475);
    line(965,440,930,465);
    line(950,420,915,455);
    //
    line(905,410,905,455);

    //sunrise
    fill(255,150,0);
    stroke(255,215,0);
    line(1200,500,1400,500);
    arc(1295,500,80,80,PI,0);// The sun
    //
    line(1210,460,1245,475); // the lines around the sun
    line(1235,440,1270,465);
    line(1260,420,1285,455);
    //
    line(1380,460,1345,475);
    line(1365,440,1330,465);
    line(1350,420,1315,455);
    //
    line(1300,410,1300,455);
  }

  if (-50 < temp && temp < -25){ // if the temperature is between -50 and -25 face1 and thermometer1 shows
  //face1
  stroke(1);
  fill(0,204,204);
  ellipse(400,400,100,100);
  fill(255);
  ellipse(420,385,20,20);
  ellipse(380,385,20,20);
  fill(0)
  ellipse(420,385,4,4);
  ellipse(380,385,4,4);
  fill(255);
  arc(400,425,60,15,PI,TWO_PI,CHORD);
  fill(0,0,255);
  triangle(390,450,395,470,400,450);
  triangle(405,450,407,460,410,450);
  triangle(395,450,400,490,405,450);
  triangle(380,430,385,455,390,430);
  triangle(415,395,420,415,425,395);


  //thermometer1
  noFill();
  arc(500,500,60,60,-(1/4)*PI,(5/4)*PI)
  arc(500,270,40,40,PI,TWO_PI,OPEN);
  line(479,270,478,479);
  line(520,270,521,479);
  fill(0,0,255);
  stroke(1);
  ellipse(500,500,40,40);
  arc(500,440,20,20,PI,TWO_PI,OPEN);
  noStroke();
  rect(489,440,21,60);
  stroke(1);
  line(489,482,489,440);
  line(510,482,510,440);

  //sidelines from the thermometer
  
  line(515,470,520,470);//-50
  line(515,460,520,460);//-45
  line(515,450,520,450);//-40
  line(515,440,520,440);//-35
  line(515,430,520,430);//-30
  line(515,420,520,420);//-25
  line(515,410,520,410);//-20
  line(515,400,520,400);//-15
  line(515,390,520,390);//-10
  line(515,380,520,380);//-5
  line(515,370,520,370);//0
  line(515,360,520,360);//5
  line(515,350,520,350);//10
  line(515,340,520,340);//15
  line(515,330,520,330);//20
  line(515,320,520,320);//25
  line(515,310,520,310);//30
  line(515,300,520,300);//35
  line(515,290,520,290);//40
  line(515,280,520,280);//45
  line(515,270,520,270);//50

} else   if (-25 < temp && temp < 0){ // if the temperature is between -25 and 0 face2 and thermometer2 shows
  //face2
  stroke(1);
  fill(0,204,204);
  ellipse(400,400,100,100);
  fill(255);
  ellipse(420,385,20,20);
  ellipse(380,385,20,20);
  fill(0)
  ellipse(420,385,4,4);
  ellipse(380,385,4,4);
  fill(255);
  arc(400,425,60,15,PI,TWO_PI,CHORD);

  //thermometer2
  noFill();
  arc(500,500,60,60,-(1/4)*PI,(5/4)*PI)
  arc(500,270,40,40,PI,TWO_PI,OPEN);
  line(479,270,478,479);
  line(520,270,521,479);
  fill(0,255,255);
  stroke(1);
  ellipse(500,500,40,40);
  arc(500,400,20,20,PI,TWO_PI,OPEN);
  noStroke();
  rect(489,400,21,100);
  stroke(1);
  line(489,482,489,400);
  line(510,482,510,400);

  //sidelines

  line(515,470,520,470);//-50
  line(515,460,520,460);//-45
  line(515,450,520,450);//-40
  line(515,440,520,440);//-35
  line(515,430,520,430);//-30
  line(515,420,520,420);//-25
  line(515,410,520,410);//-20
  line(515,400,520,400);//-15
  line(515,390,520,390);//-10
  line(515,380,520,380);//-5
  line(515,370,520,370);//0
  line(515,360,520,360);//5
  line(515,350,520,350);//10
  line(515,340,520,340);//15
  line(515,330,520,330);//20
  line(515,320,520,320);//25
  line(515,310,520,310);//30
  line(515,300,520,300);//35
  line(515,290,520,290);//40
  line(515,280,520,280);//45
  line(515,270,520,270);//50

} else if (0 < temp && temp < 25){ // if the temperature is between 0 and 25 face3 and thermometer3 shows
  //face3
  stroke(1);
  fill(253,221,202);
  ellipse(400,400,100,100);
  fill(255);
  ellipse(420,385,20,20);
  ellipse(380,385,20,20);
  fill(0)
  ellipse(420,385,4,4);
  ellipse(380,385,4,4);
  fill(255);
  arc(400,425,60,15,0,PI,CHORD);

  //thermometer3
  noFill();
  arc(500,500,60,60,-(1/4)*PI,(5/4)*PI)
  arc(500,270,40,40,PI,TWO_PI,OPEN);
  line(479,270,478,479);
  line(520,270,521,479);
  fill(252,147,3);
  stroke(1);
  ellipse(500,500,40,40);
  arc(500,340,20,20,PI,TWO_PI,OPEN);
  noStroke();
  rect(489,340,21,160);
  stroke(1);
  line(489,482,489,340);
  line(510,482,510,340);

  //sidelines

  line(515,470,520,470);//-50
  line(515,460,520,460);//-45
  line(515,450,520,450);//-40
  line(515,440,520,440);//-35
  line(515,430,520,430);//-30
  line(515,420,520,420);//-25
  line(515,410,520,410);//-20
  line(515,400,520,400);//-15
  line(515,390,520,390);//-10
  line(515,380,520,380);//-5
  line(515,370,520,370);//0
  line(515,360,520,360);//5
  line(515,350,520,350);//10
  line(515,340,520,340);//15
  line(515,330,520,330);//20
  line(515,320,520,320);//25
  line(515,310,520,310);//30
  line(515,300,520,300);//35
  line(515,290,520,290);//40
  line(515,280,520,280);//45
  line(515,270,520,270);//50

} else if (25 < temp && temp < 50) { // if the temperature is between 25 and 50 face4 and thermometer4 shows
  //face4
  stroke(1);
  fill(201,60,32);
  ellipse(400,400,100,100);
  fill(255);
  ellipse(420,385,20,20);
  ellipse(380,385,20,20);
  fill(0)
  ellipse(420,385,4,4);
  ellipse(380,385,4,4);
  fill(255);
  arc(400,425,60,15,PI,TWO_PI,CHORD);
  noStroke();
  fill(0,102,250);
  triangle(400,360,396,370,404,370);
  ellipse(400,370,8,8);
  triangle(425,360,421,370,429,370);
  ellipse(425,370,8,8);
  triangle(385,356,381,366,389,366);
  ellipse(385,366,8,8);

    //thermometer
    stroke(1);
    noFill();
    arc(500,500,60,60,-(1/4)*PI,(5/4)*PI)
    arc(500,270,40,40,PI,TWO_PI,OPEN);
    line(479,270,478,479);
    line(520,270,521,479);
    stroke(1);
    fill(255,0,0);
    ellipse(500,500,40,40);
    arc(500,300,20,20,PI,TWO_PI,OPEN);
    noStroke();
    rect(489,300,21,200);
    stroke(1);
    line(489,482,489,300);
    line(510,482,510,300);

  //sidelines

  line(515,470,520,470);//-50
  line(515,460,520,460);//-45
  line(515,450,520,450);//-40
  line(515,440,520,440);//-35
  line(515,430,520,430);//-30
  line(515,420,520,420);//-25
  line(515,410,520,410);//-20
  line(515,400,520,400);//-15
  line(515,390,520,390);//-10
  line(515,380,520,380);//-5
  line(515,370,520,370);//0
  line(515,360,520,360);//5
  line(515,350,520,350);//10
  line(515,340,520,340);//15
  line(515,330,520,330);//20
  line(515,320,520,320);//25
  line(515,310,520,310);//30
  line(515,300,520,300);//35
  line(515,290,520,290);//40
  line(515,280,520,280);//45
  line(515,270,520,270);//50
}

if (rh<50) { // if the relatively humidity is smaller than 50 it will show this draw 
  fill(255);
  rect(600,600,100,60);
  fill(0,255,255);
  rect(600,650,100,15);



} else if (rh>=50 && rh<=75) { // if the relatively humidity is between 50 and 75 it will show this draw
  fill(255);
  rect(600,600,100,60);
  fill(0,255,255);
  rect(600,630,100,30);
  fill(0,0,255);
  noStroke();
  triangle(620,640,616,650,624,650);
  ellipse(620,650,8,8);
  triangle(650,630,646,640,654,640);
  ellipse(650,640,8,8);
  triangle(670,650,666,660,674,660);
  ellipse(670,660,8,8);

} else if (rh>75) { // if the relatively humidity is bigger than 75 it will show this draw

  fill(255);
  rect(600,600,100,60);
  fill(0,255,255);
  rect(600,610,100,50);
  fill(0,0,255);
  noStroke();
  triangle(620,640,616,650,624,650);
  ellipse(620,650,8,8);
  triangle(615,610,611,620,619,620);
  ellipse(615,620,8,8);
  triangle(650,630,646,640,654,640);
  ellipse(650,640,8,8);
  triangle(670,630,666,640,674,640);
  ellipse(670,640,8,8);
  triangle(690,620,686,630,694,630);
  ellipse(690,630,8,8);
}
if (pr<125) { // if the pressure is smaller than 125 it will show this draw
  stroke(1);
  noFill();
  arc(200,800,120,10,0,PI,OPEN);
  fill(0);
  rect(190,780,20,20);
  line(140,800,90,800);
  line(260,800,310,800);
  } else if (pr>=125 && pr<130){ // if the pressure is between 125 and 130 it will show this
  stroke(1);
  noFill();
  arc(200,800,120,30,0,PI,OPEN);
  fill(0);
  rect(180,770,40,40);
  line(140,800,90,800);
  line(260,800,310,800);
  } else if (pr>=130 && pr<=135) { // if the pressure is between 130 and 135 it will show this
  stroke(1);
  noFill();
  arc(200,800,120,150,0,PI,OPEN);
  fill(0);
  rect(175,815,50,50);
  line(140,800,90,800);
  line(260,800,310,800);
  } else if (pr>135) { // if the pressure is more than 135 it will show this
  stroke(1);
  noFill();
  arc(200,800,120,200,0,PI,OPEN);
  fill(0);
  rect(175,835,50,50);
  line(140,800,90,800);
  line(260,800,310,800);
  }

if (cl<=50 && aqi<50) { // if the percentage of clouds is smaller than 50% and the AQI Index is fewer than 50% it will show this draw
  noStroke();
  fill(200);
  ellipse(400,800,15,15);
  ellipse(400,815,20,20);
  ellipse(410,800,30,30);
  ellipse(410,815,20,20);
  ellipse(420,800,20,20);
  ellipse(420,815,20,20);
  ellipse(430,800,20,20);
  ellipse(430,815,30,30);
  ellipse(440,800,20,20);
  ellipse(440,815,15,15);
    //
    ellipse(450,800,15,15);
    ellipse(450,815,20,20);
    ellipse(460,800,30,30);
    ellipse(460,815,20,20);
    ellipse(470,800,20,20);
    ellipse(470,815,20,20);
    ellipse(480,800,20,20);
    ellipse(480,815,30,30);
    ellipse(490,800,20,20);
    ellipse(490,815,15,15);

  } else if (cl<=50 && aqi>=50) { // if the percentage of clouds is smaller than 50% and the AQI Index is bigger than 50% it will show this draw
    noStroke();
    fill(50);
    ellipse(400,800,15,15);
    ellipse(400,815,20,20);
    ellipse(410,800,30,30);
    ellipse(410,815,20,20);
    ellipse(420,800,20,20);
    ellipse(420,815,20,20);
    ellipse(430,800,20,20);
    ellipse(430,815,30,30);
    ellipse(440,800,20,20);
    ellipse(440,815,15,15);
    //
    ellipse(450,800,15,15);
    ellipse(450,815,20,20);
    ellipse(460,800,30,30);
    ellipse(460,815,20,20);
    ellipse(470,800,20,20);
    ellipse(470,815,20,20);
    ellipse(480,800,20,20);
    ellipse(480,815,30,30);
    ellipse(490,800,20,20);
    ellipse(490,815,15,15);

  } else if (cl>50 && aqi<50) { // if the percentage of clouds is bigger than 50% and the AQI Index is smaller than 50%  it will show this draw
    noStroke();
    fill(200);
    ellipse(400,800,15,15);
    ellipse(400,815,20,20);
    ellipse(410,800,30,30);
    ellipse(410,815,20,20);
    ellipse(420,800,20,20);
    ellipse(420,815,20,20);
    ellipse(430,800,20,20);
    ellipse(430,815,30,30);
    ellipse(440,800,20,20);
    ellipse(440,815,15,15);
    //
    ellipse(450,800,15,15);
    ellipse(450,815,20,20);
    ellipse(460,800,30,30);
    ellipse(460,815,20,20);
    ellipse(470,800,20,20);
    ellipse(470,815,20,20);
    ellipse(480,800,20,20);
    ellipse(480,815,30,30);
    ellipse(490,800,20,20);
    ellipse(490,815,15,15);

    ellipse(400,840,15,15);
    ellipse(400,855,20,20);
    ellipse(410,840,30,30);
    ellipse(410,855,20,20);
    ellipse(420,840,20,20);
    ellipse(420,855,20,20);
    ellipse(430,840,20,20);
    ellipse(430,855,30,30);
    ellipse(440,840,20,20);
    ellipse(440,855,15,15);
    //
    ellipse(450,840,15,15);
    ellipse(450,855,20,20);
    ellipse(460,840,30,30);
    ellipse(460,855,20,20);
    ellipse(470,840,20,20);
    ellipse(470,855,20,20);
    ellipse(480,840,20,20);
    ellipse(480,855,30,30);
    ellipse(490,840,20,20);
    ellipse(490,855,15,15);

    ellipse(460,840,15,15);
    ellipse(460,855,20,20);
    ellipse(470,840,30,30);
    ellipse(470,855,20,20);
    ellipse(480,840,20,20);
    ellipse(480,855,20,20);
    ellipse(490,840,20,20);
    ellipse(490,855,30,30);
    ellipse(500,840,20,20);
    ellipse(500,855,15,15);
    //
    ellipse(500,800,15,15);
    ellipse(500,815,20,20);
    ellipse(510,800,30,30);
    ellipse(510,815,20,20);
    ellipse(520,800,20,20);
    ellipse(520,815,20,20);
    ellipse(530,800,20,20);
    ellipse(530,815,30,30);
    ellipse(540,800,20,20);
    ellipse(540,815,15,15);

    ellipse(500,800,15,15);
    ellipse(500,815,20,20);
    ellipse(510,800,30,30);
    ellipse(510,815,20,20);
    ellipse(520,800,20,20);
    ellipse(520,815,20,20);
    ellipse(530,800,20,20);
    ellipse(530,815,30,30);
    ellipse(540,800,20,20);
    ellipse(540,815,15,15);
    //
    ellipse(550,840,15,15);
    ellipse(550,855,20,20);
    ellipse(560,840,30,30);
    ellipse(560,855,20,20);
    ellipse(570,840,20,20);
    ellipse(570,855,20,20);
    ellipse(580,840,20,20);
    ellipse(580,855,30,30);
    ellipse(590,840,20,20);
    ellipse(590,855,15,15);

  } else if (cl>50 && aqi>=50) {// if the percentage of clouds is bigger than 50% and the AQI Index is bigger than 50% it will show this draw
    noStroke();
    fill(50);
    ellipse(400,800,15,15);
    ellipse(400,815,20,20);
    ellipse(410,800,30,30);
    ellipse(410,815,20,20);
    ellipse(420,800,20,20);
    ellipse(420,815,20,20);
    ellipse(430,800,20,20);
    ellipse(430,815,30,30);
    ellipse(440,800,20,20);
    ellipse(440,815,15,15);
    //
    ellipse(450,800,15,15);
    ellipse(450,815,20,20);
    ellipse(460,800,30,30);
    ellipse(460,815,20,20);
    ellipse(470,800,20,20);
    ellipse(470,815,20,20);
    ellipse(480,800,20,20);
    ellipse(480,815,30,30);
    ellipse(490,800,20,20);
    ellipse(490,815,15,15);

    ellipse(400,840,15,15);
    ellipse(400,855,20,20);
    ellipse(410,840,30,30);
    ellipse(410,855,20,20);
    ellipse(420,840,20,20);
    ellipse(420,855,20,20);
    ellipse(430,840,20,20);
    ellipse(430,855,30,30);
    ellipse(440,840,20,20);
    ellipse(440,855,15,15);
    //
    ellipse(450,840,15,15);
    ellipse(450,855,20,20);
    ellipse(460,840,30,30);
    ellipse(460,855,20,20);
    ellipse(470,840,20,20);
    ellipse(470,855,20,20);
    ellipse(480,840,20,20);
    ellipse(480,855,30,30);
    ellipse(490,840,20,20);
    ellipse(490,855,15,15);

    ellipse(460,840,15,15);
    ellipse(460,855,20,20);
    ellipse(470,840,30,30);
    ellipse(470,855,20,20);
    ellipse(480,840,20,20);
    ellipse(480,855,20,20);
    ellipse(490,840,20,20);
    ellipse(490,855,30,30);
    ellipse(500,840,20,20);
    ellipse(500,855,15,15);
    //
    ellipse(500,800,15,15);
    ellipse(500,815,20,20);
    ellipse(510,800,30,30);
    ellipse(510,815,20,20);
    ellipse(520,800,20,20);
    ellipse(520,815,20,20);
    ellipse(530,800,20,20);
    ellipse(530,815,30,30);
    ellipse(540,800,20,20);
    ellipse(540,815,15,15);

    ellipse(500,800,15,15);
    ellipse(500,815,20,20);
    ellipse(510,800,30,30);
    ellipse(510,815,20,20);
    ellipse(520,800,20,20);
    ellipse(520,815,20,20);
    ellipse(530,800,20,20);
    ellipse(530,815,30,30);
    ellipse(540,800,20,20);
    ellipse(540,815,15,15);
    //
    ellipse(550,840,15,15);
    ellipse(550,855,20,20);
    ellipse(560,840,30,30);
    ellipse(560,855,20,20);
    ellipse(570,840,20,20);
    ellipse(570,855,20,20);
    ellipse(580,840,20,20);
    ellipse(580,855,30,30);
    ellipse(590,840,20,20);
    ellipse(590,855,15,15);
  }

if (snow==0) { // if the snow is equivalent to 0, it will show this draw
    stroke(1);
    fill(0);
    ellipse(1200,800,15,15);
    ellipse(1200,815,20,20);
    ellipse(1210,800,30,30);
    ellipse(1210,815,20,20);
    ellipse(1220,800,20,20);
    ellipse(1220,815,20,20);
    ellipse(1230,800,20,20);
    ellipse(1230,815,30,30);
    ellipse(1240,800,20,20);
    ellipse(1240,815,15,15);
    //
    ellipse(1250,840,15,15);
    ellipse(1250,855,20,20);
    ellipse(1260,840,30,30);
    ellipse(1260,855,20,20);
    ellipse(1270,840,20,20);
    ellipse(1270,855,20,20);
    ellipse(1280,840,20,20);
    ellipse(1280,855,30,30);
    ellipse(1290,840,20,20);
    ellipse(1290,855,15,15);


    } else if (snow>1) { // if the snow is different to 0 it will show this draw
    stroke(1);
    fill(0);
    ellipse(1200,800,15,15);
    ellipse(1200,815,20,20);
    ellipse(1210,800,30,30);
    ellipse(1210,815,20,20);
    ellipse(1220,800,20,20);
    ellipse(1220,815,20,20);
    ellipse(1230,800,20,20);
    ellipse(1230,815,30,30);
    ellipse(1240,800,20,20);
    ellipse(1240,815,15,15);
    //
    ellipse(1250,840,15,15);
    ellipse(1250,855,20,20);
    ellipse(1260,840,30,30);
    ellipse(1260,855,20,20);
    ellipse(1270,840,20,20);
    ellipse(1270,855,20,20);
    ellipse(1280,840,20,20);
    ellipse(1280,855,30,30);
    ellipse(1290,840,20,20);
    ellipse(1290,855,15,15);

    ellipse(1250,895,5,5);
    ellipse(1260,890,5,5);
    ellipse(1270,885,5,5);
    ellipse(1265,880,5,5);
    ellipse(1270,880,5,5);

  }


if (uv<6) { // if the UV Index is smaller than 6, it will show this draw
  fill(255,0,0);
  ellipse(1000,800,80,80);
  stroke(1);
  line(800,950,1000,950);
  stroke(200,0,0);
  fill(253,221,202);
  ellipse(850,900,20,20);
  stroke(0);
  fill(0);
  ellipse(845,895,2,2);
  ellipse(855,895,2,2);
  line(850,910,850,930);
  line(850,920,880,890);
  line(850,920,820,890);
  line(850,930,840,950);
  line(850,930,860,950);

} else if (uv>=6) { // if the UV Index is bigger than 6, it will show this draw
  fill(255,0,0);
  ellipse(1000,800,80,80);
  stroke(1);
  line(800,950,1000,950);
  stroke(200,0,0);
  fill(255,0,0);
  ellipse(850,900,20,20);
  fill(0);
  stroke(0);
  ellipse(845,895,2,2);
  ellipse(855,895,2,2);
  stroke(255,0,0);
  line(850,910,850,930);
  line(850,920,880,890);
  line(850,920,820,890);
  line(850,930,840,950);
  line(850,930,860,950);
  }

if (wp<=5) { // if the windspeed is smaller or equal than 5, it will show this draw
  stroke(0,0,255);
  fill(0);
  line(1450,1000,1550,1000);
  line(1400,975,1500,975);
  line(1400,1025,1500,1025);
  noFill();
  arc(1500,935,80,80,-PI/2,PI/2,OPEN);
  arc(1550,960,80,80,-PI/2,PI/2,OPEN);
  arc(1500,985,80,80,-PI/2,PI/2,OPEN);
  } else if (wp>3) { // if the windspeed is bigger than 5, it will show this draw
  stroke(0,0,255);
  fill(0);
  line(1450,1000,1550,1000);
  line(1400,975,1500,975);
  line(1400,1025,1500,1025);
  line(1350,1050,1450,1050);
  line(1475,1050,1575,1050);
  noFill();
  arc(1500,935,80,80,-PI/2,PI/2,OPEN);
  arc(1550,960,80,80,-PI/2,PI/2,OPEN);
  arc(1500,985,80,80,-PI/2,PI/2,OPEN);
  arc(1450,1010,80,80,-PI/2,PI/2,OPEN);
  arc(1575,1010,80,80,-PI/2,PI/2,OPEN);

  }

}
