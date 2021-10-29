import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/List.module.scss'
import Link from 'next/link'

const ListArticles = ({articles}) => (
    articles.map(article => {
            const createdAt = new Date(article.created_at).toLocaleDateString('en-US', {
                month: "short", day: "numeric", year: "numeric"
            })

            return <Link href={`/article/${article.id}`} key={article.slug + article.id}>
                <a>
                    <div className={styles.listItem}>
                        <h4>{article.title}</h4>
                        <h4>{article.category && article.category.name}</h4>
                        <span>{createdAt}</span>
                    </div>
                </a>
            </Link>
        }
    )
);

ListArticles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
};

export default ListArticles;
