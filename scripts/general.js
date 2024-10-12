let hrgnaImg;
let hrgnaSoundCtgry = "";
let hrgnaSound = "";
let userAnswerInput = "";
let hrgnaLevel = 1;

const genHrgnaBtnBox = document.getElementById("generate-hiragana-box");
const genHrgnaImgBox = document.getElementById("generate-hiragana-image-box");

const rtrnToLvlSlctBtn = document.getElementById("return-to-level-select-button");
const genHiraganaBtn = document.getElementById("generate-hiragana-button");

const lvlIndicator = document.getElementById("lvl-indctr");
const lvlSelectBox = document.getElementById("level-select-box");

const lvlBtnIchi = document.getElementById("level-select-1");
const lvlBtnNi = document.getElementById("level-select-2");
const lvlBtnSan = document.getElementById("level-select-3");
const lvlBtnYon = document.getElementById("level-select-4");
const lvlBtnGo = document.getElementById("level-select-5");

function updateLevelIndicator() {
  lvlIndicator.innerText = "Level " + hrgnaLevel;
}

lvlBtnIchi.addEventListener("click", () => {
  hrgnaLevel = 1;
  updateLevelIndicator();
});
lvlBtnNi.addEventListener("click", () => {
  hrgnaLevel = 2;
  updateLevelIndicator();
});
lvlBtnSan.addEventListener("click", () => {
  hrgnaLevel = 3;
  updateLevelIndicator();
});
lvlBtnYon.addEventListener("click", () => {
  hrgnaLevel = 4;
  updateLevelIndicator();
});
lvlBtnGo.addEventListener("click", () => {
  hrgnaLevel = 5;
  updateLevelIndicator();
});

rtrnToLvlSlctBtn.addEventListener("click", () => {
  lvlSelectBox.innerHTML = '<p class="title">Level Select</p><p id="level-indicator" class="lvl-indctr">Level 1</p><button id="level-select-1" class="lvl-btn"><img src="images/number_kanji/1ichi.png" alt="Level One" class="lvl-img"></button><button id="level-select-2" class="lvl-btn"><img src="images/number_kanji/2ni.png" alt="Level Two" class="lvl-img"></button><button id="level-select-3" class="lvl-btn"><img src="images/number_kanji/3san.png" alt="Level Three" class="lvl-img"></button><button id="level-select-4" class="lvl-btn"><img src="images/number_kanji/4yon.png" alt="Level Four" class="lvl-img"></button><button id="level-select-5" class="lvl-btn"><img src="images/number_kanji/5go.png" alt="Level Five" class="lvl-img"></button>';

  genHrgnaBtnBox.innerHTML = genHrgnaBtnBox.innerHTML + '<button id="generate-hiragana-button">Generate</button>';
  document.getElementById("hrgna-img");
  hrgnaSoundCtgry = "";
  hrgnaSound = "";
  userAnswerInput = "";
  hrgnaLevel = 1;
});
