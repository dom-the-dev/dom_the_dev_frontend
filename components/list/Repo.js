import React from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {MdOpenInNew} from "@react-icons/all-files/md/MdOpenInNew";

const Repo = ({repo}) => {
	return (
		<div className={"flex border-t border-dark dark:border-white break-words flex-col pb-5 pt-10"}>
			<div className={`flex flex-col flex-grow`}>
				<h4>{repo.name}</h4>
				<div className={`h-1 w-20 bg-primary  mt-5 mb-3`}/>
				<p>{repo.description}</p>
				<div className={`flex justify-start mt-2`}>
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`text-xs p-2 rounded-full transition border dark:border-primary hover:border-primary text-dark dark:text-primary hover:text-primary bg:text-primary bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark`}>
						<span className="sr-only">See GitHub</span>
						<FaGithub title={"GitHub Repository"}/>
					</a>

					{repo.has_pages &&
						<a href={`https://dom-the-dev.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer"
						   className={`ml-2 text-xs p-2 rounded-full transition border dark:border-primary hover:border-primary text-dark dark:text-primary hover:text-primary bg:text-primary bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark`}>
							<span className="sr-only">Open website</span>
							<MdOpenInNew title={"GitHub Page"}/>
						</a>
					}

					{repo.homepage &&
						<a href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`} target="_blank" rel="noopener noreferrer"
						   className={`ml-2 text-xs p-2 rounded-full transition border dark:border-primary hover:border-primary text-dark dark:text-primary hover:text-primary bg:text-primary bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark`}>
							<span className="sr-only">Open website</span>
							<MdOpenInNew title={"Homepage"}/>
						</a>
					}

				</div>
			</div>

		</div>
	);
};

Repo.propTypes = {
	repo: PropTypes.object.isRequired
};

export default Repo;
