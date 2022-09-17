import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistic = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(stat => {
                    return (
                        <li className={css.item} key={stat.id}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};