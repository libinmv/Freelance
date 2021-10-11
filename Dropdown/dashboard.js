/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function profile() {
    // document.getElementById("profile").classList.toggle("show");
    $('.profiledrop').toggle();
}
function apps() {
    $('.appsdrop').toggle();
}
function settings() {
    $('.settingsdrop').toggle();
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".dropdown3");
    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.profiledrop').hide();
    }
    container = $(".dropdown2");
    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.appsdrop').hide();
    }
    container = $(".dropdown1");
    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.settingsdrop').hide();
    }

})
$(document).ready(function () {
    $('.profiledrop').hide();
    $('.appsdrop').hide();
    $('.settingsdrop').hide();
})