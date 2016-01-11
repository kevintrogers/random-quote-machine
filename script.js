$(document).ready(function() {
    var session_time =1;
    var break_time =1;
    var minutes = session_time;
    var seconds = session_time*60;
    var session_flag = 1;
      
  get_break_time();
  get_session_time();
  set_time();
  
  function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.text(minutes + ":" + seconds);
  
          if (--timer < 0) {
              session_flag *= -1;
              if (session_flag !== -1)
              {
              startTimer(session_time*60, $("#timer_display"));
              timer= duration;
              
              }else{
                clearInterval();
                break_time();
              }
          }
      }, 50);
      
      
  }
  
   $('#start_btn').click(function () {
      startTimer(session_time*60, $("#timer_display"));
  });
    function break_time() {
      minutes = break_time;
      seconds= break_time*60;
    startTimer(break_time*60, $("#timer_display"));
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
      set_time;
      $("#timer_display").text(session_time + ':00');
      });
    
    $('#session_minus_button').click(function(){
      if (session_time > 0){
      session_time--;
      }
      get_session_time();
      set_time();
      
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
      
      function set_time(){
        $("#timer_display").text(session_time + ':00');
      }
     
  });
 // JavaScript File