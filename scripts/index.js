var convert = function() {
  var $input = $('#input').val(); // string version of input number --> convert to number when used
  var $from = $('#inputDD :selected').val(); // selected input drop down
  var $to = $('#outputDD :selected').val(); // selected output drop down

  // From === Teaspoons
  if ($from === 'teaspoons') {
    if ($to === 'cups') {
      $('#output').val(tspToCup($input));
    }
    if ($to === 'tablespoons') {
      $('#output').val(tspToTbsp($input));
    } else {
      $('#output').val($input);                        
    }
  }
  
  // From === Tablespoons
  if ($from === 'tablespoons') {
    if ($to === 'cups') {
      $('#output').val(tbspToCup($input));
    }
    if ($to === 'tablespoons') {
      $('#output').val(tbspToTsp($input));
    } else {
      $('#output').val($input);
    }
  }

  // From === Cups
  if ($from === 'cups') {
    if ($to === 'tablespoons') {
      $('#output').val(cupToTbsp($input));
    }
    if ($to === 'teaspoons') {
      $('#output').val(cupToTsp($input));
    } else {
      $('#output').val($input);
    }
  }
}

var tspToCup = function(tsp) {
  return (tsp * 0.0208333).toFixed(2);
}

var tspToTbsp = function(tsp) {
  return (tsp * 3).toFixed(2);
}

var tbspToCup = function(tbsp) {
  return (tbsp * 0.0625).toFixed(2);
}

var tbspToTsp = function(tbsp) {
  return (cup * 3).toFixed(2);
}

var cupToTbsp = function(cup) {
  return (cup * 16).toFixed(2);
}

var cupToTsp = function(cup) {
  return (cup * 48).toFixed(2);    
}