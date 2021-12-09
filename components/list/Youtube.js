import React from 'react';
import PropTypes from 'prop-types';

const Youtube = ({vid}) => {
    const {snippet} = vid
    const buttonStyle = `border border-t-0 flex-grow text-center py-2 font-bold uppercase hover:bg-primary transition-background duration-500 ease-in-out`

    return (
        <div className={"flex flex-col"}>
        <div className={"flex flex-col md:flex-row border border-white break-words "}>
            {snippet.thumbnails ? <img className={"w-full"} src={snippet.thumbnails.medium.url} alt=""/> : null}
            <div className={"p-4"}>
                <h4>{snippet.title}</h4>
                <p>{snippet.description}</p>
            </div>
        </div>

            <a href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank" rel="noopener noreferrer"
               className={`${buttonStyle}`}>
                <h4>Watch</h4>
            </a>
        </div>
    );
};

Youtube.propTypes = {
    vid: PropTypes.object.isRequired
};

export default Youtube;
