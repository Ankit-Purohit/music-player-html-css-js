let con = document.getElementsByClassName("song-container");
let img = document.getElementsByClassName("img");
let audio = document.getElementById("audio");
let play = document.getElementById("play");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let index = 0;
var prevv = 0;
var k = index;
var m = index;
var check = true;

let songs = [
  "my",
  "bts",
  "stay",
  "love",
  "dua",
  "taylor",
  "juice",
  "kodak",
  "pop",
  "one",
];

//if i hit play the it will run
play.addEventListener("click", () => {
  if (check == true) {
    loadingByTouch(songs[index]);
    img[index].classList.add("ani");
  } else {
    audio.pause();
    img[index].classList.remove("ani");
  }

  check = !check;
});

//loading finction is for choosing the current index array (song)

function loadingByTouch(curr) {
  audio.src = `music/${curr}.mp3`;
  audio.play();
}

let forward = 1; //for forward button
let backward = 0; //for backward button

next.addEventListener("click", () => {
  con[index].classList.remove("de");
  img[index].classList.remove("ani");

  //mene index ko k rkha

  if (index < songs.length - 1) {
    index++;

    loading(songs[index], forward);
  } else {
    index = 0;
    loading(songs[index], forward);
  }
});

prev.addEventListener("click", () => {
  console.log(index);

  index--;

  if (index < 0) {
    index = songs.length - 1;
    loading(songs[index], backward);
  } else {
    loading(songs[index], backward);
  }
});

console.log(con.length);
function loading(curr, come) {
  audio.src = `music/${curr}.mp3`;

  k = index;
  if (come == 1) {
    //forward with css
    inside = true;
    if (k >= con.length) {
      con[m].classList.remove("de");
      img[m].classList.remove("ani");
      k = 0;
      con[k].classList.add("de");
      img[k].classList.add("ani");
      m = k;
      k = k + 1;
      audio.play();
    } else {
      audio.play();
      con[m].classList.remove("de");
      img[m].classList.remove("ani");
      con[k].classList.add("de");
      img[k].classList.add("ani");
      m = k;
      k++;
    }
  }
  // backward
  if (come == 0) {
    if (k >= 0) {
      con[m].classList.remove("de");
      img[m].classList.remove("ani");

      con[k].classList.add("de");
      img[k].classList.add("ani");
      m = k;
      k = k - 1;

      audio.play();
    } else {
      con[m].classList.remove("de");
      img[m].classList.remove("ani");

      k = con.length - 1;
      con[k].classList.add("de");
      img[k].classList.add("ani");
      m = k;
      k = k - 1;
      audio.play();
    }
  }
  help = k;
}

function loadingByTouch(curr) {
  audio.src = `music/${curr}.mp3`;

  // img[index].classList.add('ani');
  // con[index].classList.add('de');

  audio.play();
}

// if i touch the container the it will respond

/*
     
        for(let i=0;i<con.length;i++){

            


            con[i].addEventListener('click',()=>{



                con[i].classList.remove('de');
                img[i].classList.remove('ani');

                  
                loadingByTouch(songs[i]);

                
                con[prevv].classList.remove('de');

                img[prevv].classList.remove('ani');

                con[i].classList.add('de');
                img[i].classList.add('ani');
          
                prevv=i;

                check=!check;

                 console.log(i);
                 index=i;
              

            });


        }*/
