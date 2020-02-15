import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NumberFormatter } from '../fieldHelpers';

function Home() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.log('error', error);
      }
    }
    getArticles();
  }, []);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchStr = new RegExp(searchTerm, 'i');
    const results = articles.filter(
      article =>
        article.fname.match(searchStr) ||
        article.lname.match(searchStr) ||
        article.phone.match(searchStr)
    );
    setSearchResults(results);
  }, [searchTerm, articles]);

  return (
    <div>
      <Link to="/articles/new" className="btn btn-primary float-right">
        Create Article
      </Link>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((item, key) => (
          <li key={key}>
            <Link to={`/articles/${item._id}`}>
              {item.fname} {item.lname} - {NumberFormatter(item.phone)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
