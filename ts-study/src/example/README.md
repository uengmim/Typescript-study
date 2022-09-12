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
