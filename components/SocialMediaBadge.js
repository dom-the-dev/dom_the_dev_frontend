import React, {useState} from 'react';

const SocialMediaBadge = () => {
	const [show, setShow] = useState(false)

	return (
		<div className={"fixed right-14  bottom-20 transform -translate-y-1/2 "}>
			<a href={"https://twitter.com/Dom_TheDev"}
			   rel="noreferrer noopener"
			   target="_blank"
			   className={`flex justify-center items-center w-10 h-10 bg-primary absolute transition-all ${show ? " -top-16 opacity-100" : "top-0 opacity-0 pointer-events-none"}`}
			   style={{backgroundColor: '#1A8CD8'}}
			>
				<span className="sr-only">Twitter</span>
				T
			</a>

			<a href={"https://github.com/dom-the-dev"}
			   rel="noreferrer noopener"
			   target="_blank"
			   className={`flex justify-center items-center w-10 h-10 absolute transition-all ${show ? "right-7  opacity-100" : "right-0  opacity-0 pointer-events-none"}`}
			   style={{backgroundColor: '#161B22'}}
			>
				<span className="sr-only">GitHub</span>
				G
			</a>

			<div className={`group absolute w-10 h-10 bg-primary ${show && "animate-spin-slow"}`}>
			</div>

			<button
				type="button"
				onClick={() => setShow(!show)}
				className={`absolute text-white w-10 h-10 flex justify-center items-center transform -rotate-12 hover:text-dark ${show && "text-dark"}`}>
				<span className="sr-only">Social Media Menu</span>
				{show ? "X" : "S"}
			</button>

		</div>
	);
};

export default SocialMediaBadge;