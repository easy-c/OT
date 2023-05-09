let searchPage = document.querySelector(".search-page");
let searchBar = document.querySelector(".search-bar");
let cancleBtn = document.querySelector("#cancle-btn");

searchBar.onclick = function () {
    searchPage.style.display = "flex"
}
cancleBtn.onclick = function () {
    searchPage.style.display = "none"
}

