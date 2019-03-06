// Dette er Naturama projekt javascript //
/* dette er ægget */
var myPic,
    Pics = ["../img-naturama/newegg1.png", "../img-naturama/newegg2.png", "../img-naturama/newegg3.png", "../img-naturama/newegg5.png", "../img-naturama/Naturama plakat version5.png"],
    picNumber = 0;
window.onload = function () {
    "use strict";
    myPic = document.getElementById("egg1");
    myPic.onclick = function changePic() {
    if (picNumber < 4) {
        picNumber++;
    } else {
        picNumber = 0;
    }
    myPic.src = Pics[picNumber];
}
};
/* æg slut */