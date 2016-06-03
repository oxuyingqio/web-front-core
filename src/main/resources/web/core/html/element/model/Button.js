/**
 * Button
 * 
 * 按钮对象
 * 
 * 接口
 */

/**
 * @method exist 元素是否存在
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 */
core.html.element.model.Button = new core.lang.Interface("core.html.element.model.Button", [ "exist", "show", "hide",
		"destroy", "convertHtml", "dealHtml" ]);