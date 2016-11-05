var peopleArray = [],
    indexTracker = 0,
    timeOutTimer,
    intervalFadeTimer = 1e4;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(a) {
            peopleArray = a.zeta;
            init();
            updatePerson();
        }
    })
});


function init() {
    timeOutTimer = setInterval(intervalUpdate, intervalFadeTimer)
    createCarousel(peopleArray);
    updateIndexPoints();
    $("#next").on("click", nextSlide);
    $("#prev").on("click", prevSlide);
}

function resetInterval() {
    console.log("reset");
    clearInterval(timeOutTimer);
    timeOutTimer = setInterval(intervalUpdate, intervalFadeTimer);
}

function createCarousel(a) {
    $("#lecture").append("<div class='main'></div>");
    var b = $("#lecture").children().last();
    createNavButtons(b);
    createIndexPoints(a, b);
}

function nextSlide() {
    indexTracker++;
    indexTracker >= peopleArray.length && (indexTracker = 0);
    resetInterval();
    updateIndexPoints();
}
function prevSlide() {
    indexTracker--;
    0 > indexTracker && (indexTracker = peopleArray.length - 1);
    resetInterval();
    updateIndexPoints();
}

function createNavButtons(a) {
    a.append("<div id='prev' class='nav-button'>Prev</div>");
    a.append("<div id='next' class='nav-button'>Next</div>");
}
function createIndexPoints(a, b) {
    for (var c = 0; c < a.length; c++){
        console.log("In loop?");
        b.append("<div class='index-point' id='index" + c + "'></div>");
    }
}

function updateIndexPoints() {
    for (var a = 0; a < peopleArray.length; a++){
        $("#index" + a).removeClass("index-point-active");
        a == indexTracker && $("#index" + a).addClass("index-point-active");
    }
    updatePerson();
}

function updatePerson() {
    $(".person-name").fadeOut(function() {
        $(this).text(peopleArray[indexTracker].name);
        $(this).fadeIn();
    });

    $(".person-github").fadeOut(function() {
        $(this).text(peopleArray[indexTracker].github);
        $(this).fadeIn();
    });

    $(".person-shoutout").fadeOut(function() {
        $(this).text(peopleArray[indexTracker].shoutout);
        $(this).fadeIn();
    });
}

function intervalUpdate() {
    indexTracker++;
    updatePerson();
    updateIndexPoints();
}
