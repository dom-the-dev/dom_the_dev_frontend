import React from 'react';
import {MdOpenInNew} from "@react-icons/all-files/md/MdOpenInNew";

const Project = ({title, description, url, image}) => {
    return (
        <div
            className={"flex border-t border-dark dark:border-white break-words flex-col sm:flex-row pb-5 pt-10 justify-between"}>

            <a className={`w-full md:w-1/2`} href={url} target="_blank" rel={"noopener noreferrer"}>
                <div className={`flex justify-center mb-10 sm:mb-0 sm:ml-5`}>
                    <img src={image} alt={`${title}-screenshot`}/>
                </div>
            </a>
            <div className={`flex flex-col md:w-1/2`}>
                <div className={`sm:ml-10`}>
                    <h4>{title}</h4>
                    <div className={`h-1 w-20 bg-primary  mt-5 mb-3`}/>
                    {description}
                    <div className={`mt-10`}>
                        <a href={url} className={`p-2 inline-block rounded-full border transition border border-primary text-dark dark:text-primary bg:text-primary bg-primary dark:bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark`} target="_blank"
                           rel={"noopener noreferrer"}>
                            <span className="sr-only">Visit</span>
                            <MdOpenInNew title={"Homepage"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {};

export default Project;
