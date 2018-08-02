window.onload = function () {

    //tipped





    //Jquery load delay

    $("#name").hide(1).delay(200).show(1);
    $("#buttons").hide(1).delay(200).show(1);

    //Anime 

    anime({
        targets: "#D",
        translateY: [
            { value: -1200, duration: 500 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#A",
        translateY: [
            { value: -1200, duration: 600 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#K",
        translateY: [
            { value: -1200, duration: 700 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#O",
        translateY: [
            { value: -1200, duration: 800 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#T",
        translateY: [
            { value: -1200, duration: 900 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#A2",
        translateY: [
            { value: -1200, duration: 1000 },
            { value: 0, duration: 1000 },
        ],
    });
    anime({
        targets: "#buttons",
        translateY: [
            { value: 350, duration: 1300 },
            { value: 0, duration: 2300 },
        ],
    });
}

$(document).ready(function () {
    setTimeout(function () {
        Tipped.create('#button1', 'About me', { position: 'bottom', size: 'large' });
        Tipped.create('#button2', 'Portfolio', { position: 'bottom', size: 'large' });
        Tipped.create('#button3', 'Contact', { position: 'bottom', size: 'large' });
        Tipped.create('#button4', 'Github', { position: 'bottom', size: 'large' });

    }, 2000);

    $(".button").on("click", function () {
        anime({
            targets: ".button",
            translateY: 180,
            duration: 1800,
        });
        $("#name").fadeOut("slow", function () {
            // Animation complete.
        });
    });

});