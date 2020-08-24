$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        //console.log('¿El correo es valido? ', isValidEmail())
        console.log('¿El Twitter es valido? ', isValidTwitter())
    }

    var isValidEmail = function(){
        var email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

    var isValidTwitter = function(){
        var twitter = document.getElementById('twitter');
        return /^@(\w+)$/.test(twitter.value)
    }

});