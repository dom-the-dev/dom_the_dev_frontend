import React from 'react';
import PropTypes from 'prop-types';
import Repo from "./Repo";
import Youtube from "./Youtube";

const ListRepos = ({repos, videos}) => {

    const renderContent = () => {
        if (repos) {
            return repos.map(repo => (
                <Repo key={repo.name + repo.id} repo={repo}/>
            ))
        }

        if (videos) {
            return videos.map(vid => (
                <Youtube key={vid.id.videoId} vid={vid}/>
            ))
        }
    }

    return (
        <div className={"grid gap-4 grid-col-1"}>
            {renderContent()}
        </div>
    )
}

ListRepos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
};

export default ListRepos;
