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
