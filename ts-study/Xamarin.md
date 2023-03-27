# Xamarin

## UI
- Xamarin에서의 UI는 Page, View, Layout로 구성되어있다.
- Page는 스마트폰에서 보이는 한 화면
- View는 Label이나 Button 같은 기능
- Page 안에 다른 View나 Layout들이 어떻게 배치되는지 결정해주는 위치매니저

### Custom Renderer
Renderer는 xamarin에서 제공해주는 기능이며 각 디바이스별 native 컨트롤 모양을 화면에 그려주는 객
- 한번 정의해놓은 UI위치에 각 플랫폼에 맞는 UI가 보여짐
![image](https://user-images.githubusercontent.com/72143238/227840782-35aeef43-0875-4d48-be75-dfdc4956ada4.png)
- Label 태그는 자리만 잡아놓는 역할
- xamarin에서는 Label, Button 모두 View
	- CustomView.cs
```javascript
public class CustomView : ContentView

{
	public CustomView ()
	{
       
	}
}
```
- ContentView를 상속받은 클래스를 만들고 xaml에서 <local:CustomView WidthRequest="300" HeightRequest="300" BackgroundColor="Yellow" />

## Layout
### Frame Layout
- 단 하나의 view만 내부에 가질 수 있는 Layout
- 아무런 옵션을 주지 않으면 전체 공간을차지함
- 하나의 element만 넣을 수 있음
       - HorizontalOptions="Center" (들어있는 view 크기만큼 세로 center로)
       - VerticalOptions="Center" (들어있는 view 크기만큼 가 center로)
       - OutlineColor="Red" (테두리 색깔 조정)
       - CornerRadius="15" (꼭지점 각도 조정)
### Scroll Layout
- 스크롤 기능을 지원해주는 Layout
- StackLayout처럼 여러 view가 있는 곳에 사용 가능

### Stack Layout
- Frame이나 ScrollView와 달리 여러 개의 요소들을 받을 수 있는 Layout
- Stack Layout에서 중요한 속성 2가지는 **Orientation**과 **Spacing**
- **Orientation**은 방향 *기본값은 Vertical*
       - StackLayout Orientation="Horizontal"처럼 바꿔주면 세로로 Stack이 쌓이게 됨
- **Spacing**은 간격 *기본값은6*
       - StackLayout Orientation="Vertical" Spacing="20" 가로로 쌓인 Stack의 간격이 20만큼 벌어지게 됨

- View들은 Layout 관련 옵션을 가지고 있는데 위치를 변경할 때 사용하는 것이 **HorizontalOptions(가로 위치)**과 **VerticalOptions(세로 위치)**
- Start, End, Center, Fill 4가지 옵션을 가지고 있다.
       - StackLayout Orientation="Vertical"에서 HorizontalOptions="Start, Center, End"는 왼쪽, 가운데, 오른쪽을 뜻함
- 스텍 형식일 경우에 아래로 쌓이기 때문에 아래 공간이 남는다. 그렇기 때문에 VerticalOptions="CenterAndExpand" 옵션은 정 가운데에 놓고 남는 공간은 모두 할당 요청하는 옵션이다. 만약 EndAndExpand 일 경우는 해당 스텍이 제일 아래로 가고 남는 공간 역시 모두 할당 옵션
- 두가지 View가 VerticalOptions을 사용할 경우 똑같이 나눠가진다.
- VerticalOptions="FillAndExpand"을 사용하면 View 자체 크기가 커지지만 문구는 이동하지 않는다. 
- 문구를 이동시키려면 VerticalTextAlignment="Center" HorizontalTextAlignment="Center" 옵션을 줘야한다.

### Grid
- 행과 열을 나타내는 방법으로 Grid에 대한 태그 내에서 Grid.Row와 Grid.Column 특성을 사용하여 자식의 행과 열을 지정한다.
- 기본값은 0이기 때문에 둘 이상의 행과 열에 걸쳐 있는지 여부를 나타낼 수 있다.
```xaml
<Label Text="Autosized cell"
 Grid.Row="0" Grid.Column="0"
 TextColor="White"
 BackgroundColor="Blue" />
 ```

### Absolute Layout
- 절대값과 상대값으로 Layout 내에서의 위치와 크기를 결정하는 Layout
- 여러 개의 element를 가질 수 있는 Layout이다.
- Absolute 라는 이름처럼 layout 안에서 x와 y의 좌표를 이용해 정확한 위치 지정 가능
- 또 비율을 이용해 위치와 크기 지정 가능
- 가로 100 세로 110의 위치에 폭 120,높이 130의 크기로 label 위치 *레이아웃 기준
```xaml
<Label Text="test" AbsoluteLayout.LayoutBounds="100, 110, 120, 130" BackgroundColor="Green" />
```
- AbsoluteLayout.LayoutFlags 속성을 사용하여 어떤 값에 대한 비율을 사용할지 지정
  - All (x,y,폭,높이 모두 비율 사용)

  - HeightProportional (높이만 layout에 대한 비율 / 다른 값은 절)

  - None (절대값)

  - PositionProportional (x, y는 비율 / 크기는 절대값)

  - SizeProportional (크기만 비율 / x, y는 절대값)

  - WidthProportional (폭 비율)

  - HeightProportional (높이 비율)

  - XProportional (X 비율)

  - YProportional (Y 비율)

### Label View
- Label Option
  - 글씨 크기 / FontSize="" _ Large,Medium,Small,Default,Micro,숫
  - 글씨 모양 / FontAttributes="" _ Bold,italic
  - 다음 줄에도 라인 한 줄로 표시 / LineBreakMode="CharacterWrap"
  - 다음 줄에 단어부터 시작 / LineBreakMode="WordWrap"
  - NoWrap 최대한 보여주고 그 이상 오버되는건 짤림.

## 필수 XAML 구문
### 속성요소
- 일반적인 XML
```xaml
<Label Text="Hello, XAML!"
       VerticalOptions="Center"
       FontAttributes="Bold"
       FontSize="Large"
       TextColor="Aqua" />
```
- TextColor를 사용하려면 시작태그와 끝 태그로 구분하여 빈 요소 Label 태그 열고 새 태그의 콘텐츠로 설정
```xaml
<Label Text="Hello, XAML!"
       VerticalOptions="Center"
       FontAttributes="Bold"
       FontSize="Large">
    <Label.TextColor>
        Aqua
    </Label.TextColor>
</Label>
```
- 모든 속성에 속성요소 구문 사용 가능
```xaml
<Label>
    <Label.Text>
        Hello, XAML!
    </Label.Text>
    <Label.FontAttributes>
        Bold
    </Label.FontAttributes>
    <Label.FontSize>
        Large
    </Label.FontSize>
    <Label.TextColor>
        Aqua
    </Label.TextColor>
    <Label.VerticalOptions>
        Center
    </Label.VerticalOptions>
</Label>
```
- 위와 같이 하면 너무 복잡하기 때문에 속성 요소 구문이 필수적이다. 그래서 태그 내에서 다른 개체를 인스턴스화 하고 해당 속성을 설정 가능.
- VerticalOptions LayoutOptions 속성
```xaml
<Label>
    ...
    <Label.VerticalOptions>
        <LayoutOptions Alignment="Center" />
    </Label.VerticalOptions>
</Label>
```
- Grid에서의 RowDefinitions과 ColumnDefinitions 두개의 속성이 있다.
- 속성 요소를 사용하려면 마찬가지로 태그로 사용해야 한다.
```xaml
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="XamlSamples.GridDemoPage"
             Title="Grid Demo Page">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto" />
            <RowDefinition Height="*" />
            <RowDefinition Height="100" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="Auto" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="100" />
        </Grid.ColumnDefinitions>
        ...
    </Grid>
</ContentPage>
```
- 행과 열을 정의하기 위해서는 RowDefinitions과 ColumnDefinitions에 대한 속성 요소가 필요하다.

## xaml과 xaml.cs 파일간의 바인딩
- xaml = UI
- xaml.cs = 기능
```xaml
<Label Text="{Binding 바인딩할 변수}" />
```
1. cs 파일에서 prop 탭탭 / 문자 타입, 변수명 설정 ex) public string PHONE {get; set;}
2. 내부에서 사용할 private 선언 ex) private string m_strPHONE; / public string PHONE {get{ return m_strPHONE;} set{m_strPHONE = value; OnPropertyChanged();}}
3. public MainPage()안에 변수에 넣을 데이터 입력 ex) PHONE = "010-1234-5678"
4. 1번 클래스인 것을 명시 / ex) this.BindingContext = this;
