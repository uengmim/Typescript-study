# 타입스크립트 공부

## 특정 단어 삭제
```javascript
.replace(/:/g, '')
```
## 날짜 형식 초기화
```javascript
now: Date = new Date();

var sdate = formatDate(this.startDate, "yyyyMMdd", "en-US");

this.newDate = formatDate(this.now.setDate(this.now.getDate()), "yyyy-MM-dd", "en-US");

this.startDate = formatDate(this.now.setDate(this.now.getDate() - 7), "yyyy-MM-dd", "en-US");
```
## 날짜 초기화
```javascript
new Date("0001-01-01");
```
## 날짜순으로 정렬
```javascript
  const sorted_list = this.oilSubGridData.sort(function (a, b) {
    return new Date(a.ZARRDT).getTime() - new Date(b.ZARRDT).getTime();
  });
        sorted_list.forEach(async (array: any) => {
}
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
this.FormData.BIDNO.padEnd(3, '0');
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
## 특정 조건으로 조회
```javascript
var model: ZMMS3200Model[] = this.oilSubGridData as ZMMS3200Model[]
model.find(item => item.MATNR === selectedData[0].MATNR && item.ZSTOCK >= selectedData[0].ZMENGE4)
```
## 배열에서 특정 조건으로 조회
```javascript
 var resultValue = this.kunweCodeDynamic.gridDataSource._array.find(obj => obj.KUNNR == e.selectedValue);
 ```
## 특정 부분 제외하고 조회
```javascript
resultModel[0].IT_DATA.filter(item => item.WBSTK !== "C");
var sameData = thisObj.orderList.filter(item => item.VBELN === selectData[0].VBELN && item.POSNR === selectData[0].POSNR);
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

## 데이터그리드 클릭 시 폼데이터 바인딩
```javascript
selectionChanged(e: any) {
setTimeout(() => {
  const rowData = e.selectedRowsData[0];

  if (rowData) {
    this.FormData = rowData;
  }
}, 100);
}
```
## 파서블 엔트리 선택시 연관 데이터 출력
```javascript
onValueChanged(e: any) {
setTimeout(() => {
  this.FormData.ZCARNO = e.selectedItem.ZCARNO;
  this.FormData.ZDRIVER = e.selectedItem.ZDERIVER1;
  this.FormData.ZPHONE = e.selectedItem.ZPHONE1;
  this.FormData.ZRFID = e.selectedItem.ZRFID;
  return;
});
}
  ```
## 페이지 리로드
```javascript
setTimeout("location.reload(true);");
```
## 버튼 클릭시 버튼 변경 이벤트
```javascript
manualRegis = (e:any) => {
  setTimeout(() => {

    if (this.inProgress) {
      this.testBox.editorOptions = { disabled: false };
      this.buttonText = '계근 등록';
      this.weightStartData.STATUS = "수동 입력 상태";
    } else {
      this.testBox.editorOptions = { disabled: true };
      this.buttonText = '수동 등록';
      this.weightStartData.STATUS = "계근 입력 상태";
    }
    this.inProgress = !this.inProgress;
  });
  this.form.instance.repaint();
}
```
## 딜레이 주기
```javascript
 setTimeout(() => {
   this.popItemData.Z4PARVW = e.selectedValue;
   /*this.tdlnrValue = e.selectedValue;*/
 });
 ```
 ## 할당된 폼에 값 빼기
```javascript
     var total = this.carFormData.ZMENGE3;
    for (var i = 1; i <= this.carFormData.ZCARTANK; i++) {
      const name = "load" + i;      //적재필드명
      const key = "ZTANKLITER" + i; //유창필드명

      //출고량을 가지고 유창의 용량만큼 빼주면서 값이 양수일때는 유창의 용량으로 적재하면서 출고량에서 적재량 빼주기
      //음수라면 현재 total의 출고량이 마지막 용량이므로 total값을 넣어준다.
      if ((total - this.carFormData[key]) > 0) {
        this.carFormData[name] = this.carFormData[key];
        total = total - this.carFormData[key];
      }
      else {

        console.log(total);
        this.carFormData[name] = total;
        total = 0;
      }
    }
 ```
