function toggleText(elementId) {
    const divElement = document.getElementById(elementId);
    if (divElement.style.display === "none") {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
}