import PropTypes from "prop-types";

const Movie = ({ coverImg, title, rating, summary, genres }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={coverImg} alt={title} />
      <small>Rating: {rating}</small>
      <p>{summary}</p>
      <ul>
        {genres.map((ele, idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </ul>
      <br></br>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(String).isRequired,
};

export default Movie;
