//----------------------------- GLOBAL VARIABLES -----------------------------//

var peopleArray = [];
var counter = 0;

//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    init();
})

//-------------------------------- FUNCTIONS ---------------------------------//

function init(){
    getData();
    getAvatars();
}

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
            url: 'REMOVEhttps://api.github.com/users/' + peopleArray[i].git_username,
            success: function(data){
                peopleArray[i].avatar = data.avatar_url;
            },
            error: function(){
                peopleArray[i].avatar = 'http://lorempixel.com/388/388/';
            }
        });
    }
}
