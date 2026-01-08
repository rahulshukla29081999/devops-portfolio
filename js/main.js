const toggleBtn = document.getElementById("themeToggle");

// page load hote hi theme set karo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// button click ka kaam
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });
}
