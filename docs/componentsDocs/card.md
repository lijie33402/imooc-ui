# Card
卡片组件

### 示例

<m-card imgSrc="/imooc-ui/vue-cli.jpg" summary="card" />

### 代码
```html
<m-card imgSrc="/vue-cli.jpg" summary="card" />
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- |  ---  |   ---   |   ---   |
| width | 卡片宽度 |  Number  |   false   |   -   |
| imgSrc | 图片资源地址 |  String  |   true   |   -   |
| imgHeight | 图片高度 |  Number  |   false   |   -   |
| summary | 卡片概要 |  String/Slot  |   false   |   -   |
| footer | 底部 |  Slot  |   false   |   -   |