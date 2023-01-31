# 타입스크립트 공부

## 특정 단어 삭제
```javascript
.replace(/:/g, '')
```
## 날짜 형식 초기화
```javascript
var sdate = formatDate(this.startDate, "yyyyMMdd", "en-US")
```
## 날짜 초기화
```javascript
new Date("0001-01-01");
```
## 시간 초기화
```javascript
carData.startTime1 ?? "54000000"
```
- "54000000"으로 00:00:00 맞추기
## 0 앞부분부터 채우기
```javascript
this.FormData.BIDNO.padStart(3, '0');
```
## 0 뒷부분부터 채우기
```javascript
this.FormData.BIDNO.padeEnd(3, '0');
```
## 필드에 값 강제로 넣기
```javascript
Object.assign(this.listSearchDetailFormData, { RFQCST: rfgcst1, RFQVAT: rfgvat1, RFQAMT: rfgamt1 });
```
## 글자 수 체크 로직
```javascript
var insertText = this.oilFormData.ZTEXT;  
var ztext = encodeURI(insertText).split(/%..|./).length - 1;
```
## 특정 부분 제외하고 조회
```javascript
resultModel[0].IT_DATA.filter(item => item.WBSTK !== "C");
```
## 특정 조건으로 조회
```javascript
var model: ZMMS3200Model[] = this.oilSubGridData as ZMMS3200Model[]
model.find(item => item.MATNR === selectedData[0].MATNR && item.ZSTOCK >= selectedData[0].ZMENGE4)
```
## 몫 구해서 넣고 나머지 구해서 넣기
```javascript
    var result = Math.trunc(this.carFormData.ZMENGE3 / (this.carFormData.ZLITER / this.carFormData.ZCARTANK));
    var remainder = this.carFormData.ZMENGE3 % (this.carFormData.ZLITER / this.carFormData.ZCARTANK)
    for (var i = 1; i <= result; i++) {
      const name = "load" + i;
      Object.assign(this.carFormData, { [name]: (this.carFormData.ZLITER / this.carFormData.ZCARTANK) });
    }
    const name = "load" + (result + 1);
    Object.assign(this.carFormData, { [name]: remainder });
 ```
## 데이트그리드 다시 조회
```javascript
 this.dataGrid.instance.refresh();
```
