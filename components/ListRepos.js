import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/List.module.scss'

const ListRepos = ({repos}) => (
    repos.map(repo => (
        <a href={repo.html_url} key={repo.name + repo.id} target="_blank" rel="noopener noreferrer">
            <div className={styles.listItem}>
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
