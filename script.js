/* =========================================================
   BRIGHTLEARN - JAVASCRIPT
   Quality Education Website
========================================================= */


/* =========================================================
   QUIZ DATA
========================================================= */

const quizData = {

    cs: {
        name: "Computer Science",
        questions: [
            {
                q: "What does CPU stand for?",
                options: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Utility",
                    "Computer Processing User"
                ],
                answer: 0
            },
            {
                q: "Which language is used to structure web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "Python",
                    "SQL"
                ],
                answer: 0
            },
            {
                q: "Which technology is mainly used to style web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "Java",
                    "SQL"
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
                    "Read Access Machine",
                    "Rapid Application Memory",
                    "Random Application Module"
                ],
                answer: 0
            },
            {
                q: "Which device is mainly used to enter text into a computer?",
                options: [
                    "Monitor",
                    "Keyboard",
                    "Speaker",
                    "Printer"
                ],
                answer: 1
            },
            {
                q: "Which device displays visual output from a computer?",
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
                    "Universal Read Link",
                    "User Resource Link",
                    "Uniform Read Location"
                ],
                answer: 0
            },
            {
                q: "Which one is an operating system?",
                options: [
                    "Windows",
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                answer: 0
            },
            {
                q: "Which device is commonly used for permanent data storage?",
                options: [
                    "RAM",
                    "Cache",
                    "Hard Disk",
                    "Register"
                ],
                answer: 2
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
                    "<!--",
                    "**"
                ],
                answer: 0
            },
            {
                q: "Which one is a programming language?",
                options: [
                    "Python",
                    "HTML",
                    "HTTP",
                    "URL"
                ],
                answer: 0
            }
        ]
    },


    math: {
        name: "Mathematics",
        questions: [
            {
                q: "What is 5 + 7?",
                options: ["10", "11", "12", "13"],
                answer: 2
            },
            {
                q: "What is 10 × 5?",
                options: ["40", "50", "60", "55"],
                answer: 1
            },
            {
                q: "What is 100 ÷ 10?",
                options: ["5", "10", "15", "20"],
                answer: 1
            },
            {
                q: "What is 6²?",
                options: ["12", "18", "30", "36"],
                answer: 3
            },
            {
                q: "What is √81?",
                options: ["7", "8", "9", "10"],
                answer: 2
            },
            {
                q: "What is 15 − 8?",
                options: ["5", "6", "7", "8"],
                answer: 2
            },
            {
                q: "What is 25% of 100?",
                options: ["15", "20", "25", "30"],
                answer: 2
            },
            {
                q: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                answer: 1
            },
            {
                q: "What is 2³?",
                options: ["6", "8", "9", "12"],
                answer: 1
            },
            {
                q: "What is 9 × 9?",
                options: ["72", "81", "90", "99"],
                answer: 1
            },
            {
                q: "What is the perimeter of a square with side 5 cm?",
                options: ["10 cm", "15 cm", "20 cm", "25 cm"],
                answer: 2
            },
            {
                q: "What is 1/2 in decimal form?",
                options: ["0.2", "0.25", "0.5", "1.5"],
                answer: 2
            },
            {
                q: "What is the next number: 2, 4, 6, 8, ___?",
                options: ["9", "10", "11", "12"],
                answer: 1
            },
            {
                q: "What is a right angle?",
                options: ["45°", "60°", "90°", "180°"],
                answer: 2
            },
            {
                q: "What is 20 + 30 + 10?",
                options: ["50", "60", "70", "80"],
                answer: 1
            }
        ]
    },


    science: {
        name: "Science",
        questions: [
            {
                q: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                answer: 1
            },
            {
                q: "Which gas do humans need for breathing?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                answer: 0
            },
            {
                q: "What is the main source of energy for Earth?",
                options: ["Moon", "Sun", "Wind", "Water"],
                answer: 1
            },
            {
                q: "What is H₂O commonly known as?",
                options: ["Salt", "Water", "Oxygen", "Hydrogen"],
                answer: 1
            },
            {
                q: "Which organ pumps blood through the body?",
                options: ["Lungs", "Brain", "Heart", "Kidney"],
                answer: 2
            },
            {
                q: "Which part of a plant absorbs water from the soil?",
                options: ["Leaf", "Flower", "Root", "Stem"],
                answer: 2
            },
            {
                q: "Which gas is used by plants during photosynthesis?",
                options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
                answer: 1
            },
            {
                q: "What force pulls objects toward Earth?",
                options: ["Magnetism", "Friction", "Gravity", "Electricity"],
                answer: 2
            },
            {
                q: "Which is the largest planet in our solar system?",
                options: ["Earth", "Mars", "Jupiter", "Venus"],
                answer: 2
            },
            {
                q: "Which state of matter has a fixed shape?",
                options: ["Liquid", "Gas", "Solid", "Plasma"],
                answer: 2
            },
            {
                q: "Which organ is mainly used for breathing?",
                options: ["Heart", "Lungs", "Stomach", "Brain"],
                answer: 1
            },
            {
                q: "What is Earth's natural satellite?",
                options: ["Sun", "Mars", "Moon", "Venus"],
                answer: 2
            },
            {
                q: "Which vitamin is produced in the body with the help of sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                answer: 3
            },
            {
                q: "Which material is attracted by a magnet?",
                options: ["Wood", "Plastic", "Iron", "Glass"],
                answer: 2
            },
            {
                q: "What is the process by which green plants make their food?",
                options: [
                    "Respiration",
                    "Photosynthesis",
                    "Digestion",
                    "Evaporation"
                ],
                answer: 1
            }
        ]
    },


    communication: {
        name: "Communication",
        questions: [
            {
                q: "What is communication?",
                options: [
                    "Exchange of information",
                    "Only writing",
                    "Only speaking",
                    "Reading a book"
                ],
                answer: 0
            },
            {
                q: "Which is an example of verbal communication?",
                options: [
                    "Speaking",
                    "Facial expression",
                    "Posture",
                    "Eye contact"
                ],
                answer: 0
            },
            {
                q: "Which is an example of non-verbal communication?",
                options: [
                    "Speaking",
                    "Writing",
                    "Facial expression",
                    "Email"
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
                    "Distraction"
                ],
                answer: 1
            },
            {
                q: "A good message should be:",
                options: [
                    "Confusing",
                    "Very unclear",
                    "Clear",
                    "Incomplete"
                ],
                answer: 2
            },
            {
                q: "Which is an example of written communication?",
                options: [
                    "Email",
                    "Hand gesture",
                    "Eye contact",
                    "Facial expression"
                ],
                answer: 0
            },
            {
                q: "What does feedback help us understand?",
                options: [
                    "Whether the message was understood",
                    "The weather",
                    "The time",
                    "The location"
                ],
                answer: 0
            },
            {
                q: "Which quality supports good communication?",
                options: [
                    "Disrespect",
                    "Anger",
                    "Respect",
                    "Confusion"
                ],
                answer: 2
            },
            {
                q: "Body language is a form of:",
                options: [
                    "Non-verbal communication",
                    "Written communication",
                    "Programming",
                    "Mathematics"
                ],
                answer: 0
            },
            {
                q: "Which is useful during a presentation?",
                options: [
                    "Avoiding everyone",
                    "Eye contact",
                    "Speaking too quietly",
                    "Ignoring the audience"
                ],
                answer: 1
            },
            {
                q: "What should you do if you do not understand a message?",
                options: [
                    "Ignore it",
                    "Guess the meaning",
                    "Ask for clarification",
                    "Leave immediately"
                ],
                answer: 2
            },
            {
                q: "Which is suitable for sending an urgent message?",
                options: [
                    "Direct speaking",
                    "Waiting silently",
                    "Ignoring the person",
                    "Changing the topic"
                ],
                answer: 0
            },
            {
                q: "Which is an important part of good communication?",
                options: [
                    "Listening",
                    "Interrupting",
                    "Ignoring",
                    "Arguing"
                ],
                answer: 0
            },
            {
                q: "What can improve communication confidence?",
                options: [
                    "Clear expression of ideas",
                    "Avoiding communication",
                    "Speaking without understanding",
                    "Ignoring feedback"
                ],
                answer: 0
            }
        ]
    }

};


