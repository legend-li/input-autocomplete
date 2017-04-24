# 作者：李增 
# 日期：2017/04/21
# Email: 634401745@qq.com

# 插件功能：autocomplete.js是用来提供输入框智能补全搜索内容的，依赖于jQuery。

# build目录下面是产出的autocomplete.js插件
# example.html是用法例子
 
# 用法：
  引入的是开发版autocomplete插件: <script src="xx/autocomplete.js"></script>
  引入的是压缩版autocomplete插件: <script src="xx/autocomplete.min.js"></script>
  引入的是压缩加密版autocomplete插件: <script src="xx/autocomplete.min.encrypt.js"></script>
  $('.box').autocomplete({
 	width: '200px',
 	height: '30px',
 	placeholder: '请输入搜索字段',
 	onInput: function(key, appendList) {
		// 用法1：
 		 var list = ['大西瓜','菠萝','香蕉','苹果'];
 		 appendList(list);
 
 		// 用法2：
 		// $.post('http://rap.shangxiaxue.com/mockjs/4/driver/task/special_option?format=json', {
 		// 	key: key
 		// }, function(data, status) {
 		// 	if(data.data.length>0){
 		// 		appendList(data.data);
 		// 	}
 		// })
 	},
 	callback: function(val) {
 		//console.log('input输入框为：', val);
  	}
  });
  注意：.box元素的position值必须为relative或者absolute,overflow不能为hidden

# API：
  options: {
  	width: '', //输入框宽度[必须, 类型: String]
 	height: '', //输入框高度[必须, 类型: String]
 	placeholder: '', //输入框默认提示文案(placeholder属性)[可选, 类型: String]
    onInput: '', //在输入框触发input事件的时候，执行的方法; [必须, 类型: Function]
                 //该方法接收两个参数，第一个参数为key（当前输入框的值），第二个参数为appendList（接收一个参数list，该方法用来将接收到的提示关键字：list插入到input下面的下拉框中）
 	callback: '', //在输入框内容改变时执行的回调函数，函数接受一个参数，参数值为输入框的value[必须, 类型: Function]
  }

# 
