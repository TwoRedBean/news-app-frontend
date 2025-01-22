import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api/articleService";

interface Article {
    id: number
    title: string
    content: string
}

const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles()
        .then(setArticles)
        .catch((err) => setError(err.message))
    })

    if (error) return <div>Error: {error}</div>
    if (!articles.length) return <div>Loading articles...</div>

    return (
        <div>
            <h1>News Articles</h1>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default ArticleList;