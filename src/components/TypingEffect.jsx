import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
	const phrases = [
		'Inspired Designer ',
		'Art Sensible',
		'Intense Thinker',
		'Passionate Worker'
	];

	const [currentText, setCurrentText] = useState('');
	const [isTyping, setIsTyping] = useState(true);
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		const typeSpeed = 60;
		const eraseSpeed = 40;
		const pauseTime = 1200;

		if (isTyping) {
			if (charIndex < phrases[phraseIndex].length) {
				const timeout = setTimeout(() => {
					setCurrentText((prev) => prev + phrases[phraseIndex][charIndex]);
					setCharIndex((prev) => prev + 1);
				}, typeSpeed);

				return () => clearTimeout(timeout);
			} else {
				setTimeout(() => setIsTyping(false), pauseTime);
			}
		} else {
			if (charIndex > 0) {
				const timeout = setTimeout(() => {
					setCurrentText((prev) => prev.slice(0, -1));
					setCharIndex((prev) => prev - 1);
				}, eraseSpeed);

				return () => clearTimeout(timeout);
			} else {
				setPhraseIndex((prev) => (prev + 1) % phrases.length);
				setIsTyping(true);
			}
		}
	}, [charIndex, isTyping, phrases, phraseIndex]);

	return <>
		<div className="typing_effect">
			<p>	{currentText}</p>
		</div>

	</>;
};

export default TypingEffect;
