# 객체와 타입

## 타입스크립트 변수 선언문

### 타입스크립트 기본 제공 타입

- 자바스크립트와 타입스크립트의 기본 타입

|유형|자바스크립트 타입|타입스크립트 타입|
|------|---|---|
|수 유형|Number|number|
|불리언 타입|Boolean|boolean|
|문자열 타입|String|string|
|문자열 타입|Object|object|

### let과 const 키워드

#### let 키워드로 변수를 선언하는 방법.
- let으로 선언한 변수는 코드에서 그 값이 수시로 변경될 수 있음을 암시.
```javascript
let a = 1;
```

#### const 키워드로 변수를 선언하는 방법.
- const로 변수를 선언할 때는 반드시 초기값을 명시.
- const 변수는 코드에서 변숫값이 절대 변하지 않는다는 것을 암시.
```javascript
const a = 1;
```

### 타입 주석 
- 타입스크립트는 자바스크립트 변수 선언문을 확장해 다음과 같은 형태로 타입을 명시 가능.
- 이를 타입 주석(type annotation)이라고 함.
// let 변수 이름: 타입 [= 초깃값]
// const 변수이름: 타입 = 초깃값

```javascript
let n: number = 1;
let b: boolean = true;
let s: string = 'hello';
let o: object = {};
```
- 타입스크립트는 let으로 선언한 변숫값은 타입 주석으로 명시한 타입에 해당하는 값으로만 바꿀 수 있음.
```javascript
let n: number = 1;
let b: boolean = true;
let s: string = 'hello';

n = 'a'; // 타입 불일치 오류 발생
b = 1; // 타입 불일치 오류 발생
s = false; // 타입 불일치 오류 발생
```
### 타입 추론
- 타입스크립트는 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있음.
- 타입스크립트 컴파일러는 다음과 같은 코드를 만나면 대입 연산자 = 오른쪽 값에 따라 변수의 타입을 지정.
- 이를 타입 추론(type inference)이라고 함.
