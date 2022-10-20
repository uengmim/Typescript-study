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
