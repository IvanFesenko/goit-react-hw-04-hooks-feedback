import styles from './controls.module.scss';

function Controls({ handler }) {
  return (
    <div className={styles.controls}>
      <button
        type="button"
        name="good"
        onClick={handler}
        className={styles.btn}
      >
        good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={handler}
        className={styles.btn}
      >
        neutral
      </button>
      <button type="button" name="bad" onClick={handler} className={styles.btn}>
        bad
      </button>
    </div>
  );
}

export default Controls;
