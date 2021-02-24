easyRadioButton = document.querySelector("#easy");
mediumRadioButton = document.querySelector("#medium");
hardRadioButton = document.querySelector("#hard");


difficultyOptions = [easyRadioButton,mediumRadioButton,hardRadioButton];

window.onload = function() {
    for (let i = 0;i<difficultyOptions.length;i++) {
        difficultyOptions[i].addEventListener('click',selectDifficulty);
        console.log("Done !")
    }
};


function selectDifficulty() {
    let difficulty;
    if (easyRadioButton.checked) {
        difficulty = easyRadioButton.value;
    }
    else if (mediumRadioButton.checked) {
        difficulty = mediumRadioButton.value;
    }
    else if (devEnSueur.checked) {
        difficulty = mediumRadioButton.value;
    }
    else if (hardRadioButton.checked) {
        difficulty = hardRadioButton.value;
    }
    createQuestionAndAnswersElements(difficulty);
}

function createQuestionAndAnswersElements(difficulty) {
    let nbQuestions;
    let container  = document.querySelector(".questionsandAnswersContainer");
    if (difficulty == "easy") {
        container.innerHTML = "";
        nbQuestions = 3;
    }
    else if (difficulty == "medium") {
        container.innerHTML = "";
        nbQuestions = 6;
    }
    else if (difficulty == "hard") {
        container.innerHTML = "";
        nbQuestions = 9;
    }
    for (let i=0;i< nbQuestions;i++) {
        
        container.insertAdjacentHTML("beforeend",
        `<fieldset style="display: flex;flex-direction: column;margin:auto;">
            <legend>Question N°${i+1}</legend>

            <div>
                <label for="question">La question :</label>
                <input type="text" id="question" name="question">
            </div>

            <div>
                <label for="goodAnswer">Bonne reponse</label>
                <input type="text" id="goodAnswer" name="goodAnswer">
            </div>

            <div>
                <label for="badAnswerOne">Mauvaise réponse n°1 : </label>
                <input type="text" id="badAnswerOne" name="badAnswerOne">
            </div>

            <div>
                <label for="badAnswerTwo">Mauvaise réponse n°2 : </label>
                <input type="text" id="badAnswerTwo" name="badAnswerTwo">
            </div>
            
        </fieldset>`);
    }
    
}

