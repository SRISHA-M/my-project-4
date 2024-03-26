
var arr = ["caro1.jpg", "caro2.jpg", "caro3.jpg", "caro4.jpg", "caro5.jpg", "caro6.jpg"]
var z = 0
document.getElementById('carousel').src = arr[z]
function right() {
    ++z
    if (z > arr.length - 1) {
        z = 0
    }
    document.getElementById('carousel').src = arr[z]
}
setInterval(right, 2000);
var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: 30,
    height: 150,
});

splide.mount();
AOS.init();

function togglePopup() {
    $(".content").toggle();
}
$(document).ready(function () {
    $(".button1").click(function () {
        alert("your sign in successfully!");
    })
})
$(document).ready(function () {
    $(".button2").click(function () {
        alert("your sign up successfully!");
    })
})

    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "32Ru9hVeOf5IGkKKA",
        });
    })();
window.onload = function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_uidcn5j', 'template_juqjhho', this)
            .then(() => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error);
            });
    });
}

function book() {
    $("#fof").toggle();
}

function manage() {
    $("#manage").toggle();
}

function check() {
    $("#check").toggle();
}
function flights() {
    $("#flights").toggle();
}
function manageing() {
    $("#manageing").toggle();
}
function checkining() {
    $("#checkining").toggle();

}
function flightsstatus() {
    $("#flightsstatus").toggle()

}
function table() {
    $("#table").toggle()
}
function table1() {
    $("#table1").toggle()
}
function search() {
    $("#search").toggle()
}
