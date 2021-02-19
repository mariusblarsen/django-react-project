import React, { useState } from 'react';
import axios from 'axios';

export const Home: React.FC = () => {
	const [message, setMessage] = useState('...');
	const [count, setCount] = useState(() => {
		return 0;
	});

	const api = axios.create({
		baseURL: `http://localhost:8000/api/`,
	});

	function fetch() {
		api.get(`hello/`).then((res) => {
			setMessage(res.data['message'])
			console.log(res.data)
			setCount(prevCount => prevCount + 1)

		});
	}

	return (
		<div className="home">
			<button onClick={fetch}>Get data</button>
			<p>
				{message}
				{count}
			</p>
		</div>
	);
};