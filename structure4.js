/*
	METHOD FOUR - Module Pattern JS
*/

var SayHello = SayHello || {};

SayHello.sayIt = function() {

  var public = {};
  public.settings = [true, false, true];
  var self = this;

  function init() {

    console.log('private');
    
  }
  
  public.speak = function(string) {
      console.log(string);
  }

  return public;
  

}

function anything() {
  console.log(SayHello.sayIt().settings);
  SayHello.sayIt().speak('something');
  // Won't work as not public
  //SayHello.sayIt().init();
}

anything();

