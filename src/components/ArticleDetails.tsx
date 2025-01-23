import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleById } from "../api/articleService";

interface Article {
    id: number;
    title: string;
    content: string;
}

const ArticleDetails: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [article, setArticle] = useState<Article | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetchArticleById(id)
                .then(setArticle)
                .catch((err: Error) => setError(err.message));
        }
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!article) return <div>Loading article...</div>;

    return (
        <div className="article-details">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <Link to={`/`}>Home</Link>
        </div>
    );
};

export default ArticleDetails;