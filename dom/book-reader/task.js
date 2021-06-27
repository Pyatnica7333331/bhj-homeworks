const bookReader = document.getElementById("book");
const fontSize = document.querySelectorAll(".font-size");

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener("click", function(event) {
    event.preventDefault();

    for (let index = 0; index < fontSize.length; index++) {
      fontSize[index].classList.remove("font-size_active");
      if (bookReader.classList.contains("book_fs-small")) {
        bookReader.classList.remove("book_fs-small")
      };
      if (bookReader.classList.contains("book_fs-big")) {
        bookReader.classList.remove("book_fs-big")
      }; 
    };

    fontSize[i].classList.add("font-size_active");
    if (fontSize.item(0).classList.contains("font-size_active")) {
      bookReader.classList.add("book_fs-small")
    };
    if (fontSize.item(2).classList.contains("font-size_active")) {
      bookReader.classList.add("book_fs-big")
    };
  });
}