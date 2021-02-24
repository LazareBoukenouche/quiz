
<main>
    <h2>Creation de quiz</h2>

    <form method="post" action="form.php">
        <fieldset>
            <legend>Choissisez un theme :</legend>

            <div>
                <label for="theme-select">Theme</label>

                <select name="themes" id="theme-select">
                    <option value="">--Choisir un theme--</option>
                    <option value="harry potter">Harry Potter</option>
                    <option value="stargate">Stargate</option>
                </select>
            </div>
        </fieldset>
        

        <fieldset>
            <legend>Choississez une difficulté :</legend>

            <div>
                <input type="radio" id="easy" name="difficulty" value="easy">
                <label for="difficulty">Easy</label>
            </div>
            
            <div>
                <input type="radio" id="medium" name="difficulty" value="medium" *>
                <label for="difficulty">Medium</label>
            </div>
            
            <div>
                <input type="radio" id="hard" name="difficulty" value="hard">
                <label for="difficulty">Hard</label>
            </div>
        </fieldset>
        

        <fieldset>
            <legend>Create the questions and answers</legend>
            <div class="questionsandAnswersContainer">
        
            </div>
            
        </fieldset>

        <input id="submitButton" type="submit" value="Créer le quiz">
    </form>

</main>