//----------------------------- GLOBAL VARIABLES -----------------------------//

var peopleArray = [];
var currentIndex = 0;
var counter = 0;
var INTERVAL_TIME = 10000;
var interval = setInterval(next, INTERVAL_TIME);

//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    getData();
    getAvatars();
    buildPoints();
    updatePerson(peopleArray[currentIndex]);
    updatePoints(currentIndex);
    $('#next').on('click', next);
    $('#previous').on('click', previous);
});

//-------------------------------- FUNCTIONS ---------------------------------//

function getData(){
    $.ajax({
        type: 'GET',
        url: '/data',
        async: false,
        success: function(data){
            peopleArray = data.sigmanauts;
        }
    })
}

function getAvatars(){
    for (var i = 0; i < peopleArray.length; i++) {
        $.ajax({
            type: 'GET',
            async: false,
            url: 'https://api.github.com/users/' + peopleArray[i].git_username,
            success: function(data){
                peopleArray[i].avatar = data.avatar_url;
            },
            error: function(){
                peopleArray[i].avatar = 'http://lorempixel.com/388/388/';
            }
        });
    }
}

function buildPoints(){
    for (var i = 0; i < peopleArray.length; i++) {
        $('#indexPoints').append('<div class="circle" id="index' + i + '"></div>');
    }
}

function updatePerson(person){
    $('#peopleContainer').fadeOut(function(){
        $('#personName').text(person.name);
        $('#githubUsername').html(
            'GitHub: <a href="http://github.com/' + person.git_username + '">' + person.git_username + '</a>'
        )
        $('#avatar').attr('src', person.avatar);
        $('#shoutout').html('"' + person.shoutout + '"');
        $('#peopleContainer').fadeIn();
    });
}

function next(){
    currentIndex++;
    if (currentIndex === peopleArray.length) {
        currentIndex = 0;
    }
    updatePerson(peopleArray[currentIndex]);
    updatePoints(currentIndex);
    clearInterval(interval);
    interval = setInterval(next, INTERVAL_TIME);
}

function previous(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = peopleArray.length - 1;
    }
    updatePerson(peopleArray[currentIndex]);
    updatePoints(currentIndex);
    clearInterval(interval);
    interval = setInterval(next, INTERVAL_TIME);
}

function updatePoints(index){
    $('.circle').css('background', 'black');
    $('#index' + index).css('background', 'red');
}
