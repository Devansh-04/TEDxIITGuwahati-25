import pic1 from './pics/sponsors/swaglok.png';
import pic2 from './pics/sponsors/devilsburger.png';
import pic3 from './pics/sponsors/easemytrip.png';
import pic4 from './pics/sponsors/bigfm.jpeg';
import pic5 from './pics/sponsors/gplus.png';
import pic6 from './pics/sponsors/justassamthings.png';
import pic7 from './pics/sponsors/eastern chronicle.jpeg';
import pic8 from './pics/sponsors/startupnews.jpeg';
import styles from './sponsors.module.css';

const sponsors = [
    { img: pic1, title: "Merchandise Partner" },
    { img: pic2, title: "Dining Partner" },
    { img: pic3, title: "Travel Partner" },
    { img: pic4, title: "Radio Media Partner" },
    { img: pic5, title: "Associate Media Partner" },
    { img: pic6, title: "Digital Media Partner" },
    { img: pic7, title: "Media Partner" },
    { img: pic8, title: "Digital Media Partner" }
];

const Sponsors = () => {
    return (
        <>
            <div className={styles.heading_sponsors}>
                Sponsors & Media Partners
            </div>
            <div className={styles.scroll_container}>
                <div className={styles.scroll_content}>
                    {sponsors.concat(sponsors).map((sponsor, index) => ( // Duplicated array for infinite loop effect
                        <div className={styles.slide} key={index}>
                            <div className={styles.sponsor_item}>
                                <img src={sponsor.img} alt={sponsor.title} />
                                <p className={styles.sponsor_title}>{sponsor.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sponsors;
