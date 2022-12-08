// currentItem, totalItem - position of the publication and total number ofpublications

import PropTypes from 'prop-types';

export const Controls = ({ currentItem, totalItem, onChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
      >
        Back
      </button>
      <button
        type="button"
        disabled={currentItem === totalItem}
        onClick={() => onChange(+1)}
      >
        Forward
      </button>
    </section>
  );
};

Controls.propTypes = {
  currentItem: PropTypes.number.isRequired,
  totalItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
