/* =========================================================
   FOOTORA
   INTERACTIVE WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   WAIT FOR PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("FOOTORA website loaded successfully.");



    /* =====================================================
       FIND MY FIT
    ===================================================== */

    createFitButton();



    /* =====================================================
       CUSTOMIZATION BUTTONS
    ===================================================== */

    setupCustomization();



    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    setupSmoothNavigation();



    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    setupImageFallback();

});



/* =========================================================
   CREATE FIND MY FIT BUTTON
   ========================================================= */

function createFitButton() {

    const fitButtons = document.querySelectorAll(
        'a[href="#customize"], a[href="#fit"]'
    );


    fitButtons.forEach(function (button) {

        const text = button.innerText.toLowerCase();


        if (
            text.includes("fit") ||
            text.includes("journey") ||
            text.includes("perfect match")
        ) {

            button.addEventListener("click", function (event) {

                const fitSection = document.getElementById("fit");

                if (fitSection) {

                    event.preventDefault();

                    fitSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            });

        }

    });


    /*
       Add interactive questionnaire button
       to the Find My Fit section
    */

    const fitContent = document.querySelector(".fit-content");


    if (!fitContent) {
        return;
    }


    const existingButton = fitContent.querySelector(
        ".fit-start-button"
    );


    if (existingButton) {
        return;
    }


    const button = document.createElement("button");


    button.className = "primary-button fit-start-button";


    button.innerText =
        "Start My Fit Journey →";


    button.style.border = "none";

    button.style.cursor = "pointer";

    button.style.marginTop = "5px";


    fitContent.appendChild(button);


    button.addEventListener("click", function () {

        openFitQuiz();

    });

}



/* =========================================================
   FIT QUIZ
   ========================================================= */

function openFitQuiz() {


    let currentQuestion = 0;


    const answers = {

        age: "",

        priority: "",

        purpose: "",

        style: ""

    };


    const questions = [

        {

            key: "age",

            title:
                "Who are you shopping for?",

            subtitle:
                "Let's start with the journey.",

            options: [

                "👶 First Steps",

                "🧒 Little Explorer",

                "🧑 Teen",

                "👩 Adult",

                "👴 Senior"

            ]

        },


        {

            key: "priority",

            title:
                "What matters most?",

            subtitle:
                "Choose what you value most in your footwear.",

            options: [

                "👣 Perfect Fit",

                "☁️ Maximum Comfort",

                "🏃 Performance",

                "✨ Style",

                "❤️ Everyday Support"

            ]

        },


        {

            key: "purpose",

            title:
                "Where will you wear them?",

            subtitle:
                "Tell us about your everyday journey.",

            options: [

                "👟 Everyday",

                "🏫 School",

                "🏃 Sports",

                "💼 Work",

                "✈️ Travel"

            ]

        },


        {

            key: "style",

            title:
                "What describes your style?",

            subtitle:
                "Because comfort can still look good.",

            options: [

                "🤍 Minimal",

                "🖤 Classic",

                "🌈 Colourful",

                "🔥 Trendy",

                "🌿 Simple & Natural"

            ]

        }

    ];



    /* =====================================================
       CREATE QUIZ OVERLAY
       ===================================================== */

    const overlay =
        document.createElement("div");


    overlay.className =
        "fit-quiz-overlay";


    overlay.innerHTML = `

        <div class="fit-quiz">

            <button
                class="quiz-close"
                aria-label="Close quiz">
                ×
            </button>


            <div class="quiz-progress">

                <div
                    class="quiz-progress-bar">
                </div>

            </div>


            <p class="quiz-step">
                STEP 1 OF 4
            </p>


            <h2 class="quiz-title">
            </h2>


            <p class="quiz-subtitle">
            </p>


            <div class="quiz-options">
            </div>


            <button
                class="quiz-next"
                disabled>

                Continue →

            </button>

        </div>

    `;


    document.body.appendChild(overlay);


    const style =
        document.createElement("style");


    style.innerHTML = `

        .fit-quiz-overlay {

            position: fixed;

            inset: 0;

            z-index: 100000;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(0,0,0,0.72);

            backdrop-filter:
                blur(10px);

            animation:
                quizFadeIn .3s ease;

        }


        .fit-quiz {

            position: relative;

            width: 100%;

            max-width: 650px;

            max-height: 90vh;

            overflow-y: auto;

            padding: 45px;

            border-radius: 30px;

            background: #f7f5ef;

            color: #171717;

            box-shadow:
                0 30px 100px
                rgba(0,0,0,0.3);

        }


        .quiz-close {

            position: absolute;

            top: 18px;

            right: 22px;

            width: 40px;

            height: 40px;

            border: none;

            border-radius: 50%;

            background: #e6e2d9;

            color: #171717;

            font-size: 24px;

            cursor: pointer;

        }


        .quiz-progress {

            width: 100%;

            height: 5px;

            margin-bottom: 30px;

            overflow: hidden;

            border-radius: 10px;

            background: #ddd8cd;

        }


        .quiz-progress-bar {

            width: 25%;

            height: 100%;

            background: #171717;

            transition:
                width .3s ease;

        }


        .quiz-step {

            margin-bottom: 10px;

            color: #888;

            font-size: 10px;

            font-weight: 900;

            letter-spacing: 2px;

        }


        .quiz-title {

            margin-bottom: 10px;

            font-size: 38px;

            line-height: 1.05;

            letter-spacing: -2px;

        }


        .quiz-subtitle {

            margin-bottom: 30px;

            color: #777;

            font-size: 15px;

        }


        .quiz-options {

            display: grid;

            grid-template-columns:
                1fr 1fr;

            gap: 12px;

        }


        .quiz-option {

            min-height: 70px;

            padding: 15px;

            border: 1px solid #ddd8cf;

            border-radius: 18px;

            background: #fff;

            color: #333;

            text-align: left;

            font-size: 14px;

            font-weight: 700;

            cursor: pointer;

            transition: .25s ease;

        }


        .quiz-option:hover {

            transform:
                translateY(-2px);

            border-color: #171717;

        }


        .quiz-option.selected {

            background: #171717;

            border-color: #171717;

            color: #fff;

        }


        .quiz-next {

            width: 100%;

            margin-top: 20px;

            padding: 16px;

            border: none;

            border-radius: 50px;

            background: #171717;

            color: #fff;

            font-size: 13px;

            font-weight: 800;

            cursor: pointer;

            opacity: .4;

            transition: .3s ease;

        }


        .quiz-next:not(:disabled) {

            opacity: 1;

        }


        .quiz-next:not(:disabled):hover {

            transform:
                translateY(-2px);

        }


        .quiz-result {

            text-align: center;

        }


        .quiz-result-icon {

            font-size: 65px;

            margin-bottom: 15px;

        }


        .quiz-result h2 {

            margin-bottom: 15px;

            font-size: 42px;

            line-height: 1;

            letter-spacing: -2px;

        }


        .quiz-result p {

            margin-bottom: 25px;

            color: #777;

        }


        .quiz-result-card {

            padding: 25px;

            margin-bottom: 25px;

            border-radius: 20px;

            background: #e8e2d7;

        }


        .quiz-result-card strong {

            display: block;

            margin-bottom: 8px;

            font-size: 20px;

        }


        @keyframes quizFadeIn {

            from {

                opacity: 0;

            }

            to {

                opacity: 1;

            }

        }


        @media(max-width:600px) {

            .fit-quiz {

                padding: 30px 22px;

                border-radius: 24px;

            }


            .quiz-title {

                font-size: 31px;

            }


            .quiz-options {

                grid-template-columns:
                    1fr;

            }

        }

    `;


    document.head.appendChild(style);



    /* =====================================================
       QUIZ ELEMENTS
       ===================================================== */

    const title =
        overlay.querySelector(".quiz-title");


    const subtitle =
        overlay.querySelector(".quiz-subtitle");


    const optionsContainer =
        overlay.querySelector(".quiz-options");


    const nextButton =
        overlay.querySelector(".quiz-next");


    const stepText =
        overlay.querySelector(".quiz-step");


    const progressBar =
        overlay.querySelector(".quiz-progress-bar");


    const closeButton =
        overlay.querySelector(".quiz-close");



    /* =====================================================
       CLOSE QUIZ
       ===================================================== */

    function closeQuiz() {

        overlay.remove();

        style.remove();

        document.body.style.overflow = "";

    }


    closeButton.addEventListener(
        "click",
        closeQuiz
    );


    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === overlay
            ) {

                closeQuiz();

            }

        }
    );


    document.body.style.overflow =
        "hidden";



    /* =====================================================
       SHOW QUESTION
       ===================================================== */

    function showQuestion() {

        const question =
            questions[currentQuestion];


        title.innerText =
            question.title;


        subtitle.innerText =
            question.subtitle;


        stepText.innerText =
            `STEP ${currentQuestion + 1} OF ${questions.length}`;


        progressBar.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;


        optionsContainer.innerHTML =
            "";


        nextButton.disabled =
            true;


        question.options.forEach(
            function (option) {

                const optionButton =
                    document.createElement("button");


                optionButton.className =
                    "quiz-option";


                optionButton.innerText =
                    option;


                optionButton.addEventListener(
                    "click",
                    function () {

                        optionsContainer
                            .querySelectorAll(
                                ".quiz-option"
                            )
                            .forEach(
                                function (button) {

                                    button.classList
                                        .remove(
                                            "selected"
                                        );

                                }
                            );


                        optionButton.classList
                            .add("selected");


                        answers[
                            question.key
                        ] = option;


                        nextButton.disabled =
                            false;

                    }
                );


                optionsContainer.appendChild(
                    optionButton
                );

            }
        );

    }



    /* =====================================================
       NEXT QUESTION
       ===================================================== */

    nextButton.addEventListener(
        "click",
        function () {

            if (
                !answers[
                    questions[currentQuestion].key
                ]
            ) {

                return;

            }


            currentQuestion++;


            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            } else {

                showResult();

            }

        }
    );



    /* =====================================================
       RESULT
       ===================================================== */

    function showResult() {

        let recommendation =
            "Your Personalized Everyday Pair";


        let description =
            "A balanced combination of fit, comfort and style for your everyday journey.";


        const priority =
            answers.priority.toLowerCase();


        const purpose =
            answers.purpose.toLowerCase();


        const age =
            answers.age.toLowerCase();



        if (
            priority.includes("comfort")
        ) {

            recommendation =
                "FOOTORA Comfort Collection";

            description =
                "Designed around comfort-first preferences with a soft, supportive everyday experience.";

        }


        if (
            priority.includes("performance") ||
            purpose.includes("sports")
        ) {

            recommendation =
                "FOOTORA Active Collection";

            description =
                "Designed for movement, activity and an energetic lifestyle.";

        }


        if (
            priority.includes("style") ||
            answers.style.toLowerCase()
                .includes("trendy")
        ) {

            recommendation =
                "FOOTORA Signature Collection";

            description =
                "A personalized pair where individual style meets everyday comfort.";

        }


        if (
            age.includes("first steps")
        ) {

            recommendation =
                "FOOTORA First Steps";

            description =
                "A gentle, comfort-focused starting point for little journeys.";

        }


        if (
            age.includes("senior")
        ) {

            recommendation =
                "FOOTORA Comfort Care";

            description =
                "Designed around easy comfort and everyday confidence.";

        }


        overlay.querySelector(".fit-quiz")
            .innerHTML = `

            <div class="quiz-result">

                <div
                    class="quiz-result-icon">
                    👣
                </div>


                <p class="quiz-step">
                    YOUR FOOTORA MATCH
                </p>


                <h2>
                    Made Around You.
                </h2>


                <p>
                    Based on your answers,
                    we've found a great place
                    to start.
                </p>


                <div
                    class="quiz-result-card">

                    <strong>
                        ${recommendation}
                    </strong>

                    <span>
                        ${description}
                    </span>

                </div>


                <button
                    class="primary-button result-close">

                    Explore My Options →

                </button>

            </div>

        `;


        const resultButton =
            overlay.querySelector(
                ".result-close"
            );


        resultButton.addEventListener(
            "click",
            function () {

                closeQuiz();


                const customize =
                    document.getElementById(
                        "customize"
                    );


                if (customize) {

                    customize.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }



    /* =====================================================
       START
       ===================================================== */

    showQuestion();

}



/* =========================================================
   CUSTOMIZATION INTERACTION
   ========================================================= */

function setupCustomization() {

    const buttons =
        document.querySelectorAll(
            ".custom-options button"
        );


    if (!buttons.length) {
        return;
    }


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const originalText =
                        button.innerText;


                    button.innerText =
                        "✓ Selected";


                    button.style.background =
                        "#171717";


                    button.style.color =
                        "#ffffff";


                    button.style.borderColor =
                        "#171717";


                    setTimeout(
                        function () {

                            button.innerText =
                                originalText;

                        },
                        1300
                    );

                }
            );

        }
    );

}



