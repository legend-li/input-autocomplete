/**
 * 作者：李增
 * 日期：2017/04/21
 * Email: 634401745@qq.com
 */

(function ($) {
    $.fn.extend({
        "autocomplete": function (obj) {
        	function appendList(list) {
				if(list.length>0){
					var keyListHtml = list.map(function(item) {
						return '<div style="width:100%;height:'+obj.height+';padding:0 10px;line-height:'+obj.height+';font-size:16px;color:#333;'+
						 'background-color:#fff;box-sizing:border-box;cursor:pointer;box-sizing:border-box;">'+item+'</div>';
					}).join('');
					//console.log(keyListHtml)
					$('#ac-list').css('display','block').html(keyListHtml);
					$('#ac-list>div').on('click', function(e) {
						e.stopPropagation();
						var key = $(this).text();
						$('#ac-input').val(key);
						$('#ac-list').css('display', 'none').html('');
						obj.callback(key);
					}).on('mouseenter', function() {
						$(this).css('background-color', '#f0f0f0');
					}).on('mouseleave', function() {
						$(this).css('background-color', '#fff');
					})
				}else{
					console.log('appendList方法接收到的list参数不是一个数组！');
				}
			}
            var inputHtml = '<input id="ac-input" type="text" placeholder="'+obj.placeholder+'" style="display:block;width:'+obj.width+';height:'+obj.height+
            ';font-size:16px;color:#333;padding-left: 10px;outline:none;border:1px solid #b8b8b8;background-color:white;'+
			' padding-right: 10px;box-sizing: border-box;border-radius: 3px;" /><div id="ac-list" style="z-index:999;position:absolute;top:'+obj.height+';left:0;display:none;width:'+
			obj.width+';max-height:500px;border:1px solid #ccc;box-sizing:border-box;overflow:auto;"></div>';
			this.html(inputHtml);
			$('#ac-input').on('input', function() {
				var key = $(this).val();
				if($.trim(key)){
					obj.callback(key);
					obj.onInput(key, appendList)
				}
			}).focus(function() {
				if($('#ac-list').children().length>0){
					$('#ac-list').css('display', 'block')
				}
			})
			$('html').on('click', function() {
				$('#ac-list').css('display','none')
			})
			$('#ac-input').on('click', function(e) {
				e.stopPropagation()
			})
        }
    });
})(jQuery);