/* =========================================================
   LANGUAGE TRANSLATIONS
========================================================= */

const translations = {

    en: {
        heroSubtitle: "Learning made simple, accessible and engaging.",
        heroDescription:
            "BrightLearn is a student-friendly digital learning platform that provides useful resources, courses, quizzes and progress tracking to support quality education.",
        explore: "Explore Courses",
        learnMore: "Learn More"
    },

    gu: {
        heroSubtitle: "શિક્ષણને સરળ, સુલભ અને રસપ્રદ બનાવ્યું છે.",
        heroDescription:
            "BrightLearn એક વિદ્યાર્થી-મૈત્રીપૂર્ણ ડિજિટલ લર્નિંગ પ્લેટફોર્મ છે, જે ગુણવત્તાયુક્ત શિક્ષણ માટે સંસાધનો, અભ્યાસક્રમો, ક્વિઝ અને પ્રગતિ ટ્રેકિંગ આપે છે.",
        explore: "કોર્સ જુઓ",
        learnMore: "વધુ જાણો"
    },

    hi: {
        heroSubtitle: "सीखना सरल, सुलभ और रोचक बनाया गया है।",
        heroDescription:
            "BrightLearn एक विद्यार्थी-अनुकूल डिजिटल लर्निंग प्लेटफॉर्म है जो गुणवत्तापूर्ण शिक्षा के लिए संसाधन, पाठ्यक्रम, क्विज़ और प्रगति ट्रैकिंग प्रदान करता है।",
        explore: "कोर्स देखें",
        learnMore: "और जानें"
    },

    mr: {
        heroSubtitle: "शिकणे सोपे, सुलभ आणि मनोरंजक बनवले आहे.",
        heroDescription:
            "BrightLearn हे विद्यार्थ्यांसाठी अनुकूल डिजिटल शिक्षण प्लॅटफॉर्म आहे, जे गुणवत्तापूर्ण शिक्षणासाठी संसाधने, अभ्यासक्रम, प्रश्नमंजुषा आणि प्रगती ट्रॅकिंग देते.",
        explore: "कोर्स पहा",
        learnMore: "अधिक जाणून घ्या"
    },

    bn: {
        heroSubtitle: "শেখাকে সহজ, সহজলভ্য এবং আকর্ষণীয় করা হয়েছে।",
        heroDescription:
            "BrightLearn একটি শিক্ষার্থী-বান্ধব ডিজিটাল লার্নিং প্ল্যাটফর্ম, যা মানসম্মত শিক্ষার জন্য রিসোর্স, কোর্স, কুইজ এবং অগ্রগতি ট্র্যাকিং প্রদান করে।",
        explore: "কোর্স দেখুন",
        learnMore: "আরও জানুন"
    },

    ta: {
        heroSubtitle: "கற்றலை எளிமையாகவும், அணுகக்கூடியதாகவும், சுவாரஸ்யமாகவும் மாற்றுகிறது.",
        heroDescription:
            "BrightLearn என்பது மாணவர்களுக்கு ஏற்ற டிஜிட்டல் கற்றல் தளமாகும். இது தரமான கல்விக்கான வளங்கள், பாடங்கள், வினாடி வினாக்கள் மற்றும் முன்னேற்ற கண்காணிப்பை வழங்குகிறது.",
        explore: "பாடங்களை பார்க்க",
        learnMore: "மேலும் அறிக"
    }

};


