
var objectIndex = 0;
var data = {};

$(document).ready(function(){
  $('#buttons').on('click', '#nextButton', nextButtonFunc);
  $('#buttons').on('click', '#prevButton', prevButtonFunc);




  loadData()
  function loadData(){
      $.ajax({
        type: "GET",
        url: "/data",
        success: function(potato){
          data = potato;
          addBlocks();
          appendToDom();
        },
        error: function() {
          console.log('Error with request');
        }
  /*
  -One person's information

  -A series of 22 (or the number of people in the data array)
  index points with the first person's index highlighted or called out in
  style differently than the others.
  -A 'Next' button and a 'Previous' button
  Clicking on the Next button should navigate to the next person, clicking
  on the Previous button should navigate to the previous person. The highlighted
  index point should update also as you click through to other people.

  */
      });
  }

});



function appendToDom(){
  appendSingleObjInstance(data.sigmanauts[objectIndex])
}

function addBlocks(){
  for (var i = 0; i < data.sigmanauts.length; i++) {
    $('#index').append('<div class="blocks" id="block' + i + '"></div>');
    $('.blocks').css({background : "red", border: "1px solid black"})
    $('#block' + objectIndex).css({background : "black"});
    console.log("start" + objectIndex);
  }
}

function appendSingleObjInstance(person){
  $('#objectElements').animate({opacity: '0'}, 300).animate({opacity: '1'}, 300);
  $('#objectElements').append('<div>' + person.name + '</div>')
  $('#objectElements').append('<div>' + person.git_username + '</div>');
  $('#objectElements').append('<div>' + person.shoutout + '</div>');
}
setInterval(nextButtonFunc, 10000);
function nextButtonFunc(){

  $('#objectElements').empty();
  objectIndex++;
  if(objectIndex > (data.sigmanauts.length-1)){
    objectIndex = data.sigmanauts.length-1;
  }
  console.log(data.sigmanauts.length-1);
  console.log(objectIndex);

  $('#block' + objectIndex).animate({opacity: '.1'}, 300).css({background : "black"}).animate({opacity: '1'}, 300);
  $('#block' + (objectIndex - 1)).css({background : "red"});
  appendToDom(objectIndex)

}

function prevButtonFunc(){
  $('#objectElements').empty();
  objectIndex--;
  if(objectIndex < 0){
    objectIndex = 0;
  }
  $('#block' + objectIndex).animate({opacity: '.1'}, 300).css({background : "black"}).animate({opacity: '1'}, 300);
  $('#block' + (objectIndex + 1)).css({background : "red"});
  appendToDom(objectIndex)
  ;

}
