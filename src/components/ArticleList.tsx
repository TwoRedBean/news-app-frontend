import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../api/articleService";

interface Article {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
}

const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles()
        .then(setArticles)
        .catch((err) => setError(err.message));
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!articles.length) return <div>Loading articles...</div>;

    return (
        <div>
            <h1 className="home-page-title">News Articles</h1>
            <div className="card-container">
                {articles.map((article) => (
                    <div key={article.id} className="article-preview">
                        <Link to={`/articles/${article.id}`}>
                            <img src={article.imageUrl} alt={article.title}/>
                            <h2>{article.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;