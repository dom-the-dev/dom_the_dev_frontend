import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {AiFillYoutube} from "@react-icons/all-files/ai/AiFillYoutube";

const Youtube = ({vid}) => {
    const {snippet} = vid

    return (
        <div className={"flex border-t border-dark break-words flex-col-reverse sm:flex-row pb-10 pt-10 justify-between"}>
            <div className={`flex flex-col`}>
                <h4>{snippet.title}</h4>
                <div className={`h-1 w-20 bg-primary  mt-5 mb-3`}/>
                <p>{snippet.description}</p>
                <div className={`mt-5`}>
                    <a className={`text-sm inline-block rounded-full text-dark bg-primary p-2`}
                       href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank"
                       rel="noopener noreferrer">
                        <AiFillYoutube/>
                        <span className="sr-only">watch video</span>
                    </a>
                </div>
            </div>
            {snippet.thumbnails ?
                <a
                    href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank"
                    rel="noopener noreferrer">
                <div className={`flex justify-center mb-10 sm:mb-0 sm:ml-5`}>
                    <img
                        alt={`${snippet.title} Thumbnail`}
                        src={snippet.thumbnails.high.url}
                    />
                </div>
                </a>
                : null}
        </div>
    );
};

Youtube.propTypes = {
    vid: PropTypes.object.isRequired
};

export default Youtube;
