/* 适配代码开始 */
function adapter (){
	//1.获取当前手机的设备独立像素值
	const dp = document.documentElement.clientWidth
	//2.计算根字体
	const rootFontSize = dp/10
	//3.设置根字体的大小
	document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
//如果更改了布局视口的大小---实时适配
window.onresize = adapter
/* 适配代码结束 */

/* 交互逻辑 */
const footerItems = document.querySelectorAll('#footer .footer_item')
const footerIcons = document.querySelectorAll('#footer .footer_item .footer_icon')
const footerText = document.querySelectorAll('#footer .footer_item .footer_text')
const contentItems = document.querySelectorAll('#content .content_item')

for (let i = 0; i < footerItems.length; i++) {
	footerItems[i].addEventListener('touchstart',()=>{
		//1.去除所有高亮
		for (let j = 0; j < footerItems.length; j++) {
			footerIcons[j].className = 'footer_icon'
			footerText[j].className = 'footer_text'
			contentItems[j].className = 'content_item'
		}
		//2.点谁谁高亮
		footerIcons[i].className = 'footer_icon active'
		footerText[i].className = 'footer_text active'
		contentItems[i].className = 'content_item show'

	})
}