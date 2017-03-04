

// YOUR SCRIPTS GO HERE
var img0 = 'img/poke1.svg';
var img1 = 'img/poke2.svg';
var img2 = 'img/poke3.svg';
var img3 = 'img/poke4.svg';
var img4 = 'img/poke5.svg';


// Get The Faces to show up with random number generator thing
var max = 5;
var numRand = Math.floor(Math.random() * max);

var numRand2 = Math.floor(Math.random() * max);

// Make Faces Random
$('#randomp').attr('src', eval('img' + numRand));
$('#randomp2').attr('src', eval('img' + numRand2));


var $svg = $('#box').drawsvg();

$svg.drawsvg('animate');