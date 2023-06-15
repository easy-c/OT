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
        if(document.body.className === "both eng"){
            if (hiddenItem.style.display === "none") {
                hiddenItem.style.display = "block";
                event.target.textContent = "See Less";
                } else {
                hiddenItem.style.display = "none";
                event.target.textContent = "See More";
                }
        }
        if(document.body.className === "both ar"){
            if (hiddenItem.style.display === "none") {
                hiddenItem.style.display = "block";
                event.target.textContent = "شاهد أقل";
                } else {
                hiddenItem.style.display = "none";
                event.target.textContent = "شاهد أكثر";
                }
        }
        
    });
    }

});
