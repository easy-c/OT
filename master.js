// // Search Bar Page
//     let searchBar = document.querySelector(".search-bar");
//     let searchBarFooter = document.querySelector(".search-bar-footer");
//     let searchPage = document.querySelector(".search-page");
//     let cancleBtn = document.querySelector("#cancle-btn");

//     searchBar.onclick = function () {
//         searchPage.style.display = "flex"
//     }
//     searchBarFooter.onclick = function () {
//         searchPage.style.display = "flex"
//     }
//     cancleBtn.onclick = function () {
//         searchPage.style.display = "none"
//     }


// // Back Btn From Project Info 
//     let back = document.querySelector(".back");

//     back.onclick = function () {
//         console.log("Back button clicked");
//         history.back();
//     }


// Search Bar Page
const searchPage = document.querySelector(".search-page");
const cancleBtn = document.querySelector("#cancle-btn");

document.addEventListener("click", function (event) {
if (event.target.matches(".search-bar, .search-bar-footer")) {
    searchPage.style.display = "flex";
} else if (event.target === cancleBtn) {
    searchPage.style.display = "none";
}
});

// Back Btn From Project Info
const back = document.querySelector(".back");

back.addEventListener("click", function () {
history.back();
});

    


