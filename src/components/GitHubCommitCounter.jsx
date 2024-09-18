import React, { useState, useEffect } from 'react';

const GitHubCommitCounter = () => {
	const [totalCommits, setTotalCommits] = useState(0);
	const [loading, setLoading] = useState(true);

	const username = 'monority';
	const token = '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';

	useEffect(() => {
		const fetchCommits = async () => {
			let total = 0;
			setLoading(true);

			try {

				const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
					headers: {
						Authorization: `token ${token}`,
					},
				});
				const repos = await reposResponse.json();


				for (const repo of repos) {
					const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`, {
						headers: {
							Authorization: `token ${token}`,
						},
					});
					const commits = await commitsResponse.json();
					total += commits.length;
				}

				setTotalCommits(total);
			} catch (error) {
				console.error('Error fetching commit data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCommits();
	}, [username, token]);
	return (
		<>
			{loading ? (
				<p>Loading commit data...</p>
			) : (
				<>
					<p>Total Commits</p>
					<p>{totalCommits}</p>
				</>
			)}
		</>
	);
};

export default GitHubCommitCounter;
