# 람다 라이브러리

## 람다 기본 사용법
### R.range 함수
```javascript
import * as R from 'ramda';

console.log(R.range(1, 9 + 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### R.tap 디버깅용 함수
- R.tap 함수는 2차 고차 함수 형태로 현재 값을 파악이 가능
```javascript
import * as R from 'ramda';

const numbers: number[] = R.range(1, 9 + 1);

R.tap(n => console.log(n))(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### R.pipe 함수
```javascript
import * as R from 'ramda';

const array: number[] = R.range(1, 10);

R.pipe(R.tap(n => console.log(n)))(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 자동 커리 이해하기
```javascript
import * as R from 'ramda';

console.log(
  R.add(1, 2),  // 3
  R.add(1)(2),  // 3
);
```

### R.curryN 함수
- N개의 매개변수를 가진 1차 함수(first function)를 N개의 커리 매개변수를 가지는 N차 고차 함수로 만들어줌
```javascript
import * as R from 'ramda';

const sum  = (...numbers: number[]): number =>
  numbers.reduce((result: number, sum: number) => result + sum, 0);

const curriedSum = R.curryN(4, sum);

console.log(
  curriedSum(), // [Function (anonymous)]
  curriedSum(1), // [Function (anonymous)]
  curriedSum(1)(2), // [Function (anonymous)]
  curriedSum(1)(2)(3), // [Function (anonymous)]
  curriedSum(1)(2)(3)(4), // 10
);
```
### 순수함수
 - 람다 라이브러리가 제공하는 함수들은 항상 입력 변수의 상태를 변화시키지 않고 새로운 값을 반환함.
 
### 선언형 프로그래밍
- 선언형 프로그래밍에서 모든 입력 데이터는 단순 데이터보다배열 형태를 주로 사용함.
```javascript
const value = 1;
const newArray = R.pipe(
  R.map(R.inc)
)([value]) // [2]
```

- R.pipe 안에서는 console.log()문을 직접 사용할 수 없으므로 반드시 R.tap 함수를 사용해야 함.

### 사칙 연산 함수
```javascript
R.add(a: number)(b: number); // a + b
R.subtract(a: number)(b: number); // a - b
R.multiply(a: number)(b: number); // a * b
R.divide(a: number)(b: number); // a / b
```
