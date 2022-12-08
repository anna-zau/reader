import PropTypes from 'prop-types';

export const Publication = ({ item }) => {
  return (
    <article>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