/* =========================================================
   PROGRESS STORAGE
========================================================= */

const STORAGE_KEY = "brightLearnQuizProgress";

let progressData = loadProgress();


function loadProgress() {

    const defaultData = {
        cs: {
            completed: false,
            score: 0
        },
        math: {
            completed: false,
            score: 0
        },
        science: {
            completed: false,
            score: 0
        },
        communication: {
            completed: false,
            score: 0
        }
    };

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return defaultData;
        }

        const parsed = JSON.parse(saved);

        return {
            cs: {
                completed: Boolean(parsed.cs?.completed),
                score: Number(parsed.cs?.score) || 0
            },

            math: {
                completed: Boolean(parsed.math?.completed),
                score: Number(parsed.math?.score) || 0
            },

            science: {
                completed: Boolean(parsed.science?.completed),
                score: Number(parsed.science?.score) || 0
            },

            communication: {
                completed: Boolean(parsed.communication?.completed),
                score: Number(parsed.communication?.score) || 0
            }
        };

    } catch (error) {

        console.error("Progress loading error:", error);

        return defaultData;
    }
}


function saveProgress() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(progressData)
        );

    } catch (error) {

        console.error("Progress saving error:", error);

    }
}


/* =========================================================
   CREATE QUIZZES
========================================================= */

