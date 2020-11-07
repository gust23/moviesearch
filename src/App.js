import React, { useEffect, useState, useRef } from 'react';
import MovieCards from './components/movieCards';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifyInput } from './helpers/notifications';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) {
      notifyInput();
      return;
    }
    const queryURI = encodeURIComponent(query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ddcfabda19918d95b8166b9f5bcb67bb&language=en-US&query=${queryURI}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      notifyError();
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <h1 className='title'>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <div className='input-box'>
          <input
            className='input'
            type='text'
            name='query'
            placeholder='Search for your favorite movie'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
          />
          <button className='button' type='submit'>
            Search
          </button>
        </div>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default App;
