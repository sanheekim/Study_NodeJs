/* console.log('A');
console.log('B');
if(false){
  console.log('C1');
} else { // if(true) 와 같음
  console.log('C2');
}
console.log('D'); */

var args = process.argv; // node 시작 시 실행 인자 받는 법
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');