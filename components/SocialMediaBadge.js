import React, {useState} from 'react';
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaShareAlt} from "@react-icons/all-files/fa/FaShareAlt";
import {FaTimes} from "@react-icons/all-files/fa/FaTimes";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";

const SocialMediaBadge = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={"fixed right-14  bottom-20 transform -translate-y-1/2 z-50 text-white"}>
            <a href={"https://twitter.com/Dom_TheDev"}
               rel="noreferrer noopener"
               target="_blank"
               title="Twitter"
               className={`text-xs flex justify-center items-center w-10 h-10 bg-primary absolute transition-all ${show ? " -top-16 opacity-100" : "top-0 opacity-0 pointer-events-none"}`}
               style={{backgroundColor: '#1A8CD8'}}
            >
                <span className="sr-only">Twitter</span>
                <FaTwitter/>
            </a>

            <a href={"https://www.youtube.com/Domthedeveloper"}
               rel="noreferrer noopener"
               target="_blank"
               title="Twitter"
               className={`text-xs flex justify-center items-center w-10 h-10 bg-primary absolute  ${show ? " -top-16 right-7 opacity-100" : "top-0 opacity-0 pointer-events-none"}`}
               style={{backgroundColor: '#EE0007'}}
            >
                <span className="sr-only">YouTube</span>
                <FaYoutube/>
            </a>

            <a href={"https://github.com/dom-the-dev"}
               rel="noreferrer noopener"
               target="_blank"
               title="GitHub"
               className={`flex justify-center items-center w-10 h-10 absolute transition-all ${show ? "right-7  opacity-100" : "right-0  opacity-0 pointer-events-none"}`}
               style={{backgroundColor: '#161B22'}}
            >
                <span className="sr-only">GitHub</span>
                <FaGithub/>
            </a>

            <div className={`group absolute w-10 h-10 bg-primary ${show && "animate-spin-slow"}`}>
            </div>

            <button
                type="button"
                title="toggle social media icons"
                onClick={() => setShow(!show)}
                className={`absolute text-dark w-10 h-10 flex justify-center items-center transform -rotate-12 hover:text-white ${show && "text-dark"}`}>
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