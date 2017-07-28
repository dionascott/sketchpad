
$(document).ready(function(){
  var boxes = $('.container').find('.boxes');
  var inputNumber = 10;
  var boxNumber = (inputNumber * inputNumber)
  var boxSize = (600/inputNumber)
  for(var i = 0;i < boxNumber; i++){
  $('.container').append("<div class='boxes'></div>");
  $('.container').find('.boxes').height(boxSize).width(boxSize)
  .addClass('box');
  };
  $('.container').find('.boxes').on('mouseenter', function(){
    $(this).addClass('lighter')
  });

  $('.container').find('.boxes').on('mouseleave', function(){
    $(this).removeClass('lighter').toggleClass('darker');
  });
});
