document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");

    let progress = 0;

    increaseButton.addEventListener("click", function() {
        if (progress < 100) {
            progress += 10; // Increase progress by 10%
            progressBar.style.width = progress + "%";
        } else{
            alert("Progress is complete!");
        }
    });

    resetButton.addEventListener("click", function() {
        progress = 0;
        progressBar.style.width = progress + "%";
    });
});