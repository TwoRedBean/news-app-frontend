const BASE_URL = "http://localhost:8080/api/articles";

/**
 * Fetches all articles
 */
export const fetchArticles = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
};

/**
 * Fetch article by ID
 * @param id - Article ID
 */
export const fetchArticleById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch article with ID ${id}`);
  }
  return response.json();
};