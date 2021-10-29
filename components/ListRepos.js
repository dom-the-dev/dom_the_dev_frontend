import React from 'react';
import PropTypes from 'prop-types';

const ListRepos = ({repos}) => (
    repos.map(repo => (
        <a href={repo.html_url} key={repo.name + repo.id} target="_blank" rel="noopener noreferrer">
            <div>
                <h4>{repo.name}</h4>
                <span>{repo.description}</span>
            </div>
        </a>
    ))
)

ListRepos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
};

export default ListRepos;
