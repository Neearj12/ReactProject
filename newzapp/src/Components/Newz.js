import React, { useState, useEffect } from 'react';
import Newzitem from './Newzitem';

const Newz = () => {
  const [state, setState] = useState({
    articles: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=012aa2d194ea43b3a609441a82953ea8');
        const data = await response.json();

        // Use the correct property name from the response
        const fetchedArticles = data.articles || [];

        setState({
          articles: fetchedArticles,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
        setState({
          articles: [],
          loading: false,
        });
      }
    };

    fetchData();

    // If you want to simulate componentWillUnmount, you can return a cleanup function
    return () => {
      // Cleanup code (optional)
    };
  }, []);

  return (
    <div className='container my-3'>
      <h2>News Monkey - Top Headline</h2>
      <div className='row'>
        {state.articles.map((article, index) => (
          <div className='col-md-4' key={index}>
            <Newzitem
              title={article.title}
              description={article.description}
              imgurl={article.urlToImage}
              newzurl={article.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newz;
