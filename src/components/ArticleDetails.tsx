import React, {useEffect, useState} from "react";
import { fetchArticleById } from "../api/articleService";

interface Article {
    id: number;
    title: string;
    content: string;
}

const ArticleDetails: React.FC = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticleById("1")
        .then(setArticle)
        .catch((err: Error) => setError(err.message));
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!article) return <div>Loading article...</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetails;