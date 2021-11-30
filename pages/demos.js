import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Layout from "../components/layout/Layout";

const Demos = ({repos}) => {

	const renderDemos = () => {
		let pages = []
		repos.forEach(repo => {
			if(repo.has_pages) {
				pages.push(repo)
			}
		})

		console.log(pages)

		return pages.map(page => (
			<div key={page.name}>
				<a target={"_blank"} rel={"noreferrer noopener"} href={`https://dom-the-dev.github.io/${page.name}`}>{page.name} demo</a>
			</div>
		))
	}

	return (
		<Layout>
			{renderDemos()}
		</Layout>
	);
};

Demos.propTypes = {

};

export async function getStaticProps() {
	const latestGithub = await axios.get(process.env.GITHUB_API_URL + 'users/dom-the-dev/repos?sort=asc')

	return {
		props: {
			repos: latestGithub.data,
		},
	}
}


export default Demos;