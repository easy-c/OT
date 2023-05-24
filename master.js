document.addEventListener("click", function (event) {
    // Search Bar Page
    if (event.target.matches(".search-bar, .search-bar-footer")) {
    const searchPage = document.querySelector(".search-page");
    searchPage.style.display = "flex";
    } else if (event.target.matches("#cancel-btn")) {
    const searchPage = document.querySelector(".search-page");
    searchPage.style.display = "none";
    }

    // Back Btn From Project Info
    if (event.target.matches(".back")) {
    history.back();
    }

    // See More Of Projects
    if (event.target.matches("#seeMore")) {
    const hiddenItemList = document.querySelectorAll(".hiddenItem");
    hiddenItemList.forEach(function (hiddenItem) {
        if (hiddenItem.style.display === "none") {
        hiddenItem.style.display = "block";
        event.target.textContent = "SEE LESS";
        } else {
        hiddenItem.style.display = "none";
        event.target.textContent = "SEE MORE";
        }
    });
    }

});