/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function setupSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        }
    );

}



/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function setupImageFallback() {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    /*
                       If an image is missing,
                       create a professional
                       placeholder instead.
                    */

                    image.style.display =
                        "none";


                    const parent =
                        image.parentElement;


                    if (parent) {

                        parent.classList.add(
                            "image-missing"
                        );


                        if (
                            !parent.querySelector(
                                ".image-placeholder"
                            )
                        ) {

                            const placeholder =
                                document.createElement(
                                    "div"
                                );


                            placeholder.className =
                                "image-placeholder";


                            placeholder.innerHTML = `

                                <span>
                                    👟
                                </span>

                                <small>
                                    FOOTORA
                                </small>

                            `;


                            placeholder.style.cssText = `

                                position:absolute;

                                inset:0;

                                display:flex;

                                flex-direction:column;

                                align-items:center;

                                justify-content:center;

                                background:#e5dfd3;

                                color:#777;

                                gap:10px;

                            `;


                            parent.appendChild(
                                placeholder
                            );

                        }

                    }

                }
            );

        }
    );

}



/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           ESC closes the Find My Fit
           modal.
        */

        if (
            event.key === "Escape"
        ) {

            const overlay =
                document.querySelector(
                    ".fit-quiz-overlay"
                );


            if (overlay) {

                overlay.remove();

                document.body.style.overflow =
                    "";

            }

        }

    }
);
