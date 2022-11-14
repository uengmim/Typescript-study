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
