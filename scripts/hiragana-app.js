let hrgnaLevel = 1;
let hrgnaSoundCtgry = "";
let hrgnaSound = "";

const app = {
  // Cache DOM elements
  init() {
    this.cacheDom();
    this.bindEvents();
    this.updateLevelIndicator();
  },

  // Store DOM elements in variables
  cacheDom() {
    this.lvlSelectBox = document.getElementById("lvl-slct-box");
    this.genHrgnaBox = document.getElementById("gen-hrgna-box");
    this.genHrgnaImgBox = document.getElementById("gen-hrgna-img-box");
    this.lvlIndicator = document.getElementById("lvl-indctr");
    this.genHiraganaBtn = document.getElementById("gen-hrgna-btn");
    this.rtrnToLvlSlctBtn = document.getElementById("rtrn-to-lvl-slct-btn");
    this.hrgnaAnswrInput = document.getElementById("hrgnaAnswrInput");
    this.levelBtns = document.querySelectorAll(".level-btn");
  },

  // Bind event listeners to DOM elements
  bindEvents() {
    // Loop through each level button and add a click event listener
    this.levelBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        // Get the level from the button's data-level attribute (IF it exists)
        const level = e.currentTarget.dataset.level;
        if (level) this.setLevel(level);
      })
    );
    // Add click listeners to the generate hiragana button
    this.genHiraganaBtn.addEventListener("click", () =>
      this.generateHiragana()
    );
    // Add click listeners to the return to level select button
    this.rtrnToLvlSlctBtn.addEventListener("click", () =>
      this.returnToLevelSelect()
    );
  },

  // Set the hiragana level
  setLevel(level) {
    hrgnaLevel = parseInt(level);

    // debug via console output
    console.log("Parse: ", level);
    console.log("Level: ", hrgnaLevel);

    this.updateLevelIndicator();
  },

  // Update the level indicator (HTML) element
  updateLevelIndicator() {
    // debug via console output
    console.log("Level: ", hrgnaLevel);

    this.lvlIndicator.innerText = `Level ${hrgnaLevel}`;
  },

  // Generate a hiragana character
  generateHiragana() {
    // Hide the level select box and generate hiragana button
    this.lvlSelectBox.style.display = "none";
    this.genHiraganaBtn.style.display = "none";

    // Display the return to level select button and hiragana answer input
    this.rtrnToLvlSlctBtn.style.display = "block";
    this.hrgnaAnswrInput.style.display = "block";

    // Randomize the hiragana sound category and select a sound from that category
    this.randomizeHiraganaSoundCategory();
    this.selectSoundFromHiraganaCategory();

    // Create an image element for the hiragana character
    const hrgnaImg = document.createElement("IMG");
    hrgnaImg.src = `images/${hrgnaSoundCtgry}/hrgna_${hrgnaSound}.png`;
    hrgnaImg.setAttribute("height", "128");
    hrgnaImg.setAttribute("alt", "Hiragana Image");
    hrgnaImg.setAttribute("class", "hirigana-image");
    hrgnaImg.setAttribute("id", "hrgna-img");

    // Append the hiragana image to the hiragana image box
    this.genHrgnaImgBox.innerHTML = "";
    this.genHrgnaImgBox.appendChild(hrgnaImg);
  },

  // Return to the level select screen
  returnToLevelSelect() {
    // Display the level select box and generate hiragana button
    this.lvlSelectBox.style.display = "block";
    this.genHiraganaBtn.style.display = "block";

    // Hide the return to level select button and hiragana answer input
    this.rtrnToLvlSlctBtn.style.display = "none";
    this.hrgnaAnswrInput.style.display = "none";

    // Reset the hiragana image and answer input
    this.genHrgnaImgBox.innerHTML = "";
    this.hrgnaAnswrInput.value = "";
  },

  // Randomize the hiragana sound category
  randomizeHiraganaSoundCategory() {
    // Array of hiragana sound categories
    const categories = [
      "a",
      "ka",
      "sa",
      "ta",
      "na",
      "ha",
      "ma",
      "ya",
      "ra",
      "wa",
      "u",
    ];

    // Randomly select a hiragana sound category
    hrgnaSoundCtgry =
      categories[
        Math.floor(Math.random() * Math.min(hrgnaLevel * 2, categories.length))
      ];
  },

  // Select a hiragana sound from the sound category
  selectSoundFromHiraganaCategory() {
    // Object literals of hiragana sounds
    // Basically a hashmap. The key is the category and the value is an array of sounds
    // Hashmaps are one of the most effective data structures for storing key-value pairs
    const sounds = {
      a: ["a", "i", "u", "e", "o"],
      k: ["ka", "ki", "ku", "ke", "ko"],
      s: ["sa", "shi", "su", "se", "so"],
      t: ["ta", "chi", "tsu", "te", "to"],
      n: ["na", "ni", "nu", "ne", "no"],
      h: ["ha", "hi", "fu", "he", "ho"],
      m: ["ma", "mi", "mu", "me", "mo"],
      y: ["ya", "yu", "yo"],
      r: ["ra", "ri", "ru", "re", "ro"],
      w: ["wa", "wo"],
      u: ["n"],
    };

    // Get the hiragana sound category
    const category = hrgnaSoundCtgry[0];
    const categorySounds = sounds[category] || sounds.a;
    hrgnaSound =
      categorySounds[Math.floor(Math.random() * categorySounds.length)];
  },
};

// Initialize the app when the DOM is ready
document.addEventListener("DOMContentLoaded", () => app.init());
