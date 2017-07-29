
$(document).ready(function(){
  /*var box = $('#container').find('.boxes');
  var container = $('#container')*/
  var inputNumber = 2;
  var boxNumber = (inputNumber * inputNumber);
  var boxSize = (600/inputNumber);
  var boxes = '';
  var i = 0;

  function getBoxes(){
  while(i < boxNumber){
  boxes += "<div class='boxes'></div>";
  i++;
  };

  $('#container').html(boxes);
  $('#container').find('.boxes').height(boxSize).width(boxSize)
  .addClass('box');
  };

  function findColor() {
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
                      + (Math.floor(Math.random() * 256)) + ','
                      + (Math.floor(Math.random() * 256)) + ')';
                      return color;
  };

  function addEffect() {
    $('.box').on('mouseenter', function(){
      randColor = findColor();
      $(this).css({'background-color': randColor}, 200);
      });
      };



  getBoxes();
  addEffect();
  $('#button').on('click', '#reset', function() {
    $('.box').detach();
    //Maybe...idk makes too many boxes
    var userInput = prompt("Please enter a number", "8");
    inputNumber = parseInt(userInput);
    boxNumber = (inputNumber * inputNumber);
    boxSize = (600/inputNumber);
    boxes = '';
    i = 0;
    getBoxes();
    addEffect();
  });
});
