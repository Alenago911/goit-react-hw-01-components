import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomColor from '../../helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((stat, index) => (
          <li key={index} className={css.item}>
            <span
              className={css.label}
              style={{ backgroundColor: getRandomColor() }}
            >
              {stat.label}
            </span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

