function init() {
  sugesstion();
  contribution();
}

let posts = [
  {
    author: "ronaldo",
    titel: "ronaldo",
    image: "./img/ronaldo2.jpg",
    imageLogo: "./img/ronaldo.jpg",
    location: "Manchester",
    likes: 985247,
    liked: false,
    text: "Well done, lads! And a very special thank you to our supporters!👏<br>Lets go, Devils! 💪🏽",
    int: 10659,
    share: "VOR 1 STUNDE",
    comments: [],
  },
  {
    author: "fenerbahce",
    titel: "fenerbahce",
    image: "./img/fenerbahce.jpg",
    imageLogo: "./img/fenerbahce2.jpg",
    location: "Istanbul",
    likes: 97316,
    liked: false,
    text: "🟡🔵 Fenerbahçe. Back to winning ways 💪",
    int: 2478,
    share: "VOR 7 STUNDE",
    comments: [],
  },
  {
    author: "bmw",
    titel: "bmw",
    image: "./img/bmw2.jpg",
    imageLogo: "./img/bmw.jpg",
    location: "München",
    likes: 142396,
    liked: false,
    text: "A fresh dawn on a radiant future. <br>THE XM. #ThisIsForwardism #THEXM #BMW",
    int: 216,
    share: "VOR 7 STUNDE",
    comments: [],
  },
];

let images = [
  "./img/pta.jpg",
  "./img/windows.jpg",
  "./img/netflix.jpg",
  "./img/elon.jpg",
  "./img/amazon.jpg",
];
let names = ["pta", "windows", "netflix", "elonmusk", "amazon"];

function contribution() {
  let contribution = document.getElementById("contribution");
  contribution.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const counter = posts[i];
    contribution.innerHTML += generateContribution(i);

    let contentComment = document.getElementById(`test${i}`);
    for (let j = 0; j < counter["comments"].length; j++) {
      const comment = counter["comments"][j];
      contentComment.innerHTML += /*html*/ `
          <p>${comment}</p>
        `;
    }
  }
}

function generateContribution(i) {
  let counter = posts[i];
  return /*html*/ `
      <div class="contribution">
        <div class="col-header">
          <img src="${counter["imageLogo"]}">
          <div class="col-location">
            <p>${counter["author"]}</p>
            <p>${counter["location"]}</p>
          </div>
          <p>...</p>
        </div>
        <div class="col-image">
          <img src="${counter["image"]}">
        </div>
        <div class="col-awesome">
          <p id="like${i}" onclick="getLike(${i});getMore(${i})"><i class="fa-regular fa-heart"></i></p>
          <p onclick="getFocus(${i})"><i class="fa-regular fa-comment"></i></p>
          <p><i class="fa-regular fa-paper-plane"></i></p>
          <p id="bookmark${i}" onclick="getBookmark(${i})"><i class="fa-regular fa-bookmark"></i></p>
        </div>
        <div class="col-like">
          <p>Gefällt <span id="more${i}">${counter["likes"]}</span> Mal</p>
        </div>
        <div class="col-titel">
          <p>${counter["titel"]}</p>
          <p>${counter["text"]}</p>
        </div>
        <div class="col-show-comment">
          <p>Alle ${counter["int"]} Kommentare ansehen</p>
        </div>
        <div class="col-share">
          <p>${counter["share"]}</p>
        </div>
        <div class="col-comment" id="test${i}">
        </div>
        <div class="col-input">
          <p><i class="fa-regular fa-face-smile"></i></p>
          <input type="text" id="input${i}" placeholder="Kommentieren...">
          <button onclick="addNotiz(${i})">Posten</button>
        </div>
      </div>
    `;
}

function getMore(i) {
  posts[i].liked =! posts[i].liked; // Wenn True, dann wird es zu false. Und andersrum.
  if (posts[i].liked) {
    document.getElementById(`more${i}`).innerHTML = ++posts[i].likes;
  } else {
    // posts[i].liked == true
    document.getElementById(`more${i}`).innerHTML = --posts[i].likes;
  }
}

function getFocus(i) {
  document.getElementById(`input${i}`).focus();
}

function getLike(i) {
  let getLike = document.getElementById(`like${i}`);
  // getLike.classList.toggle('red');
  if (getLike.innerHTML === '<i class="fa-regular fa-heart"></i>') {
    getLike.innerHTML = '<i class="fa-solid fa-heart red"></i>';
  } else {
    getLike.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
}

function getBookmark(i) {
  let getBook = document.getElementById(`bookmark${i}`);
  if (getBook.innerHTML === '<i class="fa-regular fa-bookmark"></i>') {
    getBook.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
  } else {
    getBook.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
  }
}

function addNotiz(i) {
  let input = document.getElementById(`input${i}`);
  posts[i]["comments"].push(input.value);
  contribution();
  save();
}

function showAll(x) {
  document.getElementById("show-sugesstion").classList.toggle("d-none");
  x.classList.toggle("chang");
}

function noFunction() {
  alert("Funktion in bearbeitung!");
}

function sugesstion() {
  let sugesstion = document.getElementById(`show-sugesstion`);
  sugesstion.innerHTML = "";
  for (let i = 0; i < names.length; i++) {
    const counter = names[i];
    sugesstion.innerHTML += generateSugesstion(i);
  }
}

function generateSugesstion(i) {
  let image = images[i];
  let name = names[i];

  return /*html*/ `
  <div class="col-sugesstion">
    <img src="${image}" />
    <p>${name}</p>
    <p id="follow${i}" onclick="follow(${i})">Folgen</p>
  </div>
`;
}

function follow(i) {
  let text = document.getElementById(`follow${i}`);
  if (text.innerHTML === "Folgen") {
    text.innerHTML = "gefolgt";
  } else {
    text.innerHTML = "Folgen";
  }
}
