import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({repo}) => {
    const copyCloneUrl = (url) => {
        navigator.clipboard.writeText(url);
    }

    return (
        <div className={"p-4 border border-white break-words"}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h4>{repo.name}</h4>
            </a>
            <span>{repo.description}</span>
            <button onClick={() => copyCloneUrl(repo.clone_url)}>clone</button>
        </div>
    );
};

Repo.propTypes = {
    repo: PropTypes.object.isRequired
};

export default Repo;
