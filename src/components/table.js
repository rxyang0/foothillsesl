import React from 'react';

import styles from './table.module.scss';
import ClassesData from '../../content/classes.yaml';
import EventsData from '../../content/events.yaml';

export default ({ name }) => {
  const Data = {
    classes: ClassesData,
    events: EventsData
  }[name];
  return (
    <section className={styles.sectionTable}>
      <h1 className={styles.title}>{name}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr>
            <td colSpan="100%"><hr /></td>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr className={index % 2 === 0 ? styles.altRow : ""} key={data.title}>
              <td className={styles.cell} dangerouslySetInnerHTML={{__html: data.date}}></td>
              <td className={styles.cell} dangerouslySetInnerHTML={{__html: data.title}}></td>
              <td className={styles.cell} dangerouslySetInnerHTML={{__html: data.description}}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
