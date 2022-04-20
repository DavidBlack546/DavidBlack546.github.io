////modified from Copyright (c) 2022 by Sulaimon Olaniran (https://codepen.io/Sulaimon-Olaniran/pen/zYKJLjK)
const questions = [
    
    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world (by area) ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is the ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "In which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest in December ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Chile?",
        optionA: "Antofagasta",
        optionB: "Puento Alto",
        optionC: "Santiago",
        optionD: "Vina del Mar",
        correctOption: "optionC"
    },

    {
        question: "What is the highest mountain in Britain?",
        optionA: "Snowdon",
        optionB: "Scafell Pike",
        optionC: "Ben Nevis",
        optionD: "Cat Bells",
        correctOption: "optionC"
    },

    {
        question: "What is the smallest country in the world?",
        optionA: "Monaco",
        optionB: "Vatican City",
        optionC: "Nauru",
        optionD: "Tuvalu",
        correctOption: "optionB"
    },

    {
        question: "How many countries still have the shilling as currency?",
        optionA: "Four - Kenya, Uganda, Tanzania and Somalia",
        optionB: "Three - Kenya, Uganda, Tanzania",
        optionC: "Two - Kenya, Uganda",
        optionD: "One - Somalia",
        correctOption: "optionA"
    },

    {
        question: "What did the Romans call Scotland?",
        optionA: "Alba",
        optionB: "Land of Cakes",
        optionC: "Ecosse",
        optionD: "Caledonia",
        correctOption: "optionD"
    },

    {
        question: "Who was Henry VIIIs last wife?",
        optionA: "Catherine Parr",
        optionB: "Catherine Howard",
        optionC: "Anne of Cleves",
        optionD: "Doesn't matter she's dead now",
        correctOption: "optionA"
    },

    {
        question: "In which year was Joan of Arc burned at the stake?",
        optionA: "1441",
        optionB: "1451",
        optionC: "1421",
        optionD: "1431",
        correctOption: "optionD"
    },

    {
        question: "Which English city was once known as Duroliponte?",
        optionA: "Oxford",
        optionB: "Bath",
        optionC: "Canterbury",
        optionD: "Cambridge",
        correctOption: "optionD"
    },

    {
        question: "The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?",
        optionA: "Black Death",
        optionB: "Polio",
        optionC: "Smallpox",
        optionD: "Measles",
        correctOption: "optionC"
    },

    {
        question: "What are the five colours of the Olympic rings?",
        optionA: "Blue, yellow, black, green, and red",
        optionB: "Yellow, red, orange, purple, and white",
        optionC: "Black, green, red, blue, and orange",
        optionD: "Blue, green, red, orange, and yellow",
        correctOption: "optionA"
    },

    {
        question: "In football, which team has won the Champions League (formerly the European Cup) the most?",
        optionA: "Real Madrid (13)",
        optionB: "Real Madrid (11)",
        optionC: "Barcelona (12)",
        optionD: "Barcelona (13)",
        correctOption: "optionA"
    },

    {
        question: "In bowling, what is the term given for three consecutive strikes?",
        optionA: "A cock",
        optionB: "A chicken",
        optionC: "A turkey",
        optionD: "A monkey",
        correctOption: "optionC"
    },

    {
        question: "How many world titles has Phil Talyor won in darts?",
        optionA: "18",
        optionB: "20",
        optionC: "16",
        optionD: "14",
        correctOption: "optionC"
    },

    {
        question: "How many Members of Parliament (MPs) are there?",
        optionA: "450",
        optionB: "750",
        optionC: "550",
        optionD: "650",
        correctOption: "optionD"
    },

    {
        question: " In which year did Britain originally join the EEC, now known as the European Union?",
        optionA: "1975",
        optionB: "1974",
        optionC: "1973",
        optionD: "1972",
        correctOption: "optionC"
    },

    {
        question: "Which country is the origin of the cocktail Mojito?",
        optionA: "Mexico",
        optionB: "Cuba",
        optionC: "Chille",
        optionD: "Peru",
        correctOption: "optionB"
    },

    {
        question: "What is Japanese sake made from?",
        optionA: "Almonds",
        optionB: "Rice",
        optionC: "Noodles",
        optionD: "Fish",
        correctOption: "optionB"
    },

    {
        question: "Which vitamin is the only one that you will not find in an egg?",
        optionA: "Vitamin C",
        optionB: "Vitamin D",
        optionC: "Vitamin K",
        optionD: "Vitamin B",
        correctOption: "optionA"
    },

    {
        question: "What does IPA stand for?",
        optionA: "Insanely pleasurable alcohol",
        optionB: "Im pissed alot",
        optionC: "Indian Pale Ale",
        optionD: "Increased peeing activity",
        correctOption: "optionC"
    },

    {
        question: "Which meat is used in Glamorgan sausages?",
        optionA: "Dog",
        optionB: "Cat",
        optionC: "Badger",
        optionD: "Mouse",
        correctOption: "optionD"
    },

    {
        question: "What ingredient is included in food in a Florentine style?",
        optionA: "Cheese",
        optionB: "Spinach",
        optionC: "Watercress",
        optionD: "Chicken",
        correctOption: "optionB"
    },

    {
        question: "Who has the most UK Number One singles ever?",
        optionA: "Madonna",
        optionB: "The Beatles",
        optionC: "Elvis Presley",
        optionD: "Ed Sheeran",
        correctOption: "optionC"
    },

    {
        question: "Who is the only musician ever to have been awarded the Nobel prize for literature?",
        optionA: "Otis Redding",
        optionB: "Bob Dylan",
        optionC: "John Lennon",
        optionD: "Sam Cooke",
        correctOption: "optionB"
    },

    {
        question: "Which Beatles song was banned from the BBC for its lyrics?",
        optionA: "Help!",
        optionB: "Let it be",
        optionC: "I am the Walrus",
        optionD: "Yellow submarine",
        correctOption: "optionC"
    },

    {
        question: "Who was the first female artist to achieve a UK number one with a self-written song?",
        optionA: "Aretha Franklin",
        optionB: "Kate Bush",
        optionC: "Madonna",
        optionD: "Lulu",
        correctOption: "optionB"
    },

    {
        question: "What is the real name of U2’s guitarist, known as The Edge?",
        optionA: "John Evans",
        optionB: "David Evans",
        optionC: "David Johns",
        optionD: "Evan Davids",
        correctOption: "optionB"
    },

    {
        question: "What is David Bowie’s real name?",
        optionA: "David Jones",
        optionB: "David Peters",
        optionC: "David Smith",
        optionD: "David White",
        correctOption: "optionA"
    }

]


