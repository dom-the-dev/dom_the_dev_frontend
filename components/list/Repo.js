import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({repo}) => {
	const buttonStyle = `flex-grow text-center py-2 font-bold uppercase hover:bg-primary transition-background duration-500 ease-in-out`

	return (
		<div className={"flex border border-white break-words flex-col"}>
			<div className={`p-4 flex-grow`}>
				<h4>{repo.name}</h4>
				<p>{repo.description}</p>
			</div>
			{console.log(repo)}
			<div className={`flex`}>
				<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`border-t ${buttonStyle}`}>
					<h4>code</h4>
				</a>

				{repo.has_pages &&
				<a href={`https://dom-the-dev.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer"
				   className={`border border-b-0 ${buttonStyle}`}>
					<h4>demo</h4>
				</a>
				}

			</div>
		</div>
	);
};

Repo.propTypes = {
	repo: PropTypes.object.isRequired
};

export default Repo;
