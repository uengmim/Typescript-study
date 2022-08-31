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
