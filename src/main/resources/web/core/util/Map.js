/**
 * @name Map
 * @package core.util
 * @desc 映射
 * @type 类
 * 
 * @date 2016年8月19日 16:09:46
 */
core.util.Map = function() {

	/**
	 * 元素
	 */
	var elements = {};
	/**
	 * 元素个数
	 */
	var length = 0;

	/**
	 * 返回映射个数
	 * 
	 * @returns {Number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 映射是否包含键-值映射关系,未包含则返回 true。
	 * 
	 * @returns {Boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 映射是否包含指定键的映射关系,包含则返回 true。
	 * 
	 * @param key{Object}
	 *            键
	 * @returns {Boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 映射是否包含指定值的映射关系,包含则返回 true。
	 * 
	 * @param value{Object}
	 *            值
	 * @returns {Boolean}
	 */
	this.containsValue = function(value) {

		for (key in elements) {

			if (elements[key] === value) {
				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
	 * 
	 * @param key{Object}
	 *            键
	 * @returns {Object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定键-值映射保存;若存在键,则更新对应映射的值.
	 * 
	 * @param key{Object}
	 *            键
	 * @param value{Object}
	 *            值
	 * @returns
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;
		elements[key] = value;
	};

	/**
	 * 若存在指定键的映射关系,则将其删除.
	 * 
	 * @param key{Object}
	 *            键
	 * @returns
	 */
	this.remove = function(key) {

		this.containsKey(key) && length--;
		delete elements[key];
	};

	/**
	 * 清除映射中所有映射关系
	 * 
	 * @returns
	 */
	this.clear = function() {

		length = 0;
		elements = {};
	};
};