SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function(){

  // jQuery methods go here...
    SC.stream('/tracks/693696028',function(sound){

      $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });


         $('#stop').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });

      });


});
