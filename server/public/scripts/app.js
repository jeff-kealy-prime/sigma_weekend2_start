
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
  $('#objectElements').append('<div><b>Name:</b> ' + person.name + '</div>')
  $('#objectElements').append('<div><b>Git Username:</b> ' + person.git_username + '</div>');
  $('#objectElements').append('<div><b>Shoutout:</b> ' + person.shoutout + '</div>');
}
setTimeout(nextButtonFunc, 10000);
function nextButtonFunc(){
  $('#objectElements').empty();
  objectIndex++;
  if(objectIndex > (data.sigmanauts.length-1)){
    objectIndex = data.sigmanauts.length-1;
  }
  $('#block' + objectIndex).animate({opacity: '.1'}, 300).css({background : "black"}).animate({opacity: '1'}, 300);
  $('#block' + (objectIndex - 1)).css({background : "red"});
  appendToDom(objectIndex)
  setTimeout(nextButtonFunc, 10000);

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
  setTimeout(nextButtonFunc, 10000);


}
