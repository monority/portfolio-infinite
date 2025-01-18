import React, { useState, useEffect } from 'react';

const GitHubCommitCounter = () => {
	const [totalCommits, setTotalCommits] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const username = 'monority';
	const token = import.meta.env.VITE_PRIVATE_TOKEN_ID;

	useEffect(() => {
		const fetchCommits = async () => {
			setLoading(true);
			setError(null);
			let total = 0;

			try {

				let repos = [];
				let page = 1;
				let hasMoreRepos = true;

				while (hasMoreRepos) {
					const reposResponse = await fetch(
						`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
						{
							headers: {
								Authorization: `token ${token}`,
							},
						}
					);

					if (!reposResponse.ok) {
						throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
					}

					const reposPage = await reposResponse.json();
					repos = repos.concat(reposPage);
					hasMoreRepos = reposPage.length === 100;
					page++;
				}


				const commitPromises = repos.map(async (repo) => {
					let commitCount = 0;
					let commitPage = 1;
					let hasMoreCommits = true;

					while (hasMoreCommits) {
						const commitsResponse = await fetch(
							`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=100&page=${commitPage}`,
							{
								headers: {
									Authorization: `token ${token}`,
								},
							}
						);

						if (!commitsResponse.ok) {
							if (commitsResponse.status === 409) {

								return 0;
							}
							throw new Error(`Failed to fetch commits for ${repo.name}: ${commitsResponse.statusText}`);
						}

						const commitsPage = await commitsResponse.json();
						commitCount += commitsPage.length;
						hasMoreCommits = commitsPage.length === 100;
						commitPage++;
					}

					return commitCount;
				});

				const commitCounts = await Promise.all(commitPromises);
				total = commitCounts.reduce((sum, count) => sum + count, 0);
				setTotalCommits(total);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCommits();
	}, [username, token]);

	return (
		<>
			{loading ? (
				<p className="text_color03">Loading commit data...</p>
			) : error ? (
				<p className="text_color03" style={{ color: 'red' }}>
					Error: {error}
				</p>
			) : (
				<>
					<p className="text_color03">Total Commits</p>
					<p>{totalCommits}</p>
				</>
			)}
		</>
	);
};

export default GitHubCommitCounter;
