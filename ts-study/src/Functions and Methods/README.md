# 함수와 메서드

## 함수 선언문
- 자바스크립트에서 함수는 function 키워드로 만드는 함수와 => 기호로 만드는 화살표 함수 두 가지 있음.
- 타입스크립트 함수 선언문은 자바스크립트 함수 선언문에서 매개변수와 함수 반환값에 타입 주석을 붙이는 다음 형태로 구성.
```javascript
function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2);
```

### 매개변수와 반환값의 타입 주석 생략
- 함수 선언문에서도 매개변수와 반환값에 대한 타입 주석을 생략 가능.
- 다만, 변수 때와는 달리 함수의 매개변수 타입과 반환 타입을 생략하는 것은 바람직하지 않은데 타입이 생략되어 있으면 함수의 구현 의도를 알기 어렵고 잘못 사용하기 쉽기 때문

### void 타입
- 값을 반환하지 않는 함수는 반환 타입이 void
- void 타입은 함수 반환 타입으로만 사용할 수 있음
```javascript
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
```
### 함수 시그니처
- 변수에 타입이 있듯이 함수 또한 타입이 있는데, 함수의 타입을 함수 시그니처라고 함.
```javascript
(매개변수1타입, 매개변수2타입[, ...]) => 반환값 타입
```
- 다음 printMe 함수는 string과 number 타입의 매개변수가 두 개 있고 반환 타입이 void.
- 따라서 함수 시그니처는 (string, number) => void
```javascript
let printMe: (string, number) => void = function (name: string, age: number): void {}
```
- 만약 매개변수가 없으면 단순히 ()로 표현한다. () => void는 매개변수도 없고 반환값도 없는 함수 시그니처

### undefined 관련 주의 사항
- undefined 타입은 타입스크립트의 타입 계층도에서 모든 타입 중 최하위 타입.
- undefined를 고려하지 않은 예.
```javascript
interface INameable {
  name: string;
}

function getName(o: INameable) { return o.name; }

let n = getName(undefined); // 오류 발생
console.log(n);
```
- getName은 INameable 타입의 매개변수를 요구하지만, undefined 호출해도 구문 오류가 발생하지 않음.
- 즉, undefined는 최하위 타입이므로 INameable을 상속하는 자식 타입으로 간주.
- 하지만, 코드를 실행하면 오류가 발생.
- undefined를 고려한 예.
```javascript
interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o != undefined ? o.name : 'unknown name';
}

let n = getName(undefined);
console.log(n); // unknown name
console.log(getName({ name: 'Jack' })); // Jack
```
- 만약 인터페이스에 선택 속성이 있다면 다음과 같이 구현해야 함
  age?: number;
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined)); // 0
console.log(getAge(null)); // 0
console.log(getAge({ age: 32 })); // 32
```
### 선택적 매개변수
- 함수의 매개변수에도 다음처럼 이름 뒤에 물음표를 붙일 수 있으며, 이를 선택적 매개변수라고 함
```javascript
function fn(arg1: string, arg?: number): void {}
```
- 선택적 매개변수는 다음 코드에서 함수 호출을 모두 가능하게 하고 싶을 때 사용함.
```javascript
function fn(arg1: string, arg?: number) { console.log(`arg: ${arg}`); }

fn('hello', 1); // arg: 1
fn('hello'); // arg: undefined
```
- 선택적 매개변수가 있는 함수의 시그니처는 다음처럼 타입 뒤에 물음표를 붙임.
```javascript
type OptionalArgFunc = (string, number?) => void
```
## 함수 표현식
### 함수는 객체
- 자바스크립트에서 함수는 Function 클래스의 인스턴스
- 다음 코드의 add는 함수로서 동작한다는 의미
```javascript
let add = new Function('a', 'b', 'return a + b');
let result = add(1, 2);
console.log(result); // 3
```
- add 함수는 다음과 같은 형태로도 구현 가능
```javascript
let add2 = function(a, b) { 
  return a + b; 
}

