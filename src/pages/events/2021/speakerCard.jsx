import styles from './Event_21.module.css';
import React,{ useState } from "react";

const SpeakerCard = ({ name, id, image, func }) => {
    const [hoveredId, setHoveredId] = useState(null);
    return (
        <div className={styles.speaker} data-modal-target={id} onClick={func}>
            <div className={styles.blk}
                key={id}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
            >
                <img src={image} alt="Speaker Image" />
                <div className={styles.data}>
                  <h3>{hoveredId === id ? "Know more" : name}</h3>
                  
                   
                </div>
                

            </div>
        </div>
    );
}

export default SpeakerCard;