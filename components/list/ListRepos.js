import React from 'react';
import PropTypes from 'prop-types';
import ListElement from "./ListElement";

const ListRepos = ({repos}) => (
    repos.map(repo => (
        <a href={repo.html_url} key={repo.name + repo.id} target="_blank" rel="noopener noreferrer">
            <ListElement>
                <h4>{repo.name}</h4>
                <span>{repo.description}</span>
            </ListElement>
        </a>
    ))
)

ListRepos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
};

export default ListRepos;
