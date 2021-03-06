import React, {useState} from 'react';
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaShareAlt} from "@react-icons/all-files/fa/FaShareAlt";
import {FaTimes} from "@react-icons/all-files/fa/FaTimes";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";
import {FaDev} from "@react-icons/all-files/fa/FaDev";

const SocialMediaBadge = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={"fixed right-14 bottom-20 transform -translate-y-1/2 z-50 text-white"}>
            <a href={"https://twitter.com/Dom_TheDev"}
               rel="noreferrer noopener"
               target="_blank"
               title="Twitter"
               className={`rounded-full flex justify-center items-center w-10 h-10 absolute transition-all duration-700 ${show ? "bottom-4 opacity-100" : "-bottom-10 opacity-0 pointer-events-none"}`}
               style={{backgroundColor: '#1A8CD8'}}
            >
                <span className="sr-only">Twitter</span>
                <FaTwitter/>
            </a>

            <a href={"https://www.youtube.com/Domthedeveloper"}
               rel="noreferrer noopener"
               target="_blank"
               title="Twitter"
               className={`rounded-full flex justify-center items-center w-10 h-10 transition-all absolute duration-700 ${show ? "bottom-16 opacity-100" : "opacity-0 -bottom-10 pointer-events-none"}`}
               style={{backgroundColor: '#EE0007'}}
            >
                <span className="sr-only">YouTube</span>
                <FaYoutube/>
            </a>

            <a href={"https://github.com/dom-the-dev"}
               rel="noreferrer noopener"
               target="_blank"
               title="GitHub"
               className={`rounded-full flex justify-center items-center w-10 h-10 transition-all duration-700 absolute ${show ? "bottom-28 opacity-100" : "opacity-0 -bottom-10 pointer-events-none"}`}
               style={{backgroundColor: '#161B22'}}
            >
                <span className="sr-only">GitHub</span>
                <FaGithub/>
            </a>

            <a href={"https://dev.to/dom_the_dev"}
               rel="noreferrer noopener"
               target="_blank"
               title="DEV.to"
               className={`rounded-full flex justify-center items-center w-10 h-10 transition-all duration-700 absolute ${show ? "bottom-40 opacity-100" : "opacity-0 -bottom-10 pointer-events-none"}`}
               style={{backgroundColor: '#000000'}}
            >
                <span className="sr-only">DEV</span>
                <FaDev/>
            </a>

            <div className={`group rounded-full absolute w-10 h-10 border border-primary bg-primary`}>
            </div>

            <button
                type="button"
                title="toggle social media icons"
                onClick={() => setShow(!show)}
                className={`absolute ${show ? "text-white hover:text-dark" : "text-dark"} w-10 h-10 flex justify-center items-center transform hover:text-white`}>
                <span className="sr-only">Social Media Menu</span>
                {show ?
                    <>
                        <div className="sr-only">close social media icons</div>
                        <FaTimes/>
                    </>
                    :
                    <>
                        <div className="sr-only">open social media icons</div>
                        <FaShareAlt/>
                    </>
                }
            </button>

        </div>
    );
};

export default SocialMediaBadge;