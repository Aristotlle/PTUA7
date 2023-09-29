const carousel = document.querySelector(".carousel");
const imgsScroll = document.querySelector(".imgs");

const imgsDrag = function (e) {
    imgsScroll.scrollLeft = e.pageX;
}

const dragging = function (e) {
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            const dropdownContent = dropdown.querySelector(".dropdown-content");
            dropdownContent.style.display = "none";
        }
    });
});
