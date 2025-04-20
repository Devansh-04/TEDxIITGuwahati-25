import styles from "./location.module.css";
const Location = () => {
    return (
        <div className={styles.maplocation}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.1989595483715!2d91.68947447519828!3d26.190205377085185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac3dddc3601%3A0xfff84915e863cea1!2sAdministrative%20Block%2C%20IIT%20Guwahati!5e0!3m2!1sen!2sin!4v1734669677398!5m2!1sen!2sin" 
                 className={styles.map}
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        
               <div className={styles.location}>
                 <h2>Conference Venue</h2>
                 <h1>Hosted in IIT Guwahati</h1>
                 <p>It's time that we give the leaders around us a stage to discuss their ideas worth spreading.
                    Join us at our IN-PERSON event to be held at Indian Institute of Technology in Guwahati.<br></br>
                    Mini Auditorium<br></br>
                    IIT Guwahati, India<br></br>
                    781039
                  </p>
                  <a href="https://maps.app.goo.gl/2dkMRZNZyQbS2sW26" target="_blank"><button>View Location</button></a>
               </div>
        </div>
    );
}
 
export default Location;