import styles from "./Team.module.css";
import { FaLinkedin } from "react-icons/fa6";

const Teamidmobile = (img, name, position, linkedin) => {
    return (
        <div className={styles.Teamidmobile}>

            <div className={styles.linkedin}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={styles.icondiv}><FaLinkedin className={styles.icon} /></div>
                    <div className={styles.imageCircle}>
                        <img src={img} alt={`${name}`} />
                    </div>
                </a>
            </div>

             <div className={styles.imgTitleName}><p>{name}</p></div>
            <div className={styles.imgTitlePost}><p>{position}</p></div>
        </div>
    );
}

export default Teamidmobile;