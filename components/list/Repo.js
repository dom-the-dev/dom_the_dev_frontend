import React from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {MdOpenInNew} from "@react-icons/all-files/md/MdOpenInNew";

const Repo = ({repo}) => {
	return (
		<div className={"flex border-t border-dark break-words flex-col pb-5 pt-10"}>
			<div className={`flex flex-col flex-grow`}>
				<h4>{repo.name}</h4>
				<div className={`h-1 w-20 bg-primary  mt-5 mb-3`}/>
				<p>{repo.description}</p>
				<div className={`flex justify-start mt-2`}>
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`text-xs text-dark bg-primary p-2 rounded-full`}>
						<span className="sr-only">See GitHub</span>
						<FaGithub title={"GitHub Repository"}/>
					</a>

					{repo.has_pages &&
						<a href={`https://dom-the-dev.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer"
						   className={`text-xsml-2 text-dark bg-primary p-2 rounded-full`}>
							<span className="sr-only">Open website</span>
							<MdOpenInNew title={"GitHub Page"}/>
						</a>
					}

					{repo.homepage &&
						<a href={repo.homepage} target="_blank" rel="noopener noreferrer"
						   className={`text-xs ml-2 text-dark bg-primary p-2 rounded-full`}>
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
