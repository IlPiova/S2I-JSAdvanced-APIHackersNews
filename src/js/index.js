import "../sass/css/index.css";

import axios from "axios";

// Dichiarazioni Variabili
let q = 0;
let i = q;
let storiesArr;
//Variabili url
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newsUrl = "newstories.json";

//Elementi DOM
const gContainer = document.querySelector("#g-container");
const sContainer = document.querySelector("#stories-container");
const loadMoreBtn = document.querySelector("#load-more");

window.addEventListener("load", (event) => {
  loadMoreBtn.hidden = "";
});

//Funzione che scorre array di 10 indici
function getTen(arr) {
  for (; i < q + 10; i++) {
    let storyUrl = `item/${arr[i]}.json`;
    getStories(baseUrl, storyUrl);
  }
  q = i;
}

function makeTime(ms) {
  // L'api restituisce il numero di secondi a partire dal 1 gennaio 1970, quindi li converto in millisecondi per poter usare i metodi di Date
  let time = new Date(ms * 1000);
  let hours = `0${time.getHours()}`.slice(-2);
  let minutes = `0${time.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}

function makeStories(obj) {
  //crea i contenitore della singola story
  let storyCont = document.createElement("div");
  storyCont.classList.add("story-container");
  // creazione titolo
  let storyTitle = document.createElement("a");
  storyTitle.href = obj.url;
  storyTitle.target = "_blank";
  storyTitle.innerHTML = obj.title;
  storyCont.append(storyTitle);
  // Creazione div contenitore autore e orario notizia
  let detailsCont = document.createElement("div");
  detailsCont.classList.add("details-container");
  storyTitle.after(detailsCont);
  //creazione testo autore
  let storyAuth = document.createElement("p");
  storyAuth.innerHTML = `By: ${obj.by}`;
  detailsCont.append(storyAuth);

  //creazione testo autore
  let storyDate = document.createElement("p");
  storyDate.innerHTML = `${makeTime(obj.time)}`;
  detailsCont.append(storyDate);

  //Inserimento container singola storia
  sContainer.append(storyCont);
}
//Richiesta New Stories
function getStories(startUrl, endUrl) {
  axios
    .get(`${startUrl}${endUrl}`)
    .then((response) => {
      if (!response) {
        throw new Error("Errore chiamata!");
      } else if (Array.isArray(response.data)) {
        storiesArr = response.data;
        getTen(storiesArr);
      } else {
        makeStories(response.data);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

getStories(baseUrl, newsUrl);

loadMoreBtn.addEventListener("click", () => getTen(storiesArr));
