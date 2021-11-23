import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    useEffect(() =>
            fetch('https://web-dev-node2123.herokuapp.com/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const [movies, setMovies] = useState([]);
    const deleteMovie = (movie) =>
        fetch(`https://web-dev-node2123.herokuapp.com/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    const [movie, setmovie] = useState({title: '', rating: 2.5});
    const onMovieTitleChange = (event) => {
        setmovie({...movie, title: event.target.value});
        console.log(movie);
    }

    const createMovieClickHandler = () => {
        fetch('https://web-dev-node2123.herokuapp.com/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    const saveMovie = () => {
        fetch(`https://web-dev-node2123.herokuapp.com/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={() => setmovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>
                            <button
                                onClick={saveMovie}
                                className="btn btn-primary ms-2 float-end">
                                Save
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )

                }
                <div className={"row"}>
                    <div className={"col-10"}>
                        <input className="form-control"
                               value={movie.title}
                               onChange={onMovieTitleChange}
                               style={{width: "70%"}}/>
                    </div>
                    <div className={"col-2"}>
                        <button
                            onClick={createMovieClickHandler}
                            className="btn btn-success float-end">
                            Create
                        </button>
                    </div>

                </div>

            </ul>
        </div>
    )
};
export default MovieApiClient;