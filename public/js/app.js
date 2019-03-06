$(document).ready(function() {

    console.log('app.js loaded');

    // When the user scrolls the page, execute myFunction
    document.onscroll = function() {myFunction()};

    function myFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

        $('.modal').modal();

    $('.scrollspy').scrollSpy();

    
        $('.materialboxed').materialbox();
      
        function firstTimeUser() {
            var hasUsed = $("#trilogymenu").attr("data-done");
            if (hasUsed === "false") {
                $("#modal1").modal("open")
            }
        }

        firstTimeUser();

});

$(function() {
    console.log('app.js loaded');
    $("#complete").on("click", function(event) {
        var moduleName = $(this).attr("data-name");
        var moduleHolder = {
            name: moduleName
        };
        console.log(moduleName);
        console.log("test");
        $.ajax("/submitTrilogy", {
            type: "Put",
            data: moduleHolder
          }).then(
            function() {
              console.log("Success");
             
            }
          );
    });

    $("#submitQuiz").on("click", function(event) {
        if ($("input[name=correctAnswer]:checked").length > 0) {
            $("#modal2").modal("open");
        } else {
            $("#modal3").modal("open");
        }
        // var moduleName = $(this).attr("data-name");
        // var moduleHolder = {
        //     name: moduleName
        // }
        // console.log(moduleName)
        // console.log("test")
        // $.ajax("/submitTrilogy", {
        //     type: "Put",
        //     data: moduleHolder
        //   }).then(
        //     function() {
        //       console.log("Success");
             
        //     }
        //   );
    });

   
    var progressBar = 0;
    $(document).ready(function() {
        $('ul.tabs').tabs();
        $(".next").click(function() {
            var tabId = $(this).attr("data-path");
            progressBar = progressBar + 20;
            var update = progressBar.toString();
            update = update + "%";
            console.log(tabId);
          $('ul.tabs').tabs('select_tab', tabId );
          $('.determinate').css('width', update);
        });
      });

});

// window.onload = function(){

//     var myQuestions = [
//         {
//             question: "What is 10/2?",
//             answers: {
//                 a: '3',
//                 b: '5',
//                 c: '115'
//             },
//             correctAnswer: 'b'
//         },
//         {
//             question: "What is 30/3?",
//             answers: {
//                 a: '3',
//                 b: '5',
//                 c: '10'
//             },
//             correctAnswer: 'c'
//         }
//     ];

//     var quizContainer = document.getElementById('quiz');
//     var resultsContainer = document.getElementById('results');
//     var submitButton = document.getElementById('submit');

//     function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//         function showQuestions(questions, quizContainer) {
//             // we'll need a place to store the output and the answer choices
//             var output = [];
//             var answers;

//             // for each question...
//             for (var i = 0; i < questions.length; i++) {

//                 // first reset the list of answers
//                 answers = [];

//                 // for each available answer...
//                 for (letter in questions[i].answers) {

//                     // ...add an html radio button
//                     answers.push(
//                         '<label>'
//                         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                         + letter + ': '
//                         + questions[i].answers[letter]
//                         + '</label>'
//                     );
//                 }

//                 // add this question and its answers to the output
//                 output.push(
//                     '<div class="question">' + questions[i].question + '</div>'
//                     + '<div class="answers">' + answers.join('') + '</div>'
//                 );
//             }

//             // finally combine our output list into one string of html and put it on the page
//             quizContainer.innerHTML = output.join('');
//         }


//         function showResults(questions, quizContainer, resultsContainer) {

//             // gather answer containers from our quiz
//             var answerContainers = quizContainer.querySelectorAll('.answers');

//             // keep track of user's answers
//             var userAnswer = '';
//             var numCorrect = 0;

//             // for each question...
//             for (var i = 0; i < questions.length; i++) {

//                 // find selected answer
//                 userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//                 // if answer is correct
//                 if (userAnswer === questions[i].correctAnswer) {
//                     // add to the number of correct answers
//                     numCorrect++;

//                     // color the answers green
//                     answerContainers[i].style.color = 'lightgreen';
//                 }
//                 // if answer is wrong or blank
//                 else {
//                     // color the answers red
//                     answerContainers[i].style.color = 'red';
//                 }
//             }

//             // show number of correct answers out of total
//             resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//         }

//         // show questions right away
//         showQuestions(questions, quizContainer);

//         // on submit, show results
//         submitButton.onclick = function () {
//             showResults(questions, quizContainer, resultsContainer);
//         }
//     }

//     generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//     $("#complete").on("click", function(event) {
//         var moduleName = $(this).attr("data-name");
//         var moduleHolder = {
//             name: moduleName
//         }
//         console.log(moduleName)
//         console.log("test")
//         $.ajax("/submitTrilogy", {
//             type: "Put",
//             data: moduleHolder
//           }).then(
//             function() {
//               console.log("Success");
             
//             }
//           );
//     });

   
//     var progressBar = 0;
//     $(document).ready(function() {
//         $('ul.tabs').tabs();
//         $(".next").click(function() {
//             var tabId = $(this).attr("data-path");
//             progressBar = progressBar + 20;
//             var update = progressBar.toString();
//             update = update + "%"
//             console.log(tabId);
//           $('ul.tabs').tabs('select_tab', tabId );
//           $('.determinate').css('width', update);
//         });
//       });
// };

/*

              console.log("changed sleep to");
              // Reload the page to get the updated list
            //   location.reload();
            }
          );
    })
})

*/

