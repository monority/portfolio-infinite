import { useState, useEffect } from 'react';

const AgeCount = () => {
	const [age, setAge] = useState(0);

	useEffect(() => {
		const birthDate = new Date('1994-03-28');

		const updateAge = () => {
			const currentDate = new Date();
			const ageInMilliseconds = currentDate - birthDate;
			const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); 
			setAge(ageInYears.toFixed(8)); 
		};

		const intervalId = setInterval(updateAge, 10);
		updateAge();

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<p id="age">{age}</p>
		</>
	);
};

export default AgeCount;
