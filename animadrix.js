var AnimaDrix = function () {
  this.element = document.querySelectorAll('[brokenWords]')
  this.time = 10
  this.delay = 0
}

AnimaDrix.prototype.includeSpaceOnSpanOrSvg = function (_item) {
  var _filter = Array.prototype.filter.call(_item.children, function (it) { return it.innerText === '' })
  Array.prototype.map.call(_filter, function (that) { that.classList.add('span-ibaro') })
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
        _context.includeSpaceOnSpanOrSvg(_item)
      }, _delay * 1000)
    }

    var _items = _item.textContent.trim().split('')

    Array.prototype.map.call(_items, function (letter, i) {
      span.push('<span class="brokenWords" style="animation-delay: ' + i / _time + 's;">' + letter + '</span>')
    })

    _item.innerHTML = span.join('')
    _context.includeSpaceOnSpanOrSvg(_item)

    if (_item.classList.contains('draw')) {
    	var _svgText = _item.textContent
	    var _itemStyle = window.getComputedStyle(_item)
	    var _colorSvg = _itemStyle.getPropertyValue('color')


      _item.innerHTML = '<svg id="brokenSvg"><text y="65" class="brokenWords">' + _svgText + '</text></svg>'
      _context.includeSpaceOnSpanOrSvg(_item)
	    

      var _svg = _item.querySelector('svg text')

      if (_itemStyle.getPropertyValue('text-align') === 'center') {
	    	_svg.setAttribute('x', Math.floor(_item.clientWidth / 2) - Math.floor(_svg.clientWidth / 2))
	    }

	    _svg.setAttribute('style', 'stroke:' + _colorSvg + ';')

	    _svg.addEventListener('animationend', function () {
	    	this.setAttribute('style', 'fill:' + _colorSvg + ';transition: all .9s')
	    })
    }
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
