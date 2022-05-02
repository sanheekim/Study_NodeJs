// Object Oriented Programming

var f = function(){
    console.log(1+1); // 2
    console.log(1+2); // 3
  }

var a = [f];
a[0](); // 2
        // 3

var o = {
func:f
}
o.func(); // 이것도 var f 즉,
          // 2
          // 3이 나옴