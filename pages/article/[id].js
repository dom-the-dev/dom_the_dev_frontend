import React from 'react';
import {useRouter} from 'next/router'
import PropTypes from 'prop-types';
import Layout from "../../components/layout/Layout";

const Article = props => {
    const router = useRouter()
    const {id} = router.query

    return (
        <Layout>
            Article ID: {id}
        </Layout>
    );
};

Article.propTypes = {};

export default Article;
