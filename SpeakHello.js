(function(window){
  var helloSpeaker = {};
  helloSpeaker.speak = function(names) {
  console.log(speakWord + " " + names);
}
var speakWord = "Hello";
window.helloSpeaker = helloSpeaker;
})(window);