function createAllQuizzes() {

    Object.keys(quizData).forEach(function(subject) {

        const container = document.getElementById(
            `questions-${subject}`
        );

        if (!container) {
            return;
        }

        container.innerHTML = "";

        quizData[subject].questions.forEach(
            function(question, index) {

                const questionBox =
                    document.createElement("div");

                questionBox.className = "quiz-question";

                let optionsHTML = "";

                question.options.forEach(
                    function(option, optionIndex) {

                        optionsHTML += `
                            <label class="quiz-option">
                                <input
                                    type="radio"
                                    name="${subject}-q${index}"
                                    value="${optionIndex}"
                                >
                                <span>${escapeHTML(option)}</span>
                            </label>
                        `;

                    }
                );

                questionBox.innerHTML = `
                    <h4>
                        ${index + 1}. ${escapeHTML(question.q)}
                    </h4>

                    <div class="quiz-options">
                        ${optionsHTML}
                    </div>
                `;

                container.appendChild(questionBox);

            }
        );

    });

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================================================
   SHOW SELECTED QUIZ
========================================================= */

function showSelectedQuiz(subject) {

    const emptyMessage =
        document.getElementById("quiz-empty");

    const allQuizzes =
        document.querySelectorAll(".quiz-subject");

    const result =
        document.getElementById("quiz-result");

    allQuizzes.forEach(function(quiz) {

        quiz.classList.remove("active");

    });

    result.classList.remove("show");
    result.textContent = "";

    if (!subject) {

        emptyMessage.style.display = "block";

        return;
    }

    emptyMessage.style.display = "none";

    const selectedQuiz =
        document.getElementById(`quiz-${subject}`);

    if (selectedQuiz) {

        selectedQuiz.classList.add("active");

    }

}


/* =========================================================
   START COURSE
========================================================= */

function startCourse(subject) {

    const selector =
        document.getElementById("quiz-subject");

    if (!selector) {
        return;
    }

    selector.value = subject;

    showSelectedQuiz(subject);

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   SUBMIT QUIZ
========================================================= */

function submitQuiz(event, subject) {

    event.preventDefault();

    const questions =
        quizData[subject].questions;

    let score = 0;

    let unanswered = 0;

    questions.forEach(function(question, index) {

        const selected =
            document.querySelector(
                `input[name="${subject}-q${index}"]:checked`
            );

        if (!selected) {

            unanswered++;

            return;
        }

        const selectedAnswer =
            Number(selected.value);

        if (selectedAnswer === question.answer) {

            score++;

        }

    });


    /* Do not submit if questions are unanswered */

    if (unanswered > 0) {

        const result =
            document.getElementById("quiz-result");

        result.textContent =
            `Please answer all ${questions.length} questions before submitting. ${unanswered} question(s) remaining.`;

        result.classList.add("show");

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }


    /* Save progress */

    progressData[subject].completed = true;

    progressData[subject].score = score;

    saveProgress();


    /* Show result */

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    const result =
        document.getElementById("quiz-result");

    result.textContent =
        `${quizData[subject].name}: You scored ${score}/${questions.length} (${percentage}%). Quiz completed successfully!`;

    result.classList.add("show");


    /* Update dashboard */

    updateDashboard();


    /* Update selected subject progress */

    updateCourseProgress(subject);


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   UPDATE DASHBOARD
========================================================= */

function updateDashboard() {

    const subjects = [
        "cs",
        "math",
        "science",
        "communication"
    ];


    let completedCount = 0;


    subjects.forEach(function(subject) {

        if (progressData[subject].completed) {

            completedCount++;

        }

    });


    /* EXACT calculation:
       4 subjects = 100%
       1 subject = 25%
       2 subjects = 50%
       3 subjects = 75%
       0 subjects = 0%
    */

    const percentage =
        Math.round(
            (completedCount / subjects.length) * 100
        );


    /* Completed quizzes */

    const completedElement =
        document.getElementById("completed-count");

    if (completedElement) {

        completedElement.textContent =
            completedCount;

    }


    /* Overall percentage */

    const percentageElement =
        document.getElementById("progress-percent");

    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    /* Dashboard progress percentage */

    const dashboardValue =
        document.getElementById(
            "dashboard-progress-value"
        );

    if (dashboardValue) {

        dashboardValue.textContent =
            `${percentage}%`;

    }


    /* Progress bar */

    const progressFill =
        document.getElementById("progress-fill");

    if (progressFill) {

        progressFill.style.width =
            `${percentage}%`;

    }


    /* Progress text */

    const progressText =
        document.getElementById("progress-text");

    if (progressText) {

        progressText.textContent =
            `${completedCount} of 4 subjects completed`;

    }


    /* Achievement */

    const achievement =
        document.getElementById("achievement-text");

    if (achievement) {

        if (completedCount === 0) {

            achievement.textContent =
                "Start your learning journey!";

        } else if (completedCount === 1) {

            achievement.textContent =
                "Great start! Keep learning.";

        } else if (completedCount === 2) {

            achievement.textContent =
                "Good progress! Keep going.";

        } else if (completedCount === 3) {

            achievement.textContent =
                "Almost there! One more subject.";

        } else {

            achievement.textContent =
                "Excellent! All subjects completed! 🎉";

        }

    }


    /* Update every subject */

    subjects.forEach(function(subject) {

        updateCourseProgress(subject);

        updateSubjectStatus(subject);

    });

}


/* =========================================================
   UPDATE COURSE PROGRESS
========================================================= */

function updateCourseProgress(subject) {

    const completed =
        progressData[subject].completed;

    const percentage =
        completed ? 100 : 0;


    const percentageElement =
        document.getElementById(
            `course-progress-${subject}`
        );

    const fillElement =
        document.getElementById(
            `course-fill-${subject}`
        );


    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    if (fillElement) {

        fillElement.style.width =
            `${percentage}%`;

    }

}


/* =========================================================
   UPDATE SUBJECT STATUS
========================================================= */

function updateSubjectStatus(subject) {

    const statusElement =
        document.getElementById(
            `status-${subject}`
        );

    const scoreElement =
        document.getElementById(
            `score-${subject}`
        );


    if (!statusElement || !scoreElement) {
        return;
    }


    if (progressData[subject].completed) {

        statusElement.textContent =
            "Completed ✓";

        const score =
            progressData[subject].score;

        const total =
            quizData[subject].questions.length;

        const percentage =
            Math.round(
                (score / total) * 100
            );

        scoreElement.textContent =
            `Score: ${score}/${total} (${percentage}%)`;

    } else {

        statusElement.textContent =
            "Not Completed";

        scoreElement.textContent =
            "Quiz not attempted";

    }

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const nav =
        document.getElementById("nav-links");

    if (nav) {

        nav.classList.toggle("active");

    }

}


function closeMenu() {

    const nav =
        document.getElementById("nav-links");

    if (nav) {

        nav.classList.remove("active");

    }

}


/* =========================================================
   LOGIN
========================================================= */

function setupLogin() {

    const form =
        document.getElementById("login-form");

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "login-name"
                ).value.trim();

            const result =
                document.getElementById(
                    "login-result"
                );

            if (name) {

                result.textContent =
                    `Welcome, ${name}! You have successfully logged in to BrightLearn.`;

                form.reset();

            }

        }
    );

}


