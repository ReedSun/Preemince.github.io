/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Sunday, 9th September 2018 7:40:34 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Monday, 10th September 2018 7:59:23 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React from 'react';
import classNames from 'classnames';
import Link from 'umi/link';
import styles from './index.less';

function BasicLayout(props) {
  const { children } = props;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>ReedSun</div>
        <div className={styles.menu}>
          <Link
            className={classNames(styles.menuItem, {
              [styles.actionMenuItem]: location.pathname === '/',
            })}
            to="/"
          >
            首页
          </Link>
          <Link
            className={classNames(styles.menuItem, {
              [styles.actionMenuItem]: location.pathname.slice(0, 9) === '/torphies',
            })}
            to="/torphies"
          >
            成就
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BasicLayout;