let mixQuestions = [] //create an empty array to hold random selected questions

function genQuestions() { 
    //function to shuffle and push 10 questions to mixQuestions array
    while (mixQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!mixQuestions.includes(random)) {
            mixQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for grabbing element info and displaying the next question in the array to dom
function NextQ(index) {
    genQuestions()
    const currentQ = mixQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQ.question;
    document.getElementById("option-one-label").innerHTML = currentQ.optionA;
    document.getElementById("option-two-label").innerHTML = currentQ.optionB;
    document.getElementById("option-three-label").innerHTML = currentQ.optionC;
    document.getElementById("option-four-label").innerHTML = currentQ.optionD;

}


function checkForAnswer() {
    const currentQ = mixQuestions[indexNumber] //gets current question 
    const currentQAnswer = currentQ.correctOption //gets current question's correct answer option
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' a,b,c, and d
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQAnswer) {
            //get's correct radio input matched with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if selected radio button matches the correct answer.
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number untill the next question has been loaded.
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "maroon"
            document.getElementById(correctOption).style.backgroundColor = "lime"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is clicked
function handleNextQ() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays displaying the next question for one second then pulls the next question in the array if less than ten have been answered.
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQ(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong answer colours.
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question.
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all 10 questions have been answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color based on score
    if (playerScore <= 3) {
        remark = "REALLY!!!! You are a dim-wit!!!."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "congratulations. You are decidedly average."
        remarkColor = "yellow"
    }
    else if (playerScore >= 7) {
        remark = "Well done, i suppose."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100 //generate % from correct answer score

    //collect the data to be displayed in the completion score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes the score modal and resets the game back to question 1 of another random cycle of 10 questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    mixQuestions = []
    NextQ(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}