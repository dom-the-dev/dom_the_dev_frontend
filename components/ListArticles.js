import React from 'react';
import PropTypes from 'prop-types';

const ListArticles = ({articles}) => (
    articles.map(article => (
        <div key={article.id} style={{border: '1px solid', marginTop: 5}}>
            <p>{article.title}</p>
            <p>{article.category.name}</p>
            <p>{article.description}</p>
        </div>
    ))
);

ListArticles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
};

export default ListArticles;
