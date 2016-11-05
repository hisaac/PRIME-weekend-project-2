//----------------------------- GLOBAL VARIABLES -----------------------------//

var peopleArray = [];

// placeholder — gets reassigned if getAvatar is called
var avatarUrl = 'http://lorempixel.com/388/388/';


//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(response){
            peopleArray = response.sigmanauts;
            // init();
        }
    });
});

//-------------------------------- FUNCTIONS ---------------------------------//

function init(){

}

// grabs data from the server
function getData(){
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(response){
            for(var i = 0; i < response.sigmanauts.length; i++) {
                // getAvatar(response.sigmanauts[i].git_username);
                appendData(response.sigmanauts[i]);
            }
        },
        error: function() {
            console.log('Error with request');
        }
    });
}

// appends data to DOM
function appendData(individual){
    $('#peopleContainer').append(
        '<div class="individual-info">' +
            '<h2>' + individual.name + '</h2>' +

            '<a href="http://github.com/' + individual.git_username + '">' +
                '<img class="avatar" src="' + avatarUrl +
                '" alt="' + individual.name + '\'s GitHub avatar"/>' +
            '</a>' +

            '<p class="shoutout">"' + individual.shoutout + '"</p>' +
        '</div>'
    );
}

// gets individual's GitHub avatar, and assigns the url to avatarUrl
function getAvatar (username) {
    $.ajax({
        type: 'GET',
        async: false,
        url: 'https://api.github.com/users/' + username,
        success: function(data){
            avatarUrl = data.avatar_url;
        },
        error: function(){
            console.log('Error with request');
        }
    });
}