console.log(add2(1, 2)); // 3
```
- 이처럼 함수 선언문에서 함수 이름을 제외한 function(a, b) { return a + b; }와 같은 코드를 함수 표현식(function expression)
### 일등 함수
- 프로그래밍 언어가 일등 함수(first-class function) 기능을 제공하면 함수형 프로그래밍 언어
- 자바스크립트와 타입스크립트는 일등 함수 기능이 있으므로 함수형 프로그래밍 언어
- 일등 함수란, 함수와 변수를 구분하지 않는다는 의미
- 예를 들어 다음 코드에서 f는 let 키워드가 앞에 있으므로 변수. f는 변수이므로 값을 저장할 수 있다. 변수 f에는 a + b 형태의 함수 표현식을 저장
- 하지만 f는 변수이므로 2행처럼 a - b 형태의 함수 표현식도 저장 가능.
```javascript
let f = function(a, b) { return a + b; }
f = function(a, b) { return a - b; }
```
- 심벌 f가 변수인지 함수인지 사실상 구분할 수 없다. 이것이 변수와 함수를 차별하지 않는다는 의미이다.
### 표현식
- 프로그래밍 언어에서 표현식(expression)이라는 용어는 리터럴, 연산자, 변수, 함수 호출 등이 복합적으로 구성된 코드 형태를 의미.
- 예를 들어, 1 + 2는 1 과 2라는 리터럴과 덧셈 연산자 +로 구성된 표현식
### 함수 표현식
- 앞에서 작성한 변수 f에는 function(a, b) { return a + b; }마치 값처럼 대입하는데, 이 function(a, b) { return a + b; } 부분을 함수 표현식이라고 함.
### 계산법
- 컴파일러는 표현식을 만나면 계산법을 적용해 어떤 값을 만드는데 계산법에는 조급한 계산법과 느긋한(지연) 계산법이 있음
- 컴파일러가 1 + 2라는 표현식을 만나면 조급한 계산법을 적용해 3이라는 값을 만들고, 컴파일러가 function(a, b) { return a + b; }라는 함수 표현식을 만나면, 심벌 a와 b가 어떤 값인지 알 수 없어서 느긋한 계산법을 적용해 계산을 보류
### 함수 호출 연산자
- 어떤 변수가 함수 표현식을 담고 있다면, 변수 이름 뒤에 함수 호출 연산자 ()를 붙여서 호출할 수 있음.
```javascript
let functionExpression = function(a, b) { return a + b; }
let value = functionExpression(1, 2); // (1, 2): 함수 호출 연산자
```
- 컴파일러는 함수 호출문을 만나면 지금까지 미뤘던 함수 표현식에 조급한 계산법을 적용해 함수 표현식을 값으로 바꾼다. ( return 1 + 2 => return 3 )
### 익명 함수
- 함수 표현식은 사실 대부분 언어에서 언급되는 익명 함수(anonymous function)의 다른 표현
```javascript
let value = (function(a, b) {return a + b; })(1, 2) // 3
```
-  앞의 한 줄까지 코드를 쉽게 분석하고자 세 줄로 나눈 것
```javascript
let value = 
(function(a, b) { return a + b })
(1, 2) // 3
```
- 컴파일러는 2행의 익명 함수 부분에 게으른 계산법을 적용해 그 상태로 놔두지만, 곧바로 3행의 함수 호출 연산자를 만나므로 2행의 함수 몸통에 조급한 계산법을 적용해 최종적으로 3이라는 값을 만들어 냄
### const 키워드와 함수 표현식
- 함수 표현식을 담는 변수는 let 보다는 const 키워드로 선언하는 것이 바람직.
- 함수 표현식을 담은 변수를 const키워드로 선언하면, 함수 내용이 이후에 절대로 바뀔 수 없음.
## 화살표 함수와 표현식 문
- 화살표 함수의 몸통은 function 떄와는 다르게 다음처럼 중괄호를 사용할 수도 있고 생략할 수도 있음.
```javascript
const arrow1 = (a: number, b: number): number => { return a + b }
const arrow2 = (a: number, b: number): number => a + b;
```
- 중괄호 사용 여부에 따라 타입스크립트 문법이 동작하는 방식이 실행문(execution statement) 방식과 표현식 문(expression statement) 방식으로 달라짐.
