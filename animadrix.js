var AnimaDrix = function () {
	this.element = document.querySelectorAll('[brokenWords]')
	this.time = 10
	this.delay = 0
}

AnimaDrix.prototype.includeSpaceOnSpan = function (_item) {
	var _filter = Array.prototype.filter.call(_item.children, function (it) { return it.innerText === ''})
	Array.prototype.map.call(_filter, function (that) {that.classList.add('span-ibaro')})
}

AnimaDrix.prototype.init = function () {
	var _context = this

	Array.prototype.forEach.call(this.element, function (_item, i) {

		var _delay = parseInt(_item.dataset.delay) || _context.delay
		var _time = parseInt(_item.dataset.time) || _context.time
		var span = []

		if (_item.dataset.delay) {
			var _classes = _item.className.split(' ')

			_item.className = ''
			_item.style.opacity = 0

			setTimeout(function () {
				_item.style.opacity = 1

				_classes.map(function (_classes) { _item.classList.add(_classes) })
				_context.includeSpaceOnSpan(_item)
			}, _delay * 1000)
		}

		var _items = _item.textContent.trim().split('')


		Array.prototype.map.call(_items, function (letter, i) {
			span.push('<span class="brokenWords" style="animation-delay: '+ i / _time + 's;">' + letter + '</span>')
		})

		_item.innerHTML = span.join('')
		_context.includeSpaceOnSpan(_item)
	})
}

AnimaDrix.prototype.scrollAnima = function () {
	var _bodyScroll = document.body.scrollTop
	var _context = this

	Array.prototype.forEach.call(this.element, function (_item) {
		var _itemOffset = _item.offsetTop

		if (_item.dataset.scroll) {
			if (_bodyScroll >= _itemOffset) {

			}
		}
	})
}


var animaDrix = new AnimaDrix()
animaDrix.init()
animaDrix.scrollAnima()
