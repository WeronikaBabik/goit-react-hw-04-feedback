import PropTypes from 'prop-types';
import css from '../App/App.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  const listOfOptions = Object.keys(options);
  return (
    <div className={css.buttons}>
      {listOfOptions.map(option => (
        <button
          type="button"
          name={option}
          className={css.btnFeedback}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
