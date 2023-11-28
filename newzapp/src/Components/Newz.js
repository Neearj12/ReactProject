import React, { useState, useEffect } from 'react';
import Newzitem from './Newzitem';

const Newz = () => {
  const [state, setState] = useState({
    page: 1,
    articles: [],
    loading: true,
  });

  // Set your category here
  const category = 'business';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=012aa2d194ea43b3a609441a82953ea8&page=${state.page}`);
        const data = await response.json();

        if (response.ok) {
          // Only update articles if the fetch was successful
          setState((prevState) => ({
            ...prevState,
            articles: data.articles,
            loading: false,
          }));
        } else {
          // Handle error state if needed
          setState((prevState) => ({
            ...prevState,
            articles: [],
            loading: false,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
        setState((prevState) => ({
          ...prevState,
          articles: [],
          loading: false,
        }));
      }
    };

    fetchData();

    // If you want to simulate componentWillUnmount, you can return a cleanup function
    return () => {
      // Cleanup code (optional)
    };
  }, [state.page, category]); // Include state.page and category in the dependency array to trigger the effect when they change

  const handleNextClick = async () => {
    setState((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
      loading: true, // Set loading to true when fetching new data
    }));
  };

  const handlePrevClick = async () => {
    if (state.page > 1) {
      setState((prevState) => ({
        ...prevState,
        page: prevState.page - 1,
        loading: true, // Set loading to true when fetching new data
      }));
    }
  };

  return (
    <div className='container my-3'>
      <h1 className="text-center">News Monkey - Top Headline</h1>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
          <div className="container d-flex justify-content-between">
            <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
              &larr; Prev
            </button>
            <button type="button" className="btn btn-dark" onClick={handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newz;
