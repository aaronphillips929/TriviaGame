// $(document).ready(function() {

var triviaQuestions = [{
    question:"Who is the youngest driver on the 2019 grid?",
    answerList:["Lando Norris", "Charles Leclerc", "Max Verstappen", "George Russell"],
    correctAnswer: "Max Verstappen",
},  {
    question:"How many WDC's has Lewis Hamilton won?",
    answerList:["7", "5", "10", "3"],
    correctAnswer: "5",
},  {
    question:"Which year did Scuderia Ferrari begin competing in F1?",
    answerList:["1920", "1930", "1950", "1970"],
    correctAnswer: "1950",
},  {
    question:"Which driver holds the record for most wins at the Monaco Grand Prix?",
    answerList:["Ayerton Senna", "Michael Schumacher", "Lewis Hamilton", "Niki Lauda"],
    correctAnswer: "Ayerton Senna",
},  {
    question:"Which circuit on the 2019 calendar is the newest?",
    answerList:["Baku City Circuit", "Circuit of the Americas", "Yas Marina Circuit", "Bahrain International Circuit"],
    correctAnswer: "Baku City Circuit",
},  {
    question:"What does a blue flag being waved at a driver mean?",
    answerList: ["Race Stopped", "Proceed with Caution", "Final Lap", "Lapped Traffic"],
    correctAnswer: "Lapped Traffic",
},  {
    question:"Which manufacturer is the only tire manufacturer on the 2019 grid?",
    answerList:["Bridgestone", "Michelin", "Hankook", "Pirelli"],
    correctAnswer: "Pirelli",
},  {
    question:"How many races are on the 2019 calendar?",
    answerList:["21", "15", "23", "17"],
    correctAnswer: "21",
}]

// Click event to start the game
$("#start").on('click', function(){
    triviaGame.start();
})

$(document).on('click', '#submit', function(){
    triviaGame.over();
})

var triviaGame = {
    right: 0,
    wrong: 0,
    counter: 60,

    //The start game function 
    start: function(){
        // Remove start button after clicked
        $("#start").hide();
        $("#submit").show();

        // Timer
        timer = setInterval(triviaGame.countdown, 1000);
        $("#display").prepend('<h2>Time Remaining: <span id="counter">60</span> seconds </h2>');
        for (var i = 0; i < triviaQuestions.length; i++){
            $("#display").append('<h4>' + triviaQuestions[i].question + '</h4>')
            for (var j = 0; j < triviaQuestions[i].answerList.length; j++){
                $("#display").append("<br><input type='radio' name='question "+ i +"' value='" + triviaQuestions[i].answerList[j] + "'>" + triviaQuestions[i].answerList[j])
            }
        }
        // Submit button
        $("#display").append('<button id="submit">Submit</button>')
    },

    // Timer countdown function
    countdown: function(){
        triviaGame.counter--;
        $("#counter").html(triviaGame.counter);
        if(triviaGame.counter == 0){
            console.log("Time is up")
            triviaGame.over();
        }
    },
    // Check for right answers
    over: function(){
        $.each($("input[name = 'question 0']:checked"), function(){
            if($(this).val() == triviaQuestions[0].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 1']:checked"), function(){
            if($(this).val() == triviaQuestions[1].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 2']:checked"), function(){
            if($(this).val() == triviaQuestions[2].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 3']:checked"), function(){
            if($(this).val() == triviaQuestions[3].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 4']:checked"), function(){
            if($(this).val() == triviaQuestions[4].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 5']:checked"), function(){
            if($(this).val() == triviaQuestions[5].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 6']:checked"), function(){
            if($(this).val() == triviaQuestions[6].correctAnswer){
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });

        this.result()
    },
    
// Display results after game is finished

    result: function(){
        clearInterval(timer);
        $("#display h2").remove();

        $("#display").html("<h2>All Over!</h2>");
        $("#display").append("<h3>Right Answers: " + this.right + "</h3>");
        $("#display").append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        $("#display").append("<h3>Unanswered: " + (triviaQuestions.length-(this.wrong + this.right)) + "</h3>");
    }


}
