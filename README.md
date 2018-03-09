# Message
Bootstrap风格的提示方式

可提供成功、提醒、警告和错误反馈信息。
顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式，类似Ant Design的提示组件。

组件的使用方式和参数如下：
$('body').message({type: 'success', content: '交易成功！', duration: 3})

type--类型，包括‘success’，‘info’，‘warning’和‘danger’，默认值‘info’
content--提示内容	
duration--自动关闭的延时，单位秒，默认值3

