# Promise와 async/await 구문

## 비동기 콜백 함수

### 동기와 비동기 API

- Node.js에서 파일 시스템과 관련된 기능을 모아둔 fs 패키지를 제공하는데, 동기 비동기 버전으로 나누어 제공한다. 예를 들어, 동기 버전인 readFileSync와 비동기 버전인 readFile로 제공

```javascript
import { readFileSync, readFile } from "fs";

// 동기 방식으로 읽기
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

// 비동기 방식으로 읽기
readFile('./package.json', (error: Error, buffer: Buffer) => {
  console.log(buffer.toString());
});

// Promise와 async/await 구문을 사용한 예
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if(error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });

(async () => {
  const content = await readFilePromise('./package.json');
  console.log(content);
})();
```
- API 함수는 일반 함수와 달리 하드디스크에 저장된 파일을 읽는 등 실행시 물리적인 시간이 소요.
- 따라서 파일 내용을 모두 읽을 때까지 프로그램의 동작을 잠시 멈추는 동기 방식의 API와 프로그램의 동작을 멈추지 않는 대신 결과를 콜백 함수로 얻게 하는 비동기 방식의 API를 제공.
- 비동기 API의 콜백 함수를 비동기 콜백 함수라고 한다. 비동기 콜백 함수는 일반 함수와 달리 API의 물리적인 동작 결과를 수신하는 목적으로만 사용

### 단일 스레드와 비동기 API
- 자바스크립트는 단일 스레드로 동작하므로 될 수 있으면 readFileSync와 같은 동기 API를 사용하지 말아야 한다.
- 동기 API가 실행되면, 운영체제는 동기 API의 작업 결과를 함수의 반환값으로 돌려줘야 한다. 이 때문에 운영체제는 동기 API가 실행된 코드를 일시적으로 멈춘 다음, 또 다른 스레드에서 실제 작업을 실행해 켤과를 얻으면 그때서야 잠시 멈췄던 동기 API를 실행하면서 결괏값을 반환. 그렇기 때문에 결과를 반환할 때까지 일시적으로 멈추는 현상이 발생

### 콜백
- 비동기 API를 사용하면 콜백 함수에서 또 다시 다른 비동기 API를 호출하는 코드를 만들 때 코드가 매우 복잡해짐
```javascript
import { readFile } from "fs";

readFile('./package.json', (error: Error, buffer: Buffer) => {
  if (error) {
    throw error;
  } else {
    const content: string = buffer.toString();
    console.log(content);
  }

  readFile('./tsconfig.json',(err: Error, buffer: Buffer) => {
    if (error) {
      throw error;
    } else {
      const content: string = buffer.toString();
      console.log(content);
    }
  })
});
```
