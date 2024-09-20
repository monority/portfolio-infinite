import React, { useState } from 'react';


const AccordionItem = ({ title, content, isOpen, onClick }) => {
	return (
		<div className="accordion-item">
			<div className="accordion-header" onClick={onClick}>
				<h2>{title}</h2>
				<svg
					className={`accordion-arrow ${isOpen ? 'open' : ''}`}
					xmlnsXlink="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24" height="24"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 15.5l-6-6h12z" />
				</svg>
			</div>
			<div className={`accordion-body ${isOpen ? 'open' : ''}`}>
				{content}
			</div>
		</div>
	);
};



const Accordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					content={item.content}
					isOpen={openIndex === index}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
