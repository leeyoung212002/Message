# Message
Bootstrap风格的提示方式

可提供成功、提醒、警告和错误反馈信息。
顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式，类似Ant Design的提示组件。

示例：
<script>
	function success(){
		$('body').message({
			type: 'success',
			content: '交易成功！',
			duration: 3
		})
	}
	
	function info(){
		$('body').message({
			type: 'info',
			content: '交易信息！',
			duration: 3
		})
	}
	
	function warning(){
		$('body').message({
			type: 'warning',
			content: '交易报警！',
			duration: 3
		})
	}
	
	function danger(){
		$('body').message({
			type: 'danger',
			content: '交易失败！',
			duration: 3
		})
	}
</script>
		
<div class="btn_group">
	<button onclick="success()">success</button>
	<button onclick="info()">info</button>
	<button onclick="warning()">warning</button>
	<button onclick="danger()">danger</button>
</div>

API
组件的使用方式和参数如下：
$('body').message({type: 'success', content: '交易成功！', duration: 3})

参数	    说明	                  类型	  默认值
type	    类型	                  string	‘info’
content	  提示内容	              string	
duration	自动关闭的延时，单位秒	number	3

