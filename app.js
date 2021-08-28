// Creating array with all the correct answers
const correctAnswers = ['B', 'C', 'B', 'A'];
// Selecting form for manuipulation
const form = document.querySelector('.quiz-form');
// Form submission and app functionality
form.addEventListener('submit', e => {
    e.preventDefault();

    // Setting initial score to zero
    let score = 0;
    // Storing user's answers into array
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // Checking each user's answers against correct answers
    userAnswers.forEach((answer, index) => {
        // Establishing condition: if user's answer is correct, add points to initial score
        if(answer === correctAnswers[index]) {
            score += 25;
        };
    });

    // Logging result to console
    console.log(score);
});