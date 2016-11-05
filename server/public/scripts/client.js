//----------------------------- GLOBAL VARIABLES -----------------------------//

var avatarUrl = 'http://lorempixel.com/388/388/';

//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    init();
});

//-------------------------------- FUNCTIONS ---------------------------------//

function init(){
    appendData();
}

function appendData(){
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(response){
            for(var i = 0; i < response.sigmanauts.length; i++) {

                var individual = response.sigmanauts[i];
                // getAvatar(individual.git_username);

                $('#peopleContainer').append(
                    '<div class="person-info">' +
                        '<h2>' + individual.name + '</h2>' +
                        '<img class="avatar" src="' + avatarUrl + '" alt="'
                            + individual.name + '\'s GitHub avatar"/>' +
                        '<p>GitHub: <a href="http://github.com/' +
                            individual.git_username + '">' +
                            individual.git_username + '</a>' +
                        '</p>' +
                        '<p class="shoutout">"' + individual.shoutout + '"</p>' +
                    '</div>'
                );
            }
        },
        error: function() {
            console.log('Error with request');
        }
    });
}

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
