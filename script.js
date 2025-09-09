// Part 2: JS Functions - Calculate Area
function calculateArea(length, width) {
    // Local variables
    let area = length * width;
    return area;
}

document.getElementById("calcBtn").addEventListener("click", () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid numbers!");
        return;
    }

    const area = calculateArea(length, width);
    document.getElementById("areaResult").textContent = `Area: ${area}`;
});

// Part 3: JS-Triggered Animation - Box
document.getElementById("animateBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    // Toggle animation
    box.style.animation = "moveRight 2s ease forwards";
    // Remove animation after completion to allow re-triggering
    setTimeout(() => {
        box.style.animation = "";
    }, 2000);
});

// Part 3: Modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
