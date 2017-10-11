document.querySelectorAll('[brokenWords]').forEach( item => {
	let arr = []
	let time = parseInt(item.dataset.time) || 10
	let delay = parseInt(item.dataset.delay)
	
	if (item.dataset.delay) {
		let classes = item.className.split(' ')
		item.className = ''
		item.style.opacity = 0

		setTimeout(() => {

			classes.map(classes => item.classList.add(classes))
			item.style.opacity = 1
			let filter = Array.prototype.filter.call(item.children, it => it.innerText === '')
			Array.prototype.map.call(filter, that => that.classList.add('span-ibaro'))
		}, delay * 1000)
	}


	item.textContent.trim().split('').map((letter, i) => {
		arr.push(`<span class="brokenWords" style="animation-delay: ${i/time}s;">${letter}</span>`)
	});

	item.innerHTML = arr.join('')
	let filter = Array.prototype.filter.call(item.children, it => it.innerText === '')
	Array.prototype.map.call(filter, that => that.classList.add('span-ibaro'))
});
