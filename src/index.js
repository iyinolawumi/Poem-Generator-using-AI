alert("Hello, Welcome to the AI Poem generator")
function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "Love; A whisper soft, yet strong and true, \n A spark that paints the darkest hue. \n It blooms in hearts without a sound, \n Where silent joys and tears are found.",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);