<head>
  <link href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="/style.css">

<script src="/script.js"></script>
</head>
<body>
  <div class="background_div"><h1  class='banner text-center'>Pomodoro Clock</h1>
<div>
<div class='row' id='fu'><div class='col-xs-3'></div><span class='time_label text-center col-xs-2'>Break Time</span><div class='col-xs-3'></div><span class='time_label col-xs-2'>Session Time</span>
</div>
  <div class='row'>
    <div class="col-xs-2"></div>
    <div class="col-xs-1"><button class="btn" id="break_plus_button" onclick ="increase_break_time()">+</button></div>
    <div id ="break_num" class="col-xs-1"></div>
         <div class="col-xs-1"><button class="btn" id="break_minus_button" onclick="decrease_break_time()">-</button></div>
      <div class="col-xs-1"></div>
    
    <div class="col-xs-1"></div>
    <div class="col-xs-1"><button class="btn" id="session_plus_button" onclick="increase_session_time()">+</button></div>
    <div id ="session_num" class="col-xs-1"></div>
         <div class="col-xs-1"><button class="btn" id="session_minus_button" onclick="decrease_session_time()">-</button></div>
</div>
  <br><br>

<div class='col-xs-3'></div><div class='time_clock'>
<div class='row text-center'><div id='timer_type'>Session</div>
  <div class="row text-center"><div class="col-xs-2"></div>
    <button class="btn" id="start_btn">Start</button>
    
    <button class="btn" onclick="reset_timer()">Reset</button>
<div class="col-xs-2"></div>
  <div class='row text-center'><div id="timer_display">

    
</div><div class='col-xs-3'></div>
  </div>
  <canvas id ="my_canvas">
  </canvas>
  </body>

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></scrip