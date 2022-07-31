import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

const Detail: React.FC = () => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.noLayout]: true,
      })}
    >
      <div className={styles.myLayout}>自己的Layout</div>
      detail
    </div>
  );
};

export default Detail;
