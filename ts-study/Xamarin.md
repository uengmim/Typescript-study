# Xamarin

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
``xaml
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

### 연결된 속성
#### Grid
- 행과 열을 나타내는 방법으로 Grid에 대한 태그 내에서 Grid.Row와 Grid.Column 특성을 사용하여 자식의 행과 열을 지정한다.
- 기본값은 0이기 때문에 둘 이상의 행과 열에 걸쳐 있는지 여부를 나타낼 수 있다.
```xaml
<Label Text="Autosized cell"
 Grid.Row="0" Grid.Column="0"
 TextColor="White"
 BackgroundColor="Blue" />
 ```
#### AbsoluteLayout 바둑판 패턴
- AbsoluteLayout은 여러 개의 엘리먼트들을 가질 수 있는 layout
- Absolute 라는 이름처럼 layout 안에서 x와 y의 좌표를 이용해 정확한 위치 지정 가
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
