import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/list.module.scss'
import Link from 'next/link'

const ListArticles = ({articles}) => (
    articles.map(article => (
        <Link href={`/article/${article.id}`} key={article.slug + article.id}>
            <a>
                <div className={styles.listItem}>
                    {console.log(article)}
                    <h4>{article.title}</h4>
                    <h4>{article.category && article.category.name}</h4>
                    <span>{article.created_at}</span>
                </div>
            </a>
        </Link>
    ))
);

ListArticles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
};

export default ListArticles;
