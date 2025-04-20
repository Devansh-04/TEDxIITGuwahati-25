import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ExclusiveBenefits.module.css';

export default function ExclusiveBenefits() {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const nonIitgBenefits = [
    "Access to all sessions in-person event in Main Hall",
    "Early access: get admitted early to the theatre for best seats",
    "Exclusive Access to meet & network with speakers",
    "Faster Registration process",
    "Networking with other attendees",
    "Access to Special Programming and Additional events",
    
  ];

  const extraBenefits = ["Q & A opportunities with speakers",
    "Quick access to main stage seats from priority gates",
    "& more benefits "
  ];

  return (
    <>
    <div className={styles.benefits_container}>
      <h2 className={styles.benefits_title}>Exclusive Benefits</h2>
      
      <div className={styles.section}>
        <h3 className={styles.section_title}>Non-IITG Attendees Pass Benefits</h3>
        <ul className={styles.benefit_list}>
          {nonIitgBenefits.map((benefit, index) => (
            <li key={index} className={styles.benefit_item}>
              <span className={styles.bullet_point}>•</span>
              {benefit}
            </li>
          ))}
        </ul>
        
        {showMoreBenefits && (
          <ul className={styles.benefit_list.extra_benefits}>
            {extraBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefit_item}>
                <span className={styles.bullet_point}>•</span>
                {benefit}
              </li>
            ))}
          </ul>
        )}
        
        <button
          onClick={() => setShowMoreBenefits(!showMoreBenefits)}
          className={styles.toggle_button}
        >
          {showMoreBenefits ? (
            <>Show Less <ChevronUp size={20} /></>
          ) : (
            <>Learn More <ChevronDown size={20} /></>
          )}
        </button>
      </div>

      <div className={styles.section}>
        <h3 className={styles.section_title}>IITG Students</h3>
        <div className={styles.student_benefits}>
          <h4 className={styles.student_heading}>Who can purchase a student ticket:</h4>
          <ul className={styles.benefit_list}>
            <li className={styles.benefit_item}>
              <span className={styles.bullet_point}>•</span>
              Students who have valid College ID Card of IITG
            </li>
            <li className={styles.benefit_item}>
              <span className={styles.bullet_point}>•</span>
              Students from the age of 8 to 12 years should be accompanied by an adult attendee. This conference is not open for children below 8 years
            </li>
            {/* <li className={styles.benefit_item.highlight}>
              <span className={styles.bullet_point}>*</span>
              This conference is not open for children below 8 years
            </li> */}
            {/* <li className={styles.benefit_item_highlight}>
              & benefits of general pass
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}