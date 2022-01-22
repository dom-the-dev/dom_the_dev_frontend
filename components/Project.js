import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Project = ({title, description, url, image}) => {
    return (
        <div className={`border`}>
            <Link href={url}>
                <a target="_blank" rel={"noopener noreferrer"}>
                    <img src={image} alt={`${title}-screenshot`}/>
                </a>
            </Link>
            <div className={`p-5`}>
                <h5 className={`uppercase font-normal`}>{title}</h5>
                <div className={`h-1 bg-primary rounded mt-2 mb-5`}/>
                {description}
                <div className={`mt-3 text-right`}>
                    <Link href={url}>
                        <a className={`text-dark bg-primary p-2`} target="_blank" rel={"noopener noreferrer"}>
                            Visit
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {};

export default Project;
