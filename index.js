function showInfo() {
    var mainPage = document.getElementById("mainPage");
    var infoProf = document.getElementById("infoProf");
    var showBtn = document.getElementById("showBtn");

    if(mainPage.style.display === "none"){
        mainPage.style.display = "inline";
        infoProf.style.display = "none";
        showBtn.innerHTML = "<b>Find out me, Now!</b>";
    }
    else{
        mainPage.style.display = "none";
        infoProf.style.display = "inline";
        showBtn.innerHTML = "<b>Hide my info</b>";
        window.location = "index.html#profile";
    }
}