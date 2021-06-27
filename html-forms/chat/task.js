
const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
const chatWindow = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messageRobot = [
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
    'Вы не купили не одного товара, что б так с нами разговаривать!',
    'Добрый день! До свидания!',
    'Мы нечего не будем вам продавать!',
    'Добрый день, мы еще проснулись. Позвоните через 10 лет.'
];

chatWidgetSideText.onclick = function () {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    setInterval(() => {
        const time = new Date();
        let index = Math.floor(Math.random() * messageRobot.length);
        chatWindow.innerHTML += `
        <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${messageRobot[index]}</div>
        </div>`
      }, 30000)
};

chatWidgetInput.onkeypress = function (e) {
    const messageCustomer = chatWidgetInput.value;
    if (e.which === 13 && messageCustomer) {
        const time = new Date();
        let index = Math.floor(Math.random() * messageRobot.length);
        chatWindow.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                <div class="message__text">${messageCustomer}</div>
            </div>
            <div class="message">
                    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                    <div class="message__text">${messageRobot[index]}</div>
            </div>`;
               
        chatWidgetInput.value = '';
        let messageArray = Array.from(document.querySelectorAll('.message'));
        messageArray[messageArray.length - 1].scrollIntoView();
    };   
};

