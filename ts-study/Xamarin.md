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
- TextColor를 사용하려면 시작태그와 끝 태그로 구분하여 빈 요소 Label 태그 열고 새 태그의 콘텐츠로 
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
