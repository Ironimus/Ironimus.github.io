import { useState, useRef, useEffect } from 'react'

const useTyping = (items, { typingSpeed = 11, delay = 1800, maxDeviations = 7, untypingSpeed = 18 } = {}) => {
	const timerId = useRef(null)

	const [currentItem, setCurrentItem] = useState(0)
	const [currentText, setCurrentText] = useState('')
	const [typingState, setTypingState] = useState('typing')

	useEffect(
		() => {
			if (typingState === 'typing') {
				timerId.current = setTimeout(() => {
					if (currentText.length < items[currentItem].length) {
						setCurrentText(prevText => items[currentItem].slice(0, prevText.length + 1))
					} else {
						setTypingState('pause')
					}
				}, 1000 / (typingSpeed - Math.floor(Math.random() * maxDeviations)))
			}

			if (typingState === 'pause' && delay) {
				timerId.current = setTimeout(() => {
					setTypingState(currentText.length === 0 ? 'typing' : 'untyping')
				}, delay)
			}

			if (typingState === 'untyping') {
				timerId.current = setTimeout(() => {
					if (currentText.length > 0) {
						setCurrentText(prevText => prevText.slice(0, -1))
					} else {
						setCurrentItem(prevItem => (prevItem === items.length - 1 ? 0 : prevItem + 1))
						setTypingState('pause')
					}
				}, 1000 / untypingSpeed)
			}

			return () => clearInterval(timerId.current)
		},
		[currentText, typingState]
	)

	const isGoing = typingState !== 'pause'

	return [currentText, isGoing]
}

export default useTyping
