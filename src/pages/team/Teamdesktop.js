import Teamiddesktop from "./Teamiddesktop";
import styles from "./Team.module.css"
const Teamdesktop = () => {
    return (
        <div className={styles.Teamdesktop}>
            <h1>Meet Our Core Team</h1>
            <h4>The Core team here at TEDxIITGuwahati is made up of a diverse bunch of awesome humans!</h4>
            <p>We are driven by passion and curiosity. We are inspired by ideas. And we want to leave the world better than we found it. In our day
               lives you can find us working in design, computer science, chemistry, biology, finance, NGOs, arts, business, psycology, health and 
               everything in between. We work year round to bring TEDxIITGuwahati and all of our activities to life.</p>
            <div className={styles.Teamdesktopdetails}>
            
              {Teamiddesktop("images/team/Pranati_Tandon4_enhanced.png","Pranati Tandon","Licensee","https://www.linkedin.com/in/pranati-tandon-a002b127a/")}
              {Teamiddesktop("images/team/Devesh_Kamble_enhanced.png","Devesh Kamble","Co-Licensee & Marketing Head","https://www.linkedin.com/in/devesh-kamble")}
              {Teamiddesktop("images/team/Tanvi_enhanced.png","Tanvi Doshi","Content Head","https://www.linkedin.com/in/tanvi-doshi-ba951b28b")}
              {Teamiddesktop("images/team/Shubham2_enhanced.png","Shubham Yadav","Content Core","https://www.linkedin.com/in/yadvshubham/")}
              {Teamiddesktop("images/team/Meghana_enhanced.png","Meghana Nelapati","WebOps Head","https://www.linkedin.com/in/meghana-nelapati-556b21261/")}
              {Teamiddesktop("images/team/Dharani_enhanced.png","Dharani Lunavath","Creatives Head","https://www.linkedin.com/in/dharani-lunavath-609b40233/")}
              {Teamiddesktop("images/team/Atharva3_enhanced.png","Atharva Sant","Events Head","https://www.linkedin.com/in/atharva-sant-b88511295/")}
              {Teamiddesktop("images/team/Naman2_enhanced.png","Naman Sharma","Events Core","https://www.linkedin.com/in/naman-sharma-57734199/")}
              {Teamiddesktop("images/team/Japleen2_enhanced.png","Japleen Kaur","Speakers Head","https://www.linkedin.com/in/japleen-kaur-b10377260/")}
              {Teamiddesktop("images/team/Anaswara2_enhanced.png","Anaswara","Speaker Core","https://www.linkedin.com/in/anaswara-p-c-b99355141/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}
              {Teamiddesktop("images/team/Divya2.png","Divya Sahiti","PR & Media Head","https://www.linkedin.com/in/divya-sahiti-yerramsetti-499a0924b/")}
              {Teamiddesktop("images/team/Ayush2_enhanced.png","Aayush Agarwal","PR & Media Core","https://www.linkedin.com/in/aayush-agarwal-iitg/")}
            </div>
            </div>
       
    );
}
 
export default Teamdesktop;