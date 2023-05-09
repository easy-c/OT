let searchBar = document.querySelector(".search-bar");
let searchBarFooter = document.querySelector(".search-bar-footer");
let searchPage = document.querySelector(".search-page");
let cancleBtn = document.querySelector("#cancle-btn");

searchBar.onclick = function () {
    searchPage.style.display = "flex"
}
searchBarFooter.onclick = function () {
    searchPage.style.display = "flex"
}
cancleBtn.onclick = function () {
    searchPage.style.display = "none"
}

