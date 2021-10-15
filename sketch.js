//this likely won't be the topic for the final version, just a test run
let animeShows = [
  { title: "Jojo's Bizarre Adventure", genre: "Shounen" },
  { title: "Lucky Star", genre: "Shoujo" },
  { title: "HunterxHunter", genre: "Shounen" },
  { title: "Hataraku Maou-sama", genre: "Shoujo" },
  { title: "Fullmetal Alchemist", genre: "Shounen" },
  { title: "Heaven's Lost Property", genre: "Shoujo" },
  { title: "Beastars", genre: "Mixed Genre" },
  { title: "BNA", genre: "Mixed Genre" },
  { title: "Ouran High School Host Club", genre: "Shoujo" },
  { title: "Soul Eater", genre: "Shounen" },
  { title: "My Hero Academia", genre: "Shounen" },
  { title: "Kill la Kill", genre: "Shounen" },
  { title: "Danganronpa", genre: "Shounen" },
];

let randomIndex;
let counter = 0;
let animating = false;
let fx;
let animePics = [];
let imageCounter = 0;
let isLast = false;
let button;


function preload() {
  //song
  soundFormats("mp3");
  fx = loadSound("Drum Roll - Gaming Sound Effect (HD).mp3");

  for (let i = 0; i <= 12; i++) {
    animePics[i] = loadImage("anime" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 500);
  textSize(18);
  textFont("consolas");
  textAlign(CENTER);
  imageMode(CENTER);
  text("Anime randomizer. Click button below to begin", 250, 250);
  console.log(animePics);
  frameRate(15);
  button = createButton("Click to Randomize!");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();

    if (imageCounter < animePics.length - 1) {
      imageCounter++;
      //console.log(animePics[imageCounter]);
      console.log(imageCounter);
      //console.log("anime pics " + animePics.length);
    }
    else {
      imageCounter = 0;
    }
    image(animePics[imageCounter], width / 2, height / 2);
  }
  // if (!animePics.length){
  // isLast = true;
  // }
  // if (isLast == true){
  //   setTimeout(2000);
  //   background(random(255), random(255), random(255));
  //   }

}


function randomizer() {
  animating = false;

  if (animeShows[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(animeShows.length));
    image(animePics[randomIndex], width/2, height/2.3);
    fill(random(255), random(255), random(255));
    text(
      animeShows[randomIndex].title +
        " is a " +
        animeShows[randomIndex].genre +
        " anime.",
      250,
      450
    );
    animeShows.splice(randomIndex, 1);
    animePics.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    text("that's it folks!", 250, 250);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 4000);
  fx.play();
}
