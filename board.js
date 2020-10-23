// Object Class
// State
// Array of Questions - triggered from question objects
// Background picture

// Behaviour
// setUpBoard()
// checkAnswer() - T/F
// checkPictureAnswer - T/F

class Board {
  constructor(arrayOfQuestions) {
    this.arrayOfQuestions = arrayOfQuestions;
    // this.arrayOfQuestions = arrayOfQuestions.map((question, i) => {
    //   new Question(i, question.question, question.answer);
    // });
  }
  drawTiles(handleAnswer) {
    this.arrayOfQuestions.forEach((question) => {
      console.log(question);
      let container = document.querySelector(".container");
      let tile = document.createElement("div");
      tile.innerText = question.answer;
      console.log(question.number);
      tile.classList.add("tile");
      tile.setAttribute("id", `tile-${question.number}`);
      tile.style = `background-color: powderblue`;
      tile.addEventListener("click", () => {
        handleAnswer(question.answer); // Emma added question number
; // Emma - question number doesnt work atm as we are not running our Question class - either need to set question number on array we hand it or try Liz's solution - cant get to work
      });
      container.appendChild(tile);
    });
  }
}

//checkPlayerAnswer(answer)
//if(turnAnswer === questionAnswer)

// to check if the answers correct if(questionNumber===tilenumber){
//true and trigger question.remove
//}

// class Picture {
//     constructor(backgroundPic){
//         this.backgroundPic = backgroundPic
//     }
// }
