import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './Event_22.module.css';
const Modal = ({name, about, description, image, func, youtubeLink}) => {
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY  = "scroll";
    }
  })
      return (
        <div className={styles.popUp} id="Plabita">
        <div className={styles.popUpHeader}>
          <div className={styles.popUptitle}>{name}</div>
          <button data-close-button onClick={func} className={styles.closeBtn}>
            ×<div className={styles.circle}>×</div>
          </button>
        </div>
        <hr />
        <div className={styles.popUpBody}>
          <div className={styles.speakerImg}>
            <img src= {image} alt="speaker image" />
            <h2>{about}</h2>
          </div>

          <div className={styles.description}>
            <p>
              {description}
              <div className={youtubeLink ? styles.watchTalk : styles.hideLink}>
          {youtubeLink ? (
           <a
            href={`https://www.youtube.com/watch?v=${youtubeLink}`} 
            target="_blank"
            rel="noopener noreferrer"
            
           >
          Watch Talk
            </a>
           ) : null}
          </div>
            </p>
          </div>
          </div>
          </div>
        )
}

export default Modal;