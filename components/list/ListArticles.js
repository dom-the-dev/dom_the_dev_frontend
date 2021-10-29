import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import ListElement from "./ListElement";

const ListArticles = ({articles}) => (
    articles.map(article => {
            const createdAt = new Date(article.created_at).toLocaleDateString('en-US', {
                month: "short", day: "numeric", year: "numeric"
            })

            return <Link href={`/article/${article.id}`} key={article.slug + article.id}>
                <a>
                    <ListElement>
                        <h4>{article.title}</h4>
                        <h4>{article.category && article.category.name}</h4>
                        <span>{createdAt}</span>
                    </ListElement>
                </a>
            </Link>
        }
    )
);

ListArticles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
};

export default ListArticles;
