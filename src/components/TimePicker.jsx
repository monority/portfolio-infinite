import React, { useEffect , useState} from 'react'

const TimePicker = () => {

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date())

		}, 1000);
	}, [])

	return (
		<>
			<div id="realtime">
				<div className="wrapper">
					<p>{time.toLocaleTimeString()}</p>
				</div>
			</div>
		</>
	)
}

export default TimePicker