/*
	METHOD THREE - Module Pattern JS
	http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
	http://www.impressivewebs.com/my-current-javascript-design-pattern/
	https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/
*/

var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log(foo);
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    }
  };
 
})();

console.log(myNamespace.myPublicVar) // foo