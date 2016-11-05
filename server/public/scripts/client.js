//----------------------------- GLOBAL VARIABLES -----------------------------//



//---------------------------------- LOGIC -----------------------------------//

$(document).ready(function(){
    init();
});

//-------------------------------- FUNCTIONS ---------------------------------//

function init(){
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(response){
            for(var i = 0; i < response.sigmanauts.length; i++) {
              console.log(response.sigmanauts[i].name);
            }
        },
        error: function() {
            console.log('Error with request');
        }
    });

    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/hisaac',
        success: function(data){
            $('#peopleContainer').html('<img src="' + data.avatar_url + '"/>');
        },
        error: function(){
            console.log('Error with request');
        }
    })

}
