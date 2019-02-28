export const smoothScroll = (target, duration = 500) =>
	new Promise(resolve => {
		const timingFunc = t => t * t
		let start = null
		const step = timestamp => {
			start = start || timestamp
			const progress = timestamp - start
			const time = Math.min(1, (timestamp - start) / duration)
			window.scrollBy(0, timingFunc(time) * (target - window.scrollY))
			if (progress < duration) {
				window.requestAnimationFrame(step)
			} else {
				resolve()
			}
		}
		window.requestAnimationFrame(step)
	})

export const findByUrl = (url, subtree) => {
	let item = subtree.find(i => i.url === url)
	if (item) {
		return item
	}
	subtree.find(i => i.children && (item = findByUrl(url, i.children)))
	if (item) {
		return item
	}
}

export const changeTreeElement = (subtree, testFunc, newEl) => {
	const _subtree = [...subtree]
	const index = _subtree.findIndex(testFunc)
	if (index !== -1) {
		_subtree[index] = {
			..._subtree[index],
			...(typeof newEl === 'function' ? newEl(_subtree[index]) : newEl),
		}
		return _subtree
	}
	return _subtree.map(
		i =>
			i.children
				? {
						...i,
						children: changeTreeElement(i.children, testFunc, newEl),
				  }
				: i
	)
}
