import React, { useState, useEffect } from "react";

const TimeDifference = ({ startDate }) => {
	const [timeDifference, setTimeDifference] = useState("");

	useEffect(() => {
		const calculateTimeDifference = () => {
			const start = new Date(startDate);
			const now = new Date();
			if (isNaN(start.getTime())) {
				setTimeDifference("Invalid date format! Please use YYYY-MM-DD");
				return;
			}
			const diffInMilliseconds = Math.abs(now - start);
			const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000; 
			const yearsDifference = (diffInMilliseconds / millisecondsInYear).toFixed(1);
			setTimeDifference(yearsDifference);
		};
		calculateTimeDifference();
	}, [startDate]);

	return (
		<div>
			<p>{timeDifference}</p>
		</div>
	);
};

export default TimeDifference;
