var theBg = document.getElementById('bg');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');
var fourth = document.querySelector('.fourth');

function scrollFunction() {
    if (document.getElementById('main').scrollTop < 50) {

        theBg.style.clipPath = 'none';
        document.getElementById('title').innerHTML = "Welcome";
        console.log('value- - main-' + document.getElementById('main').scrollTop);


    }
}

function scrinto(element) {
    var elmnt = document.getElementById(element);
    elmnt.scrollIntoView(true);

    document.getElementById('title').innerHTML = element;

    theBg.style.backgroundImage = "url('images/bgHome.jpg')";
    theBg.style.clipPath = "polygon(39% 0, 76% 47%, 42% 100%, 0 100%, 0 0)";
}

function fthP() {
    console.log(fourth.style.left);
    if (fourth.style.left == "") {
        fourth.style.left = "0"
        third.style.left = '0';
        second.style.left = '0';
        first.style.left = '0';
    } else {
        if (fourth.style.left != "97%") {
            fourth.style.left = '97%';

        } else {
            fourth.style.left = '0';
            if (third.style.left != '0') {
                third.style.left = '0';
                second.style.left = '0';
                first.style.left = '0';

            }

        }
    }
    console.log('after=> ', fourth.style.left);
}

function sP() {
    if (second.style.left != "97%") {
        second.style.left = '97%';

    } else {
        second.style.left = '0';

    }

}



function thP() {
    if (third.style.left == "") {
        third.style.left = '0';
        first.style.left = '0';
        second.style.left = '0';

    } else {
        if (third.style.left != "97%") {
            if (fourth.style.left == '0px') {

                fourth.style.left = '97%';
            } else {
                third.style.left = '97%';
            }
        } else {
            third.style.left = '0';
            first.style.left = '0';
            second.style.left = '0';

        }
    }

}

function fP() {

    if (first.style.left == "") {
        first.style.left = '0';
    } else {
        if (first.style.left != "97%") {
            if (second.style.left == '0px') {

                second.style.left = '97%';
                third.style.left = '97%';
                fourth.style.left = '97%';
            } else {
                first.style.left = '97%';
            }
        } else {
            first.style.left = '0';
        }
    }

}