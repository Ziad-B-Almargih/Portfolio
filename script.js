let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
}

goTopBtn.addEventListener('click', function() {
    console.log('ada');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
