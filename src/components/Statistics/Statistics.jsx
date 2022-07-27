import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.wrap}>
      <p className={s.text}>good : {good}</p>
      <p className={s.text}>neutral : {neutral}</p>
      <p className={s.text}>bad : {bad}</p>
      <p className={s.text}>Total : {total}</p>
      <p className={s.text}>
        Positive feedback : {positivePercentage ? positivePercentage : 0} %
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
