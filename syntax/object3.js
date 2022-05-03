// 아래는 실용성은 철저히 배제한 상상력의 코드라는 걸 명심할 것

var v1 = 'v1';
// v1과 v2 사이에 10,000 code 들이 있다고 상상할 것
v1 = 'egoing'; // 내가 아닌 누군가가 v1을 이렇게 낑겨넣어버리면 엉뚱한 상황이 발생할 수도 있음
var v2 = 'v2';

// 위 같은 상황에서 우리를 구원해줄 수 있는 것은?
// 객체(object)

var o = {
    v1:'v1',
    v2:'v2',
    f1:function f1(){
        console.log(this.v1);
    },
    f2:function f2(){
        console.log(this.v2);
    }
}


o.f1(); //v1
o.f2(); //v2



