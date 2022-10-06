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
### 배열의 비구조화 할당
- 배열의 비구조화 할당문에서는 객체와 달리 [] 기호를 사용한다.
```javascript
let array: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;

console.log(first, second, third, rest); // 1 2 3 [4, 5]
```
### 제네릭 방식 타입
- 배열을 다루는 함수를 작성할 때는 number[]와 같이 타입이 고정된 함수를 만들기보다는 T[] 형태로 배열의 아이템 타입을 한꺼번에 표현하는 것이 편리.
- 타입을 T와 같은 일종의 변수로 취급하는 것을 제네릭(generics) 타입
```javascript
const arrayLength = (array: T[]): number => array.length;
```
- 이렇게 하면 컴파일러가 T의 의미를 알 수 있어야 한다. 즉, T가 타입 변수라고 알려줘야 함.
```javascript
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
```
- 제네릭 함수로 구현했으므로 다양한 배열 타입에 모두 정상적으로 대응하는 것을 볼 수 있음
```javascript
import { arrayLength, isEmpty } from "./arrayLength";

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = {
  name: string,
  age?: number,
};

let personArray: IPerson[] = [
  { name: 'Jack'},
  { name: 'Jane', age: 32 },
];

console.log(
  arrayLength(numArray), // 3 
  arrayLength(strArray), // 2 
  arrayLength(personArray), // 2 
  isEmpty([]), // true
  isEmpty([1]), // false
);
```
