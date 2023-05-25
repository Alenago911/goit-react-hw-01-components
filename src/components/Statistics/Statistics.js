import React from 'react';
import PropTypes from "prop-types";


export const Statistics = ({ title, stats }) => {
    const getRandomColor = () => {
      const colors = ['#FF6384', '#e44478', '#2ddee1', '#5239a2', '#8b1477'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

  return (
    <section className="statistics">
          {title && <h2 className="title">{title}</h2>}
          <ul className="stats-listt">
              {stats.map((stat, index) => (
           <li key={index} className="item">
            <span className="label" style={{ backgroundColor: getRandomColor() }}>
              {stat.label}
                      </span>
           <span className="percentage">{stat.percentage}</span>
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