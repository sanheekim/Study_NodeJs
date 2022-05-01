var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805
// 객체의 반복
var i = 0;
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}

var roles = { // object는 문법이 {}(중괄호)임.
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles.designer); //k8805
console.log(roles['designer']); //k8805

for(var n in roles){
  console.log('object => ', n, 'value => ', roles[n]);
}


