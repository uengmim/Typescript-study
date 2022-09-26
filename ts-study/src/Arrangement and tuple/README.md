# 배열과 튜플

## 배열
### []단축구문
- 자바스크립트에서는 []라는 단축 구문을 제공
```javascript
let numbers = [1, 2, 3];
let strings = ['Hello', 'World'];
console.log(numbers, strings); // [1, 2, 3] ['Hello', 'World']
```
### 자바스크립트에서 배열은 객체
- 자바스크립트에서 배열은 객체.
- 배열은 Array 클래스의 인스턴스인데, 클래스의 인스턴스는 객체이기 때문.
- Array.isArray는 매개변수로 전달받은 심벌이 배열인지 객체인지 알려줌
```javascript
let a = [1, 2, 3];
let o = { name: 'Jack', age: 32 };
console.log(Array.isArray(a), Array.isArray(o)); // true false
```
### 배열의 타입
- 타입스크립트에서 배열의 타입은 아이템 타입[]. 예를 들어, 배열의 아이템이 number 타입이면 배열의 타입은 number[]이고, 아이템이 string 타입이면 string[]
```javascript
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = { name: string, age?: number };
let personArray: IPerson[] = [
  { name: 'Jack' },
  { name: 'Jane', age: 32 },
];

// [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
```
### 문자열과 배열 간 변환
- 타입스크립트에서는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없으며 이러한 특징 때문에 문자열을 가공하려면 먼저 문자열을 배열로 전환
- 보통 문자열을 배열로 전환할 때는 String 클래스의 split 메서드를 사용
- string[] 타입의 배열을 다시 string 타입으로 변환하려면 Array 클래스의 join 메서드를 사용

### 인덱스 연산자
- 배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때는 인덱스 연산자[인덱스]를 사용
```javascript
const numbers: number[] = [1, 2, 3, 4, 5];

for(let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index];
  console.log(item); // 1 2 3 4 5
}
```
