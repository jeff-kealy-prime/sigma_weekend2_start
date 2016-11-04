
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
  var $el = data.sigmanauts[objectIndex];
  for (var i = 0; i < data.sigmanauts.length; i++) {
    $('#index').append('<div class="blocks ' + i + '"></div>');

  }
}

function appendSingleObjInstance(person){
  $('#objectElements').append('<div>' + person.name + '</div>');
  $('#objectElements').append('<div>' + person.git_username
+ '</div>');
  $('#objectElements').append('<div>' + person.shoutout + '</div>');
}

function nextButtonFunc(){
  $('#objectElements').empty();
  console.log("next button");
  objectIndex++;
  console.log("object Index: "+ objectIndex);
  appendToDom(objectIndex)

  //if statement to
}
function prevButtonFunc(){
  $('#objectElements').empty();
  console.log("prev button");
  objectIndex++;
  appendToDom(objectIndex)
  console.log("object Index: "+ objectIndex);

}
function countIndex(){
  $('#index').replace('<div class="blocks ' + objectIndex + '"></div>');
}
