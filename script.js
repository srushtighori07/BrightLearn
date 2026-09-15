/* =========================================================
   BRIGHTLEARN
   script.js
   Quality Education Website
   ========================================================= */


/* =========================================================
   QUIZ DATA
   ========================================================= */

const quizData = {

    /* =====================================================
       COMPUTER SCIENCE
       ===================================================== */

    cs: {
        name: "Computer Science",

        questions: [

            {
                q: "What does CPU stand for?",
                options: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Utility",
                    "Computer Processing Unit"
                ],
                answer: 0
            },

            {
                q: "Which language is used to structure web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Python"
                ],
                answer: 0
            },

            {
                q: "Which language is mainly used to style web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "Java",
                    "Python"
                ],
                answer: 1
            },

            {
                q: "Which language is commonly used to add interactivity to web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL"
                ],
                answer: 2
            },

            {
                q: "What does RAM stand for?",
                options: [
                    "Random Access Memory",
                    "Read Access Memory",
                    "Rapid Application Memory",
                    "Random Application Module"
                ],
                answer: 0
            },

            {
                q: "Which device is used to enter text into a computer?",
                options: [
                    "Monitor",
                    "Keyboard",
                    "Printer",
                    "Speaker"
                ],
                answer: 1
            },

            {
                q: "Which device displays the output from a computer?",
                options: [
                    "Keyboard",
                    "Mouse",
                    "Monitor",
                    "Scanner"
                ],
                answer: 2
            },

            {
                q: "What does URL stand for?",
                options: [
                    "Uniform Resource Locator",
                    "Universal Resource Link",
                    "Uniform Reference Link",
                    "Universal Reference Locator"
                ],
                answer: 0
            },

            {
                q: "Which of the following is an operating system?",
                options: [
                    "Windows",
                    "HTML",
                    "Google",
                    "Python"
                ],
                answer: 0
            },

            {
                q: "Which device is commonly used for permanent data storage?",
                options: [
                    "RAM",
                    "Hard Disk",
                    "Cache",
                    "Register"
                ],
                answer: 1
            },

            {
                q: "What does WWW stand for?",
                options: [
                    "World Wide Web",
                    "World Web Window",
                    "Wide World Web",
                    "Web World Wide"
                ],
                answer: 0
            },

            {
                q: "Which data structure follows FIFO?",
                options: [
                    "Stack",
                    "Queue",
                    "Tree",
                    "Graph"
                ],
                answer: 1
            },

            {
                q: "Which data structure follows LIFO?",
                options: [
                    "Queue",
                    "Array",
                    "Stack",
                    "Graph"
                ],
                answer: 2
            },

            {
                q: "Which symbol is commonly used for a single-line comment in JavaScript?",
                options: [
                    "//",
                    "##",
                    "<!-- -->",
                    "/* */"
                ],
                answer: 0
            },

            {
                q: "Which of the following is a programming language?",
                options: [
                    "Python",
                    "HTML",
                    "CSS",
                    "HTTP"
                ],
                answer: 0
            }
        ]
    },


    /* =====================================================
       MATHEMATICS
       ===================================================== */

    math: {
        name: "Mathematics",

        questions: [

            {
                q: "What is 5 + 7?",
                options: [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                answer: 2
            },

            {
                q: "What is 10 × 5?",
                options: [
                    "40",
                    "50",
                    "60",
                    "55"
                ],
                answer: 1
            },

            {
                q: "What is 100 ÷ 10?",
                options: [
                    "5",
                    "10",
                    "20",
                    "15"
                ],
                answer: 1
            },

            {
                q: "What is 6²?",
                options: [
                    "12",
                    "18",
                    "36",
                    "42"
                ],
                answer: 2
            },

            {
                q: "What is √81?",
                options: [
                    "7",
                    "8",
                    "9",
                    "10"
                ],
                answer: 2
            },

            {
                q: "What is 15 − 8?",
                options: [
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                answer: 2
            },

            {
                q: "What is 25% of 100?",
                options: [
                    "20",
                    "25",
                    "30",
                    "50"
                ],
                answer: 1
            },

            {
                q: "How many sides does a triangle have?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                answer: 1
            },

            {
                q: "What is 2³?",
                options: [
                    "6",
                    "8",
                    "9",
                    "12"
                ],
                answer: 1
            },

            {
                q: "What is 9 × 9?",
                options: [
                    "72",
                    "81",
                    "90",
                    "99"
                ],
                answer: 1
            },

            {
                q: "What is the perimeter of a square with side 5 cm?",
                options: [
                    "10 cm",
                    "15 cm",
                    "20 cm",
                    "25 cm"
                ],
                answer: 2
            },

            {
                q: "What is 1/2 in decimal form?",
                options: [
                    "0.2",
                    "0.5",
                    "1.5",
                    "2"
                ],
                answer: 1
            },

            {
                q: "What comes next: 2, 4, 6, 8, ___?",
                options: [
                    "9",
                    "10",
                    "11",
                    "12"
                ],
                answer: 1
            },

            {
                q: "What is a right angle?",
                options: [
                    "45°",
                    "60°",
                    "90°",
                    "180°"
                ],
                answer: 2
            },

            {
                q: "What is 20 + 30 + 10?",
                options: [
                    "50",
                    "60",
                    "70",
                    "80"
                ],
                answer: 1
            }
        ]
    },


    /* =====================================================
       SCIENCE
       ===================================================== */

    science: {
        name: "Science",

        questions: [

            {
                q: "Which planet is known as the Red Planet?",
                options: [
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Venus"
                ],
                answer: 1
            },

            {
                q: "Which gas is mainly needed for breathing?",
                options: [
                    "Carbon dioxide",
                    "Oxygen",
                    "Nitrogen",
                    "Hydrogen"
                ],
                answer: 1
            },

            {
                q: "What is the main source of energy for Earth?",
                options: [
                    "Moon",
                    "Sun",
                    "Wind",
                    "Water"
                ],
                answer: 1
            },

            {
                q: "What is H₂O?",
                options: [
                    "Oxygen",
                    "Hydrogen",
                    "Water",
                    "Carbon dioxide"
                ],
                answer: 2
            },

            {
                q: "Which organ pumps blood through the body?",
                options: [
                    "Lungs",
                    "Brain",
                    "Heart",
                    "Kidney"
                ],
                answer: 2
            },

            {
                q: "Which part of a plant absorbs water from the soil?",
                options: [
                    "Leaves",
                    "Flowers",
                    "Roots",
                    "Stem"
                ],
                answer: 2
            },

            {
                q: "Which gas is used by plants during photosynthesis?",
                options: [
                    "Oxygen",
                    "Carbon dioxide",
                    "Hydrogen",
                    "Nitrogen"
                ],
                answer: 1
            },

            {
                q: "Which force pulls objects toward Earth?",
                options: [
                    "Friction",
                    "Gravity",
                    "Magnetism",
                    "Pressure"
                ],
                answer: 1
            },

            {
                q: "Which is the largest planet in our solar system?",
                options: [
                    "Earth",
                    "Saturn",
                    "Jupiter",
                    "Mars"
                ],
                answer: 2
            },

            {
                q: "Which state of matter has a fixed shape?",
                options: [
                    "Liquid",
                    "Gas",
                    "Solid",
                    "Plasma"
                ],
                answer: 2
            },

            {
                q: "Which organ is mainly used for breathing?",
                options: [
                    "Heart",
                    "Lungs",
                    "Kidney",
                    "Stomach"
                ],
                answer: 1
            },

            {
                q: "What is Earth's natural satellite?",
                options: [
                    "Sun",
                    "Mars",
                    "Moon",
                    "Venus"
                ],
                answer: 2
            },

            {
                q: "Which vitamin is produced in the body with the help of sunlight?",
                options: [
                    "Vitamin A",
                    "Vitamin B",
                    "Vitamin C",
                    "Vitamin D"
                ],
                answer: 3
            },

            {
                q: "Which material is attracted by a magnet?",
                options: [
                    "Wood",
                    "Plastic",
                    "Iron",
                    "Glass"
                ],
                answer: 2
            },

            {
                q: "What is the process by which plants make their food?",
                options: [
                    "Respiration",
                    "Photosynthesis",
                    "Digestion",
                    "Transpiration"
                ],
                answer: 1
            }
        ]
    },


    /* =====================================================
       COMMUNICATION
       ===================================================== */

    communication: {
        name: "Communication",

        questions: [

            {
                q: "What is communication?",
                options: [
                    "Exchange of information",
                    "Only writing",
                    "Only speaking",
                    "Only listening"
                ],
                answer: 0
            },

            {
                q: "Which is an example of verbal communication?",
                options: [
                    "Speaking",
                    "Facial expression",
                    "Eye contact",
                    "Body movement"
                ],
                answer: 0
            },

            {
                q: "Which is an example of non-verbal communication?",
                options: [
                    "Email",
                    "Speaking",
                    "Facial expression",
                    "Letter"
                ],
                answer: 2
            },

            {
                q: "What is active listening?",
                options: [
                    "Ignoring the speaker",
                    "Listening carefully and responding appropriately",
                    "Talking continuously",
                    "Changing the topic"
                ],
                answer: 1
            },

            {
                q: "Which quality is important for effective communication?",
                options: [
                    "Confusion",
                    "Clarity",
                    "Silence",
                    "Anger"
                ],
                answer: 1
            },

            {
                q: "A good message should be:",
                options: [
                    "Confusing",
                    "Long and unclear",
                    "Clear",
                    "Incomplete"
                ],
                answer: 2
            },

            {
                q: "Which is an example of written communication?",
                options: [
                    "Email",
                    "Facial expression",
                    "Eye contact",
                    "Gesture"
                ],
                answer: 0
            },

            {
                q: "What does feedback tell us?",
                options: [
                    "Whether the message was understood",
                    "The weather",
                    "The time",
                    "The location"
                ],
                answer: 0
            },

            {
                q: "Which quality improves communication?",
                options: [
                    "Disrespect",
                    "Confusion",
                    "Respect",
                    "Ignoring"
                ],
                answer: 2
            },

            {
                q: "Body language is a form of:",
                options: [
                    "Written communication",
                    "Non-verbal communication",
                    "Programming",
                    "Mathematics"
                ],
                answer: 1
            },

            {
                q: "Which is important during a presentation?",
                options: [
                    "Avoiding the audience",
                    "Eye contact",
                    "Speaking very quietly",
                    "Ignoring questions"
                ],
                answer: 1
            },

            {
                q: "What should you do if you do not understand something?",
                options: [
                    "Ignore it",
                    "Leave immediately",
                    "Ask for clarification",
                    "Change the topic"
                ],
                answer: 2
            },

            {
                q: "Which is suitable for sending an urgent message?",
                options: [
                    "Direct speaking",
                    "Waiting several days",
                    "Ignoring the message",
                    "No communication"
                ],
                answer: 0
            },

            {
                q: "Which is an important part of good communication?",
                options: [
                    "Listening",
                    "Ignoring",
                    "Interrupting",
                    "Confusing"
                ],
                answer: 0
            },

            {
                q: "What can improve communication confidence?",
                options: [
                    "Clear expression of ideas",
                    "Avoiding communication",
                    "Speaking unclearly",
                    "Ignoring feedback"
                ],
                answer: 0
            }
        ]
    }
};


/* =========================================================
   QUIZ TEXT / LANGUAGES
   ========================================================= */

const quizText = {

    en: {
        select: "Select Subject",
        submit: "Submit Quiz",
        score: "Your Score",
        completed: "Quiz Completed!",
        unanswered: "Please answer all questions before submitting."
    },

    gu: {
        select: "વિષય પસંદ કરો",
        submit: "ક્વિઝ સબમિટ કરો",
        score: "તમારો સ્કોર",
        completed: "ક્વિઝ પૂર્ણ થઈ!",
        unanswered: "સબમિટ કરતા પહેલા બધા પ્રશ્નોના જવાબ આપો."
    },

    hi: {
        select: "विषय चुनें",
        submit: "क्विज़ जमा करें",
        score: "आपका स्कोर",
        completed: "क्विज़ पूरा हुआ!",
        unanswered: "सबमिट करने से पहले सभी प्रश्नों के उत्तर दें।"
    },

    mr: {
        select: "विषय निवडा",
        submit: "क्विझ सबमिट करा",
        score: "तुमचा स्कोअर",
        completed: "क्विझ पूर्ण झाला!",
        unanswered: "सबमिट करण्यापूर्वी सर्व प्रश्नांची उत्तरे द्या."
    },

    bn: {
        select: "বিষয় নির্বাচন করুন",
        submit: "কুইজ জমা দিন",
        score: "আপনার স্কোর",
        completed: "কুইজ সম্পন্ন হয়েছে!",
        unanswered: "জমা দেওয়ার আগে সব প্রশ্নের উত্তর দিন।"
    },

    ta: {
        select: "பாடத்தைத் தேர்ந்தெடுக்கவும்",
        submit: "வினாடி வினாவை சமர்ப்பிக்கவும்",
        score: "உங்கள் மதிப்பெண்",
        completed: "வினாடி வினா முடிந்தது!",
        unanswered: "சமர்ப்பிக்கும் முன் அனைத்து கேள்விகளுக்கும் பதிலளிக்கவும்."
    }
};


/* =========================================================
   CURRENT LANGUAGE
   ========================================================= */

let currentLanguage =
    localStorage.getItem("brightLearnLanguage") || "en";


/* =========================================================
   GENERATE QUIZZES
   ========================================================= */

function generateAllQuizzes() {

    const subjects = [
        "cs",
        "math",
        "science",
        "communication"
    ];


    subjects.forEach(function(subject) {

        const quizContainer =
            document.getElementById("quiz-" + subject);


        if (!quizContainer) {
            return;
        }


        const data = quizData[subject];


        /* Clear old/static questions */
        quizContainer.innerHTML = "";


        /* Subject title */
        const title =
            document.createElement("h3");

        title.className = "quiz-title";
        title.textContent = data.name;

        quizContainer.appendChild(title);


        /* Questions */
        data.questions.forEach(function(item, index) {

            const questionBox =
                document.createElement("div");

            questionBox.className = "question";


            /* Store correct answer */
            questionBox.dataset.answer =
                item.answer;


            /* Question */
            const questionTitle =
                document.createElement("h4");

            questionTitle.textContent =
                (index + 1) + ". " + item.q;

            questionBox.appendChild(
                questionTitle
            );


            /* Options */
            item.options.forEach(function(option, optionIndex) {

                const label =
                    document.createElement("label");

                label.className =
                    "quiz-option";


                const radio =
                    document.createElement("input");

                radio.type = "radio";

                radio.name =
                    subject + "-question-" + index;

                radio.value =
                    optionIndex;


                label.appendChild(radio);


                const optionText =
                    document.createTextNode(
                        " " + option
                    );

                label.appendChild(optionText);


                questionBox.appendChild(label);
            });


            quizContainer.appendChild(
                questionBox
            );
        });


        /* =========================================
           SUBMIT BUTTON
           ========================================= */

        const submitButton =
            document.createElement("button");

        submitButton.type = "button";

        submitButton.className =
            "quiz-submit";

        submitButton.textContent =
            quizText[currentLanguage].submit;


        submitButton.addEventListener(
            "click",
            function() {
                submitQuiz(subject);
            }
        );


        quizContainer.appendChild(
            submitButton
        );


        /* =========================================
           RESULT AREA
           ========================================= */

        const result =
            document.createElement("div");

        result.className =
            "quiz-result";

        result.id =
            "result-" + subject;


        quizContainer.appendChild(
            result
        );
    });


    /* Show Computer Science initially */
    showSelectedQuiz("cs");
}


/* =========================================================
   SHOW SELECTED QUIZ
   ========================================================= */

function showSelectedQuiz(subject) {

    const quizzes =
        document.querySelectorAll(
            ".quiz-subject"
        );


    quizzes.forEach(function(quiz) {

        quiz.style.display = "none";
    });


    const selectedQuiz =
        document.getElementById(
            "quiz-" + subject
        );


    if (selectedQuiz) {

        selectedQuiz.style.display =
            "block";
    }
}


/* =========================================================
   SELECT SUBJECT
   ========================================================= */

function selectQuizSubject(subject) {

    if (!subject) {
        return;
    }


    showSelectedQuiz(subject);
}


/* =========================================================
   SUBMIT QUIZ
   ========================================================= */

function submitQuiz(subject) {

    const quiz =
        document.getElementById(
            "quiz-" + subject
        );


    if (!quiz) {
        return;
    }


    const questions =
        quiz.querySelectorAll(
            ".question"
        );


    let score = 0;
    let unanswered = 0;


    questions.forEach(function(question) {

        const selected =
            question.querySelector(
                'input[type="radio"]:checked'
            );


        if (!selected) {

            unanswered++;

            return;
        }


        const correctAnswer =
            Number(
                question.dataset.answer
            );


        if (
            Number(selected.value) ===
            correctAnswer
        ) {

            score++;
        }
    });


    /* Don't submit incomplete quiz */
    if (unanswered > 0) {

        alert(
            quizText[currentLanguage].unanswered
        );

        return;
    }


    /* =========================================
       SAVE COMPLETED SUBJECT
       ========================================= */

    let progress =
        JSON.parse(
            localStorage.getItem(
                "brightLearnQuizProgress"
            ) || "{}"
        );


    progress[subject] = true;


    localStorage.setItem(
        "brightLearnQuizProgress",
        JSON.stringify(progress)
    );


    /* =========================================
       DISPLAY RESULT
       ========================================= */

    const result =
        document.getElementById(
            "result-" + subject
        );


    if (result) {

        result.innerHTML =
            "<strong>" +
            quizText[currentLanguage].completed +
            "</strong><br>" +
            quizText[currentLanguage].score +
            ": " +
            score +
            " / " +
            questions.length;
    }


    /* =========================================
       UPDATE DASHBOARD
       ========================================= */

    updateDashboard();

    updateCourseStatuses();
}


/* =========================================================
   UPDATE DASHBOARD
   ========================================================= */

function updateDashboard() {

    const progress =
        JSON.parse(
            localStorage.getItem(
                "brightLearnQuizProgress"
            ) || "{}"
        );


    const subjects = [
        "cs",
        "math",
        "science",
        "communication"
    ];


    let completed = 0;


    subjects.forEach(function(subject) {

        if (progress[subject] === true) {

            completed++;
        }
    });


    const totalSubjects =
        subjects.length;


    const percentage =
        Math.round(
            (completed / totalSubjects) * 100
        );


    /* =========================================
       COMPLETED QUIZZES
       ========================================= */

    document
        .querySelectorAll(
            "#completed-count"
        )
        .forEach(function(element) {

            element.textContent =
                completed;
        });


    /* =========================================
       OVERALL PROGRESS
       ========================================= */

    document
        .querySelectorAll(
            "#progress-percent"
        )
        .forEach(function(element) {

            element.textContent =
                percentage + "%";
        });


    /*
       Some versions of the dashboard may use
       a different ID for the second percentage.
       Update those too.
    */

    document
        .querySelectorAll(
            "#progress-percentage"
        )
        .forEach(function(element) {

            element.textContent =
                percentage + "%";
        });


    document
        .querySelectorAll(
            "#progress-value"
        )
        .forEach(function(element) {

            element.textContent =
                percentage + "%";
        });


    document
        .querySelectorAll(
            ".progress-percent"
        )
        .forEach(function(element) {

            element.textContent =
                percentage + "%";
        });


    document
        .querySelectorAll(
            ".progress-percentage"
        )
        .forEach(function(element) {

            element.textContent =
                percentage + "%";
        });


    /* =========================================
       PROGRESS BAR
       ========================================= */

    document
        .querySelectorAll(
            "#progress-fill"
        )
        .forEach(function(element) {

            element.style.width =
                percentage + "%";
        });


    document
        .querySelectorAll(
            ".progress-fill"
        )
        .forEach(function(element) {

            element.style.width =
                percentage + "%";
        });


    /* =========================================
       PROGRESS DESCRIPTION
       ========================================= */

    document
        .querySelectorAll(
            "#progress-text"
        )
        .forEach(function(element) {

            element.textContent =
                completed +
                " of " +
                totalSubjects +
                " subjects completed";
        });


    /* =========================================
       EXTRA FIX FOR PROGRESS HEADER
       ========================================= */

    /*
       If the percentage shown beside "Progress"
       is inside a progress header, update it too.
    */

    document
        .querySelectorAll(
            ".progress-header span"
        )
        .forEach(function(element) {

            const text =
                element.textContent.trim();

            if (
                text === "0%" ||
                text === "25%" ||
                text === "50%" ||
                text === "75%" ||
                text === "100%"
            ) {

                element.textContent =
                    percentage + "%";
            }
        });


    /* =========================================
       ACHIEVEMENT
       ========================================= */

    document
        .querySelectorAll(
            "#achievement-text"
        )
        .forEach(function(element) {

            if (percentage === 100) {

                element.textContent =
                    "Excellent! You completed all subjects.";

            } else if (percentage > 0) {

                element.textContent =
                    "Great progress! Keep learning.";

            } else {

                element.textContent =
                    "Start a quiz to begin your learning progress.";
            }
        });
}


/* =========================================================
   UPDATE COURSE STATUS
   ========================================================= */

function updateCourseStatuses() {

    const progress =
        JSON.parse(
            localStorage.getItem(
                "brightLearnQuizProgress"
            ) || "{}"
        );


    const statusMap = {

        cs: "status-cs",

        math: "status-math",

        science: "status-science",

        communication: "status-communication"
    };


    Object.keys(statusMap).forEach(
        function(subject) {

            const status =
                document.getElementById(
                    statusMap[subject]
                );


            if (!status) {
                return;
            }


            if (progress[subject] === true) {

                status.textContent =
                    "Completed";

                status.classList.add(
                    "completed"
                );

            } else {

                status.textContent =
                    "Not Started";

                status.classList.remove(
                    "completed"
                );
            }
        }
    );
}


/* =========================================================
   START COURSE
   ========================================================= */

function startCourse(subject) {

    const selector =
        document.getElementById(
            "quiz-subject"
        );


    if (selector) {

        selector.value =
            subject;
    }


    showSelectedQuiz(subject);


    const quizSection =
        document.getElementById(
            "quiz"
        );


    if (quizSection) {

        quizSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   LANGUAGE CHANGE
   ========================================================= */

function changeLanguage(language) {

    if (!quizText[language]) {

        language = "en";
    }


    currentLanguage =
        language;


    localStorage.setItem(
        "brightLearnLanguage",
        language
    );


    const selector =
        document.getElementById(
            "language-selector"
        );


    if (selector) {

        selector.value =
            language;
    }


    updatePageTranslations();


    /* Update all submit buttons */
    document
        .querySelectorAll(
            ".quiz-submit"
        )
        .forEach(function(button) {

            button.textContent =
                quizText[language].submit;
        });
}


/* =========================================================
   PAGE TRANSLATIONS
   ========================================================= */

const translations = {

    en: {

        "hero-tagline":
            "Learn Today. Build Tomorrow.",

        "hero-title":
            "Quality Education for Everyone",

        "hero-description":
            "Learn, explore and grow with simple and accessible digital education.",

        "hero-button":
            "Explore Courses",

        "about-title":
            "About BrightLearn",

        "resources-title":
            "Learning Resources",

        "courses-title":
            "Our Courses",

        "dashboard-title":
            "Your Learning Dashboard",

        "profile-title":
            "Student Profile",

        "login-title":
            "Login",

        "quiz-title":
            "Subject Quiz",

        "contact-title":
            "Contact & Feedback"
    },


    gu: {

        "hero-tagline":
            "આજે શીખો. આવતીકાલ બનાવો.",

        "hero-title":
            "દરેક માટે ગુણવત્તાયુક્ત શિક્ષણ",

        "hero-description":
            "સરળ અને સુલભ ડિજિટલ શિક્ષણ સાથે શીખો, શોધો અને વિકાસ કરો.",

        "hero-button":
            "કોર્સ જુઓ",

        "about-title":
            "BrightLearn વિશે",

        "resources-title":
            "શૈક્ષણિક સંસાધનો",

        "courses-title":
            "અમારા કોર્સ",

        "dashboard-title":
            "તમારું લર્નિંગ ડેશબોર્ડ",

        "profile-title":
            "વિદ્યાર્થી પ્રોફાઇલ",

        "login-title":
            "લૉગિન",

        "quiz-title":
            "વિષય ક્વિઝ",

        "contact-title":
            "સંપર્ક અને પ્રતિસાદ"
    },


    hi: {

        "hero-tagline":
            "आज सीखें। कल बनाएं।",

        "hero-title":
            "सभी के लिए गुणवत्तापूर्ण शिक्षा",

        "hero-description":
            "सरल और सुलभ डिजिटल शिक्षा के साथ सीखें, खोजें और आगे बढ़ें।",

        "hero-button":
            "कोर्स देखें",

        "about-title":
            "BrightLearn के बारे में",

        "resources-title":
            "शैक्षिक संसाधन",

        "courses-title":
            "हमारे कोर्स",

        "dashboard-title":
            "आपका लर्निंग डैशबोर्ड",

        "profile-title":
            "विद्यार्थी प्रोफ़ाइल",

        "login-title":
            "लॉगिन",

        "quiz-title":
            "विषय क्विज़",

        "contact-title":
            "संपर्क और प्रतिक्रिया"
    },


    mr: {

        "hero-tagline":
            "आज शिका. उद्या घडवा.",

        "hero-title":
            "सर्वांसाठी गुणवत्तापूर्ण शिक्षण",

        "hero-description":
            "सोप्या आणि सुलभ डिजिटल शिक्षणासह शिका, शोधा आणि प्रगती करा.",

        "hero-button":
            "अभ्यासक्रम पहा",

        "about-title":
            "BrightLearn बद्दल",

        "resources-title":
            "शैक्षणिक संसाधने",

        "courses-title":
            "आमचे अभ्यासक्रम",

        "dashboard-title":
            "तुमचे लर्निंग डॅशबोर्ड",

        "profile-title":
            "विद्यार्थी प्रोफाइल",

        "login-title":
            "लॉगिन",

        "quiz-title":
            "विषय क्विझ",

        "contact-title":
            "संपर्क आणि अभिप्राय"
    },


    bn: {

        "hero-tagline":
            "আজ শিখুন। আগামীকাল গড়ুন।",

        "hero-title":
            "সবার জন্য মানসম্মত শিক্ষা",

        "hero-description":
            "সহজ এবং অ্যাক্সেসযোগ্য ডিজিটাল শিক্ষার মাধ্যমে শিখুন, অন্বেষণ করুন এবং এগিয়ে যান।",

        "hero-button":
            "কোর্স দেখুন",

        "about-title":
            "BrightLearn সম্পর্কে",

        "resources-title":
            "শিক্ষামূলক সম্পদ",

        "courses-title":
            "আমাদের কোর্স",

        "dashboard-title":
            "আপনার লার্নিং ড্যাশবোর্ড",

        "profile-title":
            "শিক্ষার্থী প্রোফাইল",

        "login-title":
            "লগইন",

        "quiz-title":
            "বিষয় কুইজ",

        "contact-title":
            "যোগাযোগ ও মতামত"
    },


    ta: {

        "hero-tagline":
            "இன்று கற்றுக்கொள்ளுங்கள். நாளையை உருவாக்குங்கள்.",

        "hero-title":
            "அனைவருக்கும் தரமான கல்வி",

        "hero-description":
            "எளிய மற்றும் அணுகக்கூடிய டிஜிட்டல் கல்வியுடன் கற்றுக்கொள்ளுங்கள், ஆராயுங்கள் மற்றும் வளருங்கள்.",

        "hero-button":
            "பாடங்களைப் பார்க்கவும்",

        "about-title":
            "BrightLearn பற்றி",

        "resources-title":
            "கல்வி வளங்கள்",

        "courses-title":
            "எங்கள் பாடங்கள்",

        "dashboard-title":
            "உங்கள் கற்றல் டாஷ்போர்டு",

        "profile-title":
            "மாணவர் சுயவிவரம்",

        "login-title":
            "உள்நுழைவு",

        "quiz-title":
            "பாட வினாடி வினா",

        "contact-title":
            "தொடர்பு மற்றும் கருத்து"
    }
};


/* =========================================================
   UPDATE PAGE TRANSLATIONS
   ========================================================= */

function updatePageTranslations() {

    const language =
        translations[currentLanguage];


    if (!language) {
        return;
    }


    Object.keys(language).forEach(
        function(id) {

            const element =
                document.getElementById(id);


            if (element) {

                element.textContent =
                    language[id];
            }
        }
    );
}


/* =========================================================
   LOGIN
   ========================================================= */

function handleLogin(event) {

    if (event) {

        event.preventDefault();
    }


    const loginMessage =
        document.getElementById(
            "login-message"
        );


    if (loginMessage) {

        loginMessage.textContent =
            "Demo login successful!";
    }
}


/* =========================================================
   FEEDBACK
   ========================================================= */

function handleFeedback(event) {

    if (event) {

        event.preventDefault();
    }


    const feedbackMessage =
        document.getElementById(
            "feedback-message"
        );


    if (feedbackMessage) {

        feedbackMessage.textContent =
            "Thank you for your feedback!";
    }
}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Generate all quizzes */
        generateAllQuizzes();


        /* Set language */
        const languageSelector =
            document.getElementById(
                "language-selector"
            );


        if (languageSelector) {

            languageSelector.value =
                currentLanguage;
        }


        /* Update language */
        updatePageTranslations();


        /* Update dashboard */
        updateDashboard();


        /* Update course status */
        updateCourseStatuses();


        /* =========================================
           SUBJECT DROPDOWN
           ========================================= */

        const quizSubject =
            document.getElementById(
                "quiz-subject"
            );


        if (quizSubject) {

            quizSubject.addEventListener(
                "change",
                function() {

                    showSelectedQuiz(
                        this.value
                    );
                }
            );
        }
    }
);