import React from 'react';
import PropTypes from "prop-types";
import css from "./Statistics.module.css";


export const Statistics = ({ title, stats }) => {
    const getRandomColor = () => {
      const colors = ['#FF6384', '#e44478', '#2ddee1', '#5239a2', '#8b1477'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

  return (
    <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.statList}>
              {stats.map((stat, index) => (
           <li key={index} className={css.item}>
            <span className={css.label} style={{ backgroundColor: getRandomColor() }}>
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
 stats: PropTypes.object.isRequired,
}; 
