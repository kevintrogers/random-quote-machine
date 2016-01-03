$(document).ready(function() {
    var session_time =1;
    var break_time =1;
  var seconds = 60;
  var minutes;
  var clock_interval;
  var seconds = session_time * 60;
function secondPassed() {
    var minutes = Math.round((seconds-30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerhtml =  + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').text = "Dance Party!";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);
  function set_session_time(min, sec){$("#timer_minute_display").text(min);
    $("#timer_second_display").text(sec);   
  };
    function set_break_time(){$("#timer_minute_display").text(break_time);
                              if (seconds <= 9){
                              var  new_seconds = '0' + seconds;
$("#timer_second_display").text(new_seconds);                                
                              } else {
    $("#timer_second_display").text(seconds);     }
  };
  
  function get_session_time(){
    $("#session_num").text(session_time);    
  };
  
  function get_break_time(){
 $("#break_num").text(break_time);
   }

  $('#session_plus_button').click(function(){
    session_time++;
    get_session_time();
    set_session_time(session_time, seconds);
 
    });
  
  $('#session_minus_button').click(function(){
    if (session_time > 0){
    session_time--;
    }
    get_session_time();
    set_session_time(session_time, seconds);
 
    });
  
   $('#break_plus_button').click(function(){
    break_time++;
    get_break_time();
 
    });
  
  $('#break_minus_button').click(function(){
    if (break_time > 0){
    break_time--;
    }
    get_break_time();
 
    });
    
    
    get_break_time();
    function decrease_session_time(){
      session_time--;
      get_session_time(session_time);
    }
    function increase_session_time(){
      session_time++;
      get_session_time(session_time);
      
      
    }
    function decrease_break_time(){
      break_time--;
      return break_time
    }
    function decrease_break_time(){
      break_time--;
    }
  });
 // JavaScript File