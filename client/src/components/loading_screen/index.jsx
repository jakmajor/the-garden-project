import React from 'react'
import styles from './index.module.css'

export default function LoadingScreen({
  title,
  content,
  size = '45'
}) {
  return (
    <div className={`${styles.load_wrap}`}>
      <div className={`${styles.load}`}>
        <div style={{ height: size + 'px', width: size + 'px' }} className={`${styles.spinner}`}>
          <div style={{ height: size / 2 + 'px', width: size / 2 + 'px' }} className={`${styles.bubble_1}`}></div>
          <div style={{ height: size / 2 + 'px', width: size / 2 + 'px' }} className={`${styles.bubble_2}`}></div>
        </div>
      </div>
      {title &&
        <h2 className={`marg-bottom-10 marg-top-30`}>
          {title}
        </h2>
      }
      {content &&
        <div className={`${styles.content}`}>
          <p>
            {content}
          </p>
        </div>
      }
    </div>
  );
}
