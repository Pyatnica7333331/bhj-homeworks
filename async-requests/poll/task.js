const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const createAnswers = ((answer) => {
    const template = document.createElement('button');
    template.classList = 'poll__answer';
    template.innerText = answer;

    return template.outerHTML;
});


let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
        addQuestion(JSON.parse(request.responseText));
    }
});
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();


function addQuestion(text) {
    let title = text.data.title;
    let answers = text.data.answers;
    pollTitle.innerText = title;
    
    answers.forEach(item => {
        pollAnswers.insertAdjacentHTML('afterbegin', createAnswers(item));
    });
    
    const pollAnswer = Array.from(pollAnswers.getElementsByClassName('poll__answer'));

    pollAnswer.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            alert('Спасибо, ваш голос засчитан');
        });
    })
};