window.onload = function() {
  // Question banks
  const questionSets = {
  junior: [
    {
      question: "Who is the founder of Microsoft?",
      options: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Steve Jobs"],
      answer: "Bill Gates"
    },
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Which of these is a search engine?",
      options: ["Google", "Facebook", "WhatsApp", "Instagram"],
      answer: "Google"
    },
    {
      question: "Opposite of 'Tall' is?",
      options: ["Short", "Big", "Thin", "Long"],
      answer: "Short"
    },
    {
      question: "Which of these is NOT a computer?",
      options: ["Laptop", "Tablet", "Television", "Desktop"],
      answer: "Television"
    },
    {
      question: "Which one is an input device?",
      options: ["Mouse", "Printer", "Monitor", "Speaker"],
      answer: "Mouse"
    },
    {
      question: "In the Bible, who built the Ark?",
      options: ["Noah", "Moses", "Abraham", "David"],
      answer: "Noah"
    },
    {
      question: "The plural of 'Child' is?",
      options: ["Childs", "Children", "Childrens", "Kids"],
      answer: "Children"
    },
    {
      question: "Which planet is called the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "What is 10 × 5?",
      options: ["40", "50", "60", "55"],
      answer: "50"
    },
    {
      question: "Which one is a fruit?",
      options: ["Carrot", "Tomato", "Potato", "Onion"],
      answer: "Tomato"
    },
    {
      question: "Which of these is a web browser?",
      options: ["Chrome", "Twitter", "WhatsApp", "Zoom"],
      answer: "Chrome"
    },
    {
      question: "Who discovered electricity?",
      options: ["Albert Einstein", "Benjamin Franklin", "Isaac Newton", "Thomas Edison"],
      answer: "Benjamin Franklin"
    },
    {
      question: "What is the opposite of 'Happy'?",
      options: ["Excited", "Sad", "Angry", "Joyful"],
      answer: "Sad"
    },
    {
      question: "Who killed Goliath in the Bible?",
      options: ["David", "Moses", "Solomon", "Paul"],
      answer: "David"
    },
    {
      question: "Which of these is a programming language?",
      options: ["Python", "Google", "Excel", "Yahoo"],
      answer: "Python"
    },
    {
      question: "How many days are in a week?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Nigeria is located on which continent?",
      options: ["Asia", "Africa", "Europe", "America"],
      answer: "Africa"
    },
    {
      question: "What do we call a baby dog?",
      options: ["Kitten", "Puppy", "Cub", "Calf"],
      answer: "Puppy"
    },
    {
      question: "What is the color of the Nigerian flag?",
      options: ["Green and White", "Red and White", "Blue and White", "Black and Yellow"],
      answer: "Green and White"
    },
    {
      question: "What is the past tense of 'Go'?",
      options: ["Goed", "Gone", "Went", "Go"],
      answer: "Went"
    }
  ],

  senior: [
    {
      question: "Find the next number in the sequence: 2, 4, 8, 16, ?",
      options: ["18", "24", "32", "20"],
      answer: "32"
    },
    {
      question: "What does HTTP stand for?",
      options: ["Hyper Text Transfer Protocol", "High Tech Transfer Program", "Hyper Transfer Test Protocol", "Home Tool Transfer Protocol"],
      answer: "Hyper Text Transfer Protocol"
    },
    {
      question: "Synonym of 'Brilliant' is?",
      options: ["Dull", "Intelligent", "Weak", "Slow"],
      answer: "Intelligent"
    },
    {
      question: "Who invented the World Wide Web?",
      options: ["Tim Berners-Lee", "Bill Gates", "Larry Page", "Mark Zuckerberg"],
      answer: "Tim Berners-Lee"
    },
    {
      question: "Opposite of 'Scarcity' is?",
      options: ["Plenty", "Shortage", "Lack", "Few"],
      answer: "Plenty"
    },
    {
      question: "Solve: (15 × 4) ÷ 10 = ?",
      options: ["5", "6", "4", "7"],
      answer: "6"
    },
    {
      question: "Who is known as the father of Artificial Intelligence?",
      options: ["Alan Turing", "John McCarthy", "Elon Musk", "Dennis Ritchie"],
      answer: "John McCarthy"
    },
    {
      question: "What is the antonym of 'Victory'?",
      options: ["Defeat", "Win", "Champion", "Battle"],
      answer: "Defeat"
    },
    {
      question: "Which of these is a programming language?",
      options: ["Python", "Excel", "Windows", "Photoshop"],
      answer: "Python"
    },
    {
      question: "Simplify: 2x + 3x - 5 = ? (when x = 2)",
      options: ["5", "10", "15", "20"],
      answer: "5"
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Power Unit", "Control Process Utility", "Central Program Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Who is the current UN Secretary-General? (2025)",
      options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Jim Yong Kim"],
      answer: "Antonio Guterres"
    },
    {
      question: "Which of these is NOT an African country?",
      options: ["Brazil", "Ghana", "Kenya", "Uganda"],
      answer: "Brazil"
    },
    {
      question: "What is the opposite of 'Generous'?",
      options: ["Selfish", "Kind", "Liberal", "Giving"],
      answer: "Selfish"
    },
    {
      question: "The binary number system uses which two digits?",
      options: ["0 and 1", "1 and 2", "2 and 3", "9 and 10"],
      answer: "0 and 1"
    },
    {
      question: "What is 25% of 200?",
      options: ["25", "50", "75", "100"],
      answer: "50"
    },
    {
      question: "Which of these is a storage device?",
      options: ["Hard Drive", "Monitor", "Keyboard", "Speaker"],
      answer: "Hard Drive"
    },
    {
      question: "What is the longest river in Africa?",
      options: ["Niger", "Congo", "Nile", "Zambezi"],
      answer: "Nile"
   }
  ],

  professional: [
    {
      question: "Solve: If 3x + 2 = 11, what is x?",
      options: ["2", "3", "4", "5"],
      answer: "3"
    },
    {
      question: "Which company developed the Android operating system?",
      options: ["Apple", "Google", "Microsoft", "Samsung"],
      answer: "Google"
    },
    {
      question: "What is the synonym of 'Meticulous'?",
      options: ["Careless", "Thorough", "Quick", "Simple"],
      answer: "Thorough"
    },
    {
      question: "Who is regarded as the father of modern computing?",
      options: ["Charles Babbage", "Alan Turing", "John Von Neumann", "Bill Gates"],
      answer: "Charles Babbage"
    },
    {
      question: "In probability, what is the chance of getting a head when tossing a fair coin?",
      options: ["1/4", "1/2", "1/3", "2/3"],
      answer: "1/2"
    },
    {
      question: "What is the antonym of 'Ambiguous'?",
      options: ["Unclear", "Definite", "Confusing", "Complicated"],
      answer: "Definite"
    },
    {
      question: "Which technology is the foundation of cloud computing?",
      options: ["Virtualization", "Blockchain", "Networking", "AI"],
      answer: "Virtualization"
    },
    {
      question: "If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many are girls?",
      options: ["10", "12", "15", "18"],
      answer: "12"
    },
    {
      question: "What does 'Phishing' refer to in cybersecurity?",
      options: ["A type of fish", "Tricking people into giving information", "Hacking passwords directly", "Installing malware physically"],
      answer: "Tricking people into giving information"
    },
    {
      question: "The antonym of 'Superficial' is?",
      options: ["Deep", "Shallow", "Fake", "Weak"],
      answer: "Deep"
    },
    {
      question: "Which data structure uses FIFO principle?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue"
    },
    {
      question: "Who is the current Secretary-General of the United Nations? (2025)",
      options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Christine Lagarde"],
      answer: "Antonio Guterres"
    },
    {
      question: "What is the derivative of 2x² with respect to x?",
      options: ["2x", "4x", "x²", "2"],
      answer: "4x"
    },
    {
      question: "Which is NOT a programming language?",
      options: ["Python", "Java", "Linux", "C++"],
      answer: "Linux"
    },
    {
      question: "Solve: If y = 3x + 2, find y when x = 4.",
      options: ["10", "12", "14", "20"],
      answer: "14"
    },
    {
      question: "Which of these is an example of AI?",
      options: ["ChatGPT", "Excel", "Paint", "Notepad"],
      answer: "ChatGPT"
    },
    {
      question: "What is the antonym of 'Hostile'?",
      options: ["Friendly", "Aggressive", "Wicked", "Cruel"],
      answer: "Friendly"
    },
    {
      question: "IPv4 addresses are made up of how many bits?",
      options: ["32", "64", "128", "16"],
      answer: "32"
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    }
  ]
};

  let currentCategory = null;
  let currentQuestion = 0;
  let score = 0;
  let questions = [];
  let selectedOption = null; // track selected answer

  const homeScreen = document.getElementById("home-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");

  window.startQuiz = function(category) {
    currentCategory = category;
    questions = questionSets[category];
    currentQuestion = 0;
    score = 0;
    selectedOption = null;

    homeScreen.style.display = "none";
    quizScreen.style.display = "block";
    nextButton.style.display = "none";
    scoreElement.textContent = "";

    loadQuestion();
    startTimer(1800);
  }

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    optionsElement.innerHTML = "";
    selectedOption = null;

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");

      // when clicked, highlight the selection
      btn.onclick = () => selectAnswer(btn, option);

      optionsElement.appendChild(btn);
    });
    nextButton.style.display = "none"; // hide Next until selection
  }

  function selectAnswer(button, option) {
    // remove highlight from all options
    const allOptions = document.querySelectorAll(".option-btn");
    allOptions.forEach(btn => btn.classList.remove("selected"));

    // highlight the clicked option
    button.classList.add("selected");
    selectedOption = option;

    // allow moving forward
    nextButton.style.display = "block";
  }

  function checkAnswer() {
    const correct = questions[currentQuestion].answer;
    if (selectedOption === correct) {
      score++;
    }
  }

  nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });

  function showScore() {
    questionElement.textContent = "Test Completed!";
    questionElement.style.display = "block"
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
  }
}
document.querySelectorAll(".button-group button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("quiz-container").classList.remove("hidden");
    document.querySelector(".button-group").classList.add("hidden");
    loadQuestion();// ⏰ Start countdown
  });
});
let timerInterval;
let timeLeft = 0;

function startTimer(duration) {
  clearInterval(timerInterval); // stop old timers
  timeLeft = duration; // reset
  const timeDisplay = document.getElementById("time");

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timeDisplay.textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      forceSubmit(0);
    }

    timeLeft--;
  }, 1000);
}

window.startQuiz = function(category) {
  currentCategory = category;
  questions = questionSets[category];
  currentQuestion = 0;
  score = 0;


  selectedOption = null;

  homeScreen.style.display = "block";
  quizScreen.style.display = "block";
  nextButton.style.display = "none";
  scoreElement.textContent = "";

  loadQuestion();
}



