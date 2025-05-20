alert("Hello, Welcome to the AI Poem generator");

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer, 
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "027a3305d8coee741ce3fa3097t6b4ea";
  let context = "You are an AI assistant who loves to write short poems. Your mission is to write a 4-line poem in plain text and separate each line with <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionsInput.value}</div>`;

 axios.get(apiURL)
    .then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
