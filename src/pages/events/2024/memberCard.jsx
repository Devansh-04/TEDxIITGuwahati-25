import styles from './Event_24.module.css';
import React from 'react'

const memberCard = ({name, about, image}) => {

    return ( 
        <div className={styles.member}>
                <img src= {image} alt="Team member image" />
                <h3>{name}</h3>
                <h4>{about}</h4>
              </div>
     );
}
 
export default memberCard;