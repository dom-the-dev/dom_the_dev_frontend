import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';

const Youtube = ({vid}) => {
    const {snippet} = vid
    const buttonStyle = `border border-t-0 flex-grow text-center py-2 font-bold uppercase hover:bg-primary transition-background duration-500 ease-in-out`

    return (
        <div className={"border"}>
                {snippet.thumbnails ?
                    <div className={"w-full"}>
                        <img
                            alt={`${snippet.title} Thumbnail`}
                            src={snippet.thumbnails.high.url}
                        />
                    </div>
                    : null}
                <div className={"p-4"}>
                    <h4>{snippet.title}</h4>
                    <div className={`h-1 bg-primary rounded mt-2 mb-5`}/>
                    <p>{snippet.description}</p>
                    <div className={`mt-5 text-right`}>
                        <a className={`text-dark bg-primary p-2`} href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank" rel="noopener noreferrer">
                            Watch
                        </a>
                    </div>
                </div>
        </div>
    );
};

Youtube.propTypes = {
    vid: PropTypes.object.isRequired
};

export default Youtube;
