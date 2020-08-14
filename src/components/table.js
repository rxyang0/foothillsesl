import React from 'react';

import styles from './table.module.scss';

export default ({ title, edges }) => (
  <section className={styles.sectionTable}>
    <h1 className={styles.title}>{title}</h1>
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
        {edges.map(({ node }, index) => (
          <tr className={index % 2 === 0 ? styles.altRow : ""} key={node.title}>
            <td className={styles.cell} dangerouslySetInnerHTML={{__html: node.date}}></td>
            <td className={styles.cell} dangerouslySetInnerHTML={{__html: node.title}}></td>
            <td className={styles.cell} dangerouslySetInnerHTML={{__html: node.description}}></td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
