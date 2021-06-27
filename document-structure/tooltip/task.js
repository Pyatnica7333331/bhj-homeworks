const needTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

function showTooltip(event) {
    event.preventDefault();
    if(event.target.nextElementSibling && event.target.nextElementSibling.classList.contains("tooltip_active")){
      event.target.nextElementSibling.classList.remove("tooltip_active");
      return;
    }
    const allTooltips = Array.from(document.querySelectorAll(".tooltip"));
    allTooltips.forEach((item) => item.remove());
    let tooltipText = event.target.title;
    let placeOfTip = event.target.getBoundingClientRect();
    event.target.insertAdjacentHTML("afterEnd",
      `<div class="tooltip tooltip_active" style="left: ${placeOfTip.x + placeOfTip.width}px; top: ${placeOfTip.y}px; position: absolute" data-position="right">
        ${tooltipText}
      </div>`
    );
};

needTooltip.forEach((item) => item.addEventListener("click", showTooltip));