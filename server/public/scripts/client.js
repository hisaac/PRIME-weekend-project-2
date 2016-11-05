//----------------------------- GLOBAL VARIABLES -----------------------------//

var avatarUrl = '';

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
                        '<p>' + individual.name + '</p>' +
                        '<img class="avatar" src="' + avatarUrl + '" alt="'
                            + individual.name + '\'s GitHub avatar"/>' +
                        '<p>' + individual.git_username + '</p>' +
                        '<p>' + individual.shoutout + '</p>' +
                    '</div>'
                );
            }
        },
        error: function() {
            console.log('Error with request');
        }
    });
}

// function getAvatar (username) {
//     $.ajax({
//         type: 'GET',
//         async: false,
//         url: 'https://api.github.com/users/' + username,
//         success: function(data){
//             avatarUrl = data.avatar_url;
//         },
//         error: function(){
//             console.log('Error with request');
//         }
//     });
// }
