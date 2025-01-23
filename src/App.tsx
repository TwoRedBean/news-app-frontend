import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="articles/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;