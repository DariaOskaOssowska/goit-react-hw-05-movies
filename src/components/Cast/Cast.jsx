import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredits';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <img width={100} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`} alt={cast.name} />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;