/* =========================================================
   FEEDBACK
========================================================= */

function setupFeedback() {

    const form =
        document.getElementById(
            "feedback-form"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const result =
                document.getElementById(
                    "feedback-result"
                );

            result.textContent =
                "Thank you for your feedback! Your response has been received.";

            form.reset();

        }
    );

}


/* =========================================================
   LANGUAGE CHANGE
========================================================= */

function changeLanguage(language) {

    const selected =
        translations[language];

    if (!selected) {
        return;
    }


    const heroSubtitle =
        document.getElementById(
            "hero-subtitle"
        );

    const heroDescription =
        document.getElementById(
            "hero-description"
        );

    const exploreButton =
        document.getElementById(
            "explore-btn"
        );

    const learnMoreButton =
        document.getElementById(
            "learn-more-btn"
        );


    if (heroSubtitle) {

        heroSubtitle.textContent =
            selected.heroSubtitle;

    }


    if (heroDescription) {

        heroDescription.textContent =
            selected.heroDescription;

    }


    if (exploreButton) {

        exploreButton.textContent =
            selected.explore;

    }


    if (learnMoreButton) {

        learnMoreButton.textContent =
            selected.learnMore;

    }


    localStorage.setItem(
        "brightLearnLanguage",
        language
    );

}


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "brightLearnLanguage"
        );

    const selector =
        document.getElementById(
            "language-selector"
        );

    if (
        savedLanguage &&
        translations[savedLanguage] &&
        selector
    ) {

        selector.value =
            savedLanguage;

        changeLanguage(
            savedLanguage
        );

    }

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Create all 60 quiz questions */

        createAllQuizzes();


        /* Initially show no quiz */

        showSelectedQuiz("");


        /* Load saved dashboard progress */

        updateDashboard();


        /* Setup login */

        setupLogin();


        /* Setup feedback */

        setupFeedback();


        /* Load language */

        loadSavedLanguage();

    }
);