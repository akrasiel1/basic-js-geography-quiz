// Creating array with all the correct answers
const correctAnswers = ['B', 'C', 'B', 'A', 'C'];
// Selecting form for manuipulation
const form = document.querySelector('.quiz-form');
// Selecting result message
const result = document.querySelector('.result');
// Form submission and app functionality
form.addEventListener('submit', e => {
    e.preventDefault();

    // Setting initial score to zero
    let score = 0;
    // Storing user's answers into array
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    // Checking each user's answers against correct answers
    userAnswers.forEach((answer, index) => {
        // Establishing condition: if user's answer is correct, add points to initial score
        if(answer === correctAnswers[index]) {
            score += 20;
        };
    });

    //Showing result after submission by removing display:none class property
    result.classList.remove('d-none');
    // Smooth scrolling to result message
    scrollTo({top:0, behavior: 'smooth'});
    // Result percentage animation
    // Creating an output to be compared with score
    let output = 0;
    // Creating timer
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            //if output value matches score's value, stop counting
            clearInterval(timer);
        }
        else {
            //otherwise keep adding one until output equals score value
            output++;
        }
    }, 15);
});