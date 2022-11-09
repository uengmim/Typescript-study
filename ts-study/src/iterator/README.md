# 반복기

## 반복기 학습
### 반복기와 반복기 제공자
- 반복기(iterator)는 다음과 같은 특징이 있는 객체
1. next라는 이름의 메서드를 제공.
2. next 메서드는 value와 done이라는 두 개의 속성을 가진 객체를 반환.

- createRangeIterable 함수는 next 메서드가 있는 객체를 반환하므로 이 함수는 반복기를 제공하는 역할을 한다. 이처럼 반복기를 제공하는 함수를 반복기 제공자(iterable)
```javascript
export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;

  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value === undefined;

      return { value, done };
    }
  }
}
```
###  for...of 구문과 [Symbol.iterator] 메서드

```javascript
for (let value of range(1, 3 + 1)) {
  console.log(value); // 1 2 3
}
```
- 그러나 다음 코드처럼 앞에서 작성한 createRangeIterable 함수를 for...of 구문에 적용하면 [Symbol.iterator]() 메서드가 없다는 오류가 발생
```javascript
const iterable = createRangeIterable(1, 3 + 1);
for(let value of iterable) {
  console.log(value);
}
```
- RangeIterable 클래스는 [Symbol.iterator] 메서드를 구현
```javascript
class RangeIterable {
  constructor(public from: number, public to: number) {};

  [Symbol.iterator]() {
    const that = this;
    let currentValue = that.from;

    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value === undefined;
  
        return { value, done };
      }
    }
  }
}

const iterator = new RangeIterable(1, 3 + 1);

for (const value of iterator) {
  console.log(value); // 1 2 3
}
```
### Iterable와 Iterator 인터페이스
- 타입스크립트는 반복기 제공자에 Iterable<T>와 Iterator<T> 제네릭 인터페이스를 사용할 수 있다. Iterable<T>는 다음처럼 자신을 구현하는 클래스가 [Symbol.iterator] 메서드를 제공한다는 것을 명확하게 알려주는 역할을 함
```javascript
class 구현클래스 implements Iterable<생성할_값의_타입> {}
```
- 반복기 제공자를 타입스크립트가 제공하는 Iterable<T>와 Iterator<T>를 사용해 구현한 예
```javascript
export class StringIterable implements Iterable<string> {
  constructor(private strings: string[] = [], private currentIndex: number = 0) {}

  [Symbol.iterator](): Iterator<string> {
    const that = this;
    let currentIndex = that.currentIndex;
    let length = that.strings.length;

    const iterator: Iterator<string> = {
      next(): { value: string, done: boolean } {
        const value = currentIndex < length ? that.strings[currentIndex] : undefined;
        const done = value === undefined;

        return { value, done };
      }
    }

    return iterator;
  }
}

for (let value of new StringIterable(['hello', 'world', '!'])) {
  console.log(value); // hello world !
}
```
### function* 키워드
- generator 함수와 일반 함수와 다른점
1. function* 키워드로 함수를 선언한다.
2. 함수 몸통 안에 yield 문이 있다.
- 즉, function* 키워드로 선언된 함수가 생성기인데, 생성기는 오직 function* 키워드로 선언해야 하므로 화살표 함수로는 생성기를 만들 수 없음.

### yield 키워드
- 생성기 함수 안에는 yield 문을 사용할 수 있으며 yield는 연산자 형태로 동작하며 다음처럼 두 가지 기능을 함
1. 반복기를 자동으로 만들어 준다.
2. 반복기 제공자 역할도 수행한다.
