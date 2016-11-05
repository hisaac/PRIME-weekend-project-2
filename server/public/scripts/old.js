//----------------------------- GLOBAL VARIABLES -----------------------------//

var peopleArray = [];

//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(response){
            peopleArray = response.sigmanauts;
            addAvatars();
            appendData();
        }
    });
});

//-------------------------------- FUNCTIONS ---------------------------------//

// grabs data from the server
function appendData(){
    for(var i = 0; i < peopleArray.length; i++) {
        // getAvatar(peopleArray[i].git_username);
        $('#peopleContainer').append(
            '<div class="individual-info">' +
                '<h2>' + peopleArray[i].name + '</h2>' +

                '<a href="http://github.com/' + peopleArray[i].git_username + '">' +
                    '<img class="avatar" src="' + peopleArray[i].avatar +
                    '" alt="' + peopleArray[i].name + '\'s GitHub avatar"/>' +
                '</a>' +

                '<p class="shoutout">"' + peopleArray[i].shoutout + '"</p>' +
            '</div>'
        );
    }
}

// gets individual's GitHub avatar, and assigns the url to avatarUrl
function addAvatars(){
    var avatarUrl = 'http://lorempixel.com/388/388/';
    $.ajax({
        type: 'GET',
        async: false,
        url: 'https://api.github.com/users/' + username,
        success: function(data){
            avatarUrl = data.avatar_url;
        },
        error: function(){
            avatarUrl = 'http://lorempixel.com/388/388/';
        }
    });
    for (var i = 0; i < peopleArray.length; i++) {
        peopleArray[i].avatar = avatarUrl;
    }
}
