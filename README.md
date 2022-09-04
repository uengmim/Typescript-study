# Typescript-study
타입스크립트 공부
#### [📑 객체와 타입](https://github.com/uengmim/Typescript-study/tree/main/ts-study/src/Object%20and%20Type)
#### [📑 함수와 메서드](https://github.com/uengmim/Typescript-study/tree/main/ts-study/src/Functions%20and%20Methods)

## Typescript란?
타입스크립트는 2012 년 마이크로소프트가 발표한 자바스크립트를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어.

타입스크립트의 가장 큰 강점이자 장점은 Strongly typed language라는 점이다. 즉, 변수와 기타 데이터 구조가 문자열이나 블린 같은 특정 형식을 갖도록 프로그래머가 선언 할 수 있으며ㅡ 타입스크립트가 값의 유효성을 확인한다. loosely typed인 자바스크립트에서는 불가능 한 일이다.

그리고 코드가 읽히기 전에 타입스크립트가 먼저 실행되서, 데이터 타입을 먼저 잡아내어 서버에 올리기 전, 컴파일 되기 전 오류를 잡아 낼 수 있다.

## Typescript 사용 이유

### 1. 높은 수준의 코드 탐색과 디버깅
타입스크립트는 코드에 목적을 명시하고, 목적에 맞지 않는 타입의 변수나 함수들에서 애러를 발생시켜 버그를 사전에 제거한다. 타입을 먼저 명시해, 추후의 애러를 감소시키고 디버깅을 용이하게 해 준다. 실제로 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지 할 수 있다고 한다.

### 2. 자바스크립트 호환
타입스크립트는 자바스크립트와 100% 호환된다. 자바스크립트로 이루어진 Node.js나 Next.js 에서도 타입스크립트 사용이 가능하며, 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용이 가능하다.

코드가 늘어나고, 가독성이 떨어지는 단점이 있을 수도 있지만, 만약 내가 하는 프로젝트의 페이지가 늘어나고, 컴포넌트의 수가 많다면 타입스크립트을 사용하면 좋다.

## Typescript 특징

### 1. 컴파일 언어, 정적 타입
자바스크립트는 동적 타입의 언어 (inpretter language)이므로 런타임에서 오류를 발견할 수 있다. 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이기 떄문에 컴파일러 , 바벨을 통해 자바스크립트 언어로 변환된다.
그렇기 떄문에 코드 작성 단계에서 타입을 체크해 오류를 확인 할 수 있고, 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다.

### 2. 자바스크립트 슈퍼셋
타입스크립트는 자바스크립트의 확장 언어이기 떄문에 유효한 자바스크립트 언어는 타입스크립트로 변환해 컴파일 할 수 있다.

### 3. 객체지향 프로그래밍 지원
타입스크립트는 ES6에서 새롭게 사용된 문법을 포함하고 있으며, class, interface, instance, module과 같은 객체지향 프로그래밍 패턴을 제공한다.  
  
## Typescript
![image](https://user-images.githubusercontent.com/72143238/184040783-196707a6-c153-479f-9ae1-c92a471e3994.png)
✔ 사전의 애러방지 <br>
✔ 코드가이드 및 자동완성
사용하다 보면 타입에 대한 에러들이 발생하는데 Props로 데이터를 전달 받을 수 있다. 하지만 Props를 전달 받기 전 컴포넌트가 먼저 읽힐 경우, props를 찾을 수 없어 브라우저에서 undefined를 반환한다.

하지만 props의 기본적인 타입을 정의해준다면 , 이러한 애러들을 사전에 방지 할 수 있다.

## 제네릭
제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미.
```javascript
function test<T>(text:T) : T{
  return text;
  }
```
1. return의 값을 T로 정의함.
2. text의 파라미터도 T로 정의 함.
3. text를 return 함.
4. T를 만약 string으로 정의한다면, 는 타입을 마치 파라미터처럼 사용한다고 했으니, return의 타입을 T로 정의하는것과 같다. T가 string이 된다면, Text또한 string이므로, return 또한 string이 된다.

### 제네릭의 기본 구조
```javascript
  const arr= Array<string> //Array안에 elem은 string이라는 것.
```
```javascript
  type Todo= {text:string,completed:boolean}
  interface ComponentProps{todos:Array<Todo>}
  // todos의 타입은 Array이며, 배열 요소는 object의 Todo형식에 있는
  // 2가지 key형태로 들어오며, text는 string, completed는 boolean이다.
  ```
1. 컴포넌트의 리턴값은 <div></div>이다. 제네릭은 리턴값의 타입을 정의한다.
2. 즉, props로 받은 값들은, 리턴같에 들어가기 때문에 제네릭의 type은 props의 타입이라고 할 수 있다.
