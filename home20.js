
function greetInKazakh() {
    console.log("Салем! калыныз калай?");
  }
  
  function greetInRussian() {
    console.log("Привет! Как ваши дела?");
  }
  
  function greetInEnglish() {
    console.log("Hello! How are you?");
  }
  
  function greetUser(language) {
    if (language.toLowerCase() === "казакша") {
      greetInKazakh();
    } else if (language.toLowerCase() === "орысша") {
      greetInRussian();
    } else if (language.toLowerCase() === "агылшынша") {
      greetInEnglish();
    } else {
      console.log("Кешырыныз, бул тыл колдау корсетпейды.");
    }
  }
  
  let studentLanguage = prompt("кай тылде сойлегыныз келеды? (казакша, орысша, агылшынша)");
  greetUser(studentLanguage);