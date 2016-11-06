//----------------------------- GLOBAL VARIABLES -----------------------------//

var peopleArray = [];
var currentIndex = 0;
var counter = 0;

//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    getData();
    getAvatars();
    appendToDOM();
})

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
            url: 'https://api.github.comm/users/' + peopleArray[i].git_username,
            success: function(data){
                peopleArray[i].avatar = data.avatar_url;
            },
            error: function(){
                peopleArray[i].avatar = 'http://lorempixel.com/388/388/';
            }
        });
    }
}

function appendToDOM(){
    for (var i = 0; i < peopleArray.length; i++) {
        appendPeople(peopleArray[i]);
        buildIndexPoints();
    }
}

function appendPeople(person){
    $('#peopleContainer').append(
        '<div class="individual-info">' +
            '<h2>' + person.name + '</h2>' +

            '<a href="http://github.com/' + person.git_username + '">' +
                '<img class="avatar" src="' + person.avatar +
                '" alt="' + person.name + '\'s GitHub avatar"/>' +
            '</a>' +

            '<p class="shoutout">"' + person.shoutout + '"</p>' +
        '</div>'
    );
    $('.individual-info').hide();
}

function buildIndexPoints(){
    $('#carousel').append('<div class="circle"></div>');
}
