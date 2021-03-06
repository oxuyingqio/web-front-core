/**
 * @name	Interface
 * @package	core.lang
 * @desc	接口
 * @type	类
 * 
 * @date	2016年8月20日 09:35:10
 */

/**
 * 构造函数
 * 
 * @param name{string}
 *            接口名称
 * @param methods{array
 *            <string>} 接口方法集合
 */
core.lang.Interface = function(name, methods) {

	// 判断参数个数
	if (arguments.length !== 2) {

		new core.lang.Exception(arguments, "core.lang.Interface", "构造参数异常", "构造参数个数必须为2个,实际得到" + arguments.length + "个.");
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0; i < methods.length; i++) {

		if (typeof (methods[i]) !== "string") {

			new core.lang.Exception(methods[i], "core.lang.Interface", "构造参数异常", "接口方法名必须为字符串.");
		} else {

			this.methods.push(methods[i]);
		}
	}
};

/**
 * 接口方法检查-静态方法
 * 
 * 检查对象是否实现对应接口的方法
 * 
 * @param object{object}
 *            对象
 * @returns
 */
core.lang.Interface.ensureImplements = function(object) {

	// 判断参数个数
	if (arguments.length < 2) {

		new core.lang.Exception(arguments, "core.lang.Interface.ensureImplements", "方法参数异常", "参数个数至少为2个.首参数为实现接口的对象,后续参数为实现的接口对象.");
	}

	// 遍历实现的接口对象
	for (var i = 1; i < arguments.length; i++) {

		// 获取实现的接口对象
		var _interface = arguments[i];

		// 接口对象是否存在
		if (_interface) {

			// 存在,则检查接口对象是否为core.lang.Interface类
			if (_interface.constructor !== core.lang.Interface) {

				new core.lang.Exception(_interface, "core.lang.Interface.ensureImplements", "方法参数异常", "传入对象非core.lang.Interface对象.");
			}
		} else {

			new core.lang.Exception(_interface, "core.lang.Interface.ensureImplements", "方法参数异常", "传入接口对象不存在");
		}

		// 遍历接口方法
		for (var j = 0; j < _interface.methods.length; j++) {

			// 获取接口方法
			var method = _interface.methods[j];

			// 接口方法不存在,或类型不为方法
			if (!object[method] || typeof (object[method]) !== "function") {

				new core.lang.Exception(object, "core.lang.Interface.ensureImplements", "接口方法未实现异常", "传入对象未实现接口" + _interface.name + "(" + method + ")方法.");
			}
		}
	}
};