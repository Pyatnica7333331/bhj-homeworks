const items = document.getElementById("items");
const loader = document.getElementById("loader");

function addNewValute(code, value) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");

    newItem.innerHTML = `
      <div class="item__code">
        ${code}
      </div>
      <div class="item__value">
        ${value}
      </div>
      <div class="item__currency">
        руб.
      </div>`;

    return items.appendChild(newItem);
};


let request = new XMLHttpRequest();
request.addEventListener("load", onLoad);
request.open("GET", "https://netology-slow-rest.herokuapp.com");
request.send();

function onLoad() {
    if (request.readyState === 4 && request.status === 200) {
        currencyLoad(JSON.parse(request.responseText));
    } else if (request.readyState !== 4 && request.status !== 200) {
        console.log(`Ответ ${request.status}: ${request.statusText}`);
    }
}

function currencyLoad(data) {
    let currencyList = data.response.Valute;
    for (let i in currencyList) {
        items.appendChild(addNewValute(currencyList[i].CharCode, currencyList[i].Value));
    };
    loader.classList.remove("loader_active");
}