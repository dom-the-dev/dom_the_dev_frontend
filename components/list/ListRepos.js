import React from 'react';
import PropTypes from 'prop-types';
import ListElement from "./ListElement";
import Repo from "./Repo";

const ListRepos = ({repos}) => (
    <div className={"grid gap-4 grid-col-1"}>
        {repos.map(repo => (
            <Repo key={repo.name + repo.id} repo={repo}/>
        ))}
    </div>
)

ListRepos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
};

export default ListRepos;
