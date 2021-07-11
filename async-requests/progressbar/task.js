const progress = document.getElementById("progress");
const form = document.getElementById("form");


function sendFile(e) {
  e.preventDefault();
  let request = new XMLHttpRequest();
  
  let formData = new FormData(form);
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  request.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total
  };
  request.send(formData);
}


form.addEventListener("submit", sendFile);