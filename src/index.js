alert("Hello, Welcome to the AI Poem generator")

function displayPoem(respons) {
  new Typewriter("#poem", {
    Strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

function generatePoem(event) {
    event.preventDefault();

    let apiKey = "027a3305d8coee741ce3fa3097t6b4ea";
    let prompt = "";
    let context = "";
    let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}';
  
    console.log("generation poem");
    axios.get(apiURL).then(displayPoem);
    
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);