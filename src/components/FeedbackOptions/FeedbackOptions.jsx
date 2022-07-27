import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.wrap}>
      {options.map(key => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
