document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("section");

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove the 'active' class from all sections
            sections.forEach((section) => section.classList.remove("active"));

            // Add the 'active' class to the clicked section
            sections[index].classList.add("active");
            
        });
    });
});
function hideContent() {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });
}
