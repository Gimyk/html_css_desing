function scrinto(element) {
    var elmnt = document.getElementById(element);
    elmnt.scrollIntoView(true);

    document.getElementById('title').innerHTML = element;
    var theBg = document.getElementById('bg')
        // theBg.style.backgroundImage = "url('images/bgHome.jpg')";
    theBg.style.clipPath = "polygon(39% 0, 76% 47%, 42% 100%, 0 100%, 0 0)";
}

// var options = {
//     bottom: '64px', // default: '32px'
//     right: 'unset', // default: '32px'
//     left: '32px', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#fff', // default: '#fff'
//     backgroundColor: '#fff', // default: '#fff'
//     buttonColorDark: '#100f2c', // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: false, // default: true,
//     label: '🌓' // default: ''
// }

// const darkmode = new Darkmode(options);
// darkmode.showWidget();



var file = document.getElementById('file');
var preview = document.getElementById('preview');

function toDataURL(src, callback) {
    var image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };

    image.src = src;
}




file.addEventListener('change', function() {
    preview.src = URL.createObjectURL(this.files[0]);
    toDataURL(preview.src, function(dataURL) {
        // do something with dataURL
        document.getElementById('result').innerHTML = dataURL;
    });
}, false);