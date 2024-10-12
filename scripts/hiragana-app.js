let hrgnaLevel = 1;
let hrgnaSoundCtgry = "";
let hrgnaSound = "";
let score = 0;

const app = {
  // Cache DOM elements
  init() {
    this.cacheDom();
    this.bindEvents();
    this.updateLevelIndicator();
  },

  // Store DOM elements in variables
  cacheDom() {
    this.levelSelectBox = document.getElementById("level-select-box");
    this.generateHiraganaBox = document.getElementById("generate-hiragana-box");
    this.generateHiraganaImageBox = document.getElementById("generate-hiragana-image-box");
    this.levelIndicator = document.getElementById("level-indicator");
    this.generateHiraganaButton = document.getElementById("generate-hiragana-button");
    this.returnToLevelSelectButton = document.getElementById("return-to-level-select-button");
    this.hiraganaAnswerInput = document.getElementById("hiragana-answer-input");
    this.levelButtons = document.querySelectorAll(".lvl-btn");

    this.input = document.getElementById("level-select-box");
    this.inputAnswerButton = document.getElementById("input-answer-button");
  },

  // Bind event listeners to DOM elements
  bindEvents() {
    // Loop through each level button and add a click event listener
    this.levelButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        // Get the level from the button's data-level attribute (IF it exists)
        const level = e.currentTarget.dataset.level;
        if (level) this.setLevel(level);
      })
    );
    // Add click listeners to the generate hiragana button
    this.generateHiraganaButton.addEventListener("click", () =>
      this.generateHiragana()
    );
    // Add click listeners to the return to level select button
    this.returnToLevelSelectButton.addEventListener("click", () =>
      this.returnToLevelSelect()
    );
    // Add click listeners to the input answer button
    this.inputAnswerButton.addEventListener("click", () =>
      this.generateHiragana()
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

    this.levelIndicator.innerText = `Level ${hrgnaLevel}`;
  },

  // Generate a hiragana character
  generateHiragana() {
    // Hide the level select box and generate hiragana button
    this.levelSelectBox.style.display = "none";
    this.generateHiraganaButton.style.display = "none";

    // Display the return to level select button and hiragana answer input
    this.returnToLevelSelectButton.style.display = "block";
    this.hiraganaAnswerInput.style.display = "block";
    this.inputAnswerButton.style.display = "block";

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
    this.generateHiraganaImageBox.innerHTML = "";
    this.generateHiraganaImageBox.appendChild(hrgnaImg);
  },

  // Return to the level select screen
  returnToLevelSelect() {
    // Display the level select box and generate hiragana button
    this.levelSelectBox.style.display = "block";
    this.generateHiraganaButton.style.display = "block";

    // Hide the return to level select button and hiragana answer input
    this.returnToLevelSelectButton.style.display = "none";
    this.hiraganaAnswerInput.style.display = "none";
    this.inputAnswerButton.style.display = "none";

    // Reset the hiragana image and answer input
    this.generateHiraganaImageBox.innerHTML = "";
    this.hiraganaAnswerInput.value = "";
  },

  checkAnswer() {
    if
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
