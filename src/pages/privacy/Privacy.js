// const Privacy = () => {
//     return (
//       <div>Privacy Page</div>
//     );
//   }
  
//   export default Privacy;


import React from "react";
import { useEffect } from 'react';
import styles from "./Privacy.module.css"; // Make sure to save your CSS in this file
import ScrollButton from '../../components/scroll/ScrollButton';

const Privacy = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  return (
    <>
      <div className={styles.priv_container}>
      <h1>Privacy Policy</h1>
      <p className="updated-date">Date updated: 11 January, 2024</p>

      <section className={styles.intro}>
        <h2>Introduction</h2>
        <p>Welcome to TEDxIITGuwahati.</p>
        <p>
          TEDxIITGuwahati (“us”, “we”, or “our”) operates tedxiitguwahati.com
          (hereinafter referred to as “Service”).
        </p>
        <p>
          Our Privacy Policy governs your visit to tedxiitguwahati.com, and explains how
          we collect, safeguard and disclose information that results from your use of
          our Service.
        </p>
        <p>
          We respect your privacy and take all reasonable steps to ensure personal
          information we collect, use, hold. This policy sets out how we handle the
          information we collect about you.
        </p>
      </section>

      <section className={styles.definition}>
        <h2>What is personal information?</h2>
        <p>
          Personal information is information or an opinion about an identified
          individual, or an individual who is reasonably identifiable, whether the
          information or opinion is true or not, and whether the information is recorded
          in a material form or not.
        </p>
      </section>

      <section className={styles.collection}>
        <h2>How do we collect and hold personal information?</h2>
        <p>
          We may collect your name, address, telephone number, email address, and other
          information you give to us. We collect personal information about you through
          our website, over the phone, and by email.
        </p>
        <p>
          Personal information is held securely, is subject to various security
          protections, and is held only for as long as the information remains relevant
          to the purpose for which it was collected.
        </p>
        <p>
          We take reasonable steps to ensure the security and integrity of the personal
          information we collect, store, use, and disclose, including restricted server
          access and other industry-standard security protocols such as complex password
          protection.
        </p>
      </section>

      <section className={styles.use}>
        <h2>Why do we collect your personal information?</h2>
        <p>We collect, hold, use, and disclose personal information about you for a number of reasons, including:</p>
        <ul>
          <li>Conducting the TEDxIITGuwahati events and activations;</li>
          <li>Registering attendees at TEDxIITGuwahati events;</li>
          <li>Encouraging connection between TEDxIITGuwahati members;</li>
          <li>Communicating with you (including responding to your queries and interacting with you on social media);</li>
          <li>Sending you marketing and other information about us;</li>
          <li>Maintaining and improving our organization and events;</li>
          <li>Sharing your personal information with TEDxIITGuwahati event sponsors, provided you have explicitly opted in to this disclosure.</li>
        </ul>
      </section>

      <section className={styles.access}>
        <h2>Access and correction</h2>
        <p>
          We will take all reasonable steps to ensure any personal data we collect, use,
          or disclose is up to date and accurate. If you believe personal information we
          hold about you is not up to date or accurate, you may ask us to correct it.
        </p>
        <p>
          You may ask us to provide you with details of the personal information we hold
          about you, and copies of that information. We will respond to your request and
          attempt to provide you with the data within a reasonable period of time.
        </p>
        <p>
          If we provide you with copies of the information you have requested, we may
          charge you a reasonable fee to cover the administrative costs of providing you
          with that information.
        </p>
        <p>
          Please direct all requests for access and correction to
          <a href="mailto:iitg.tedx@gmail.com"> iitg.tedx@gmail.com</a>.
        </p>
      </section>

      <section className={styles.disclose}>
        <h2>Do you disclose overseas?</h2>
        <p>No, we do not disclose personal information to overseas entities. We use Australian data servers to process information.</p>
      </section>

      <section className={styles.changes}>
        <h2>Does this policy change?</h2>
        <p>
          We will review and update this Privacy Policy from time to time as needed
          without notice. Therefore, you should review the terms of this policy
          periodically to make sure that you are aware of how we collect, hold, store,
          and use personal information.
        </p>
      </section>

      <section className={styles.contact}>
        <h2>How do I contact you?</h2>
        <p>
          If you consider a breach of your Privacy or your rights in relation to privacy
          has occurred, you can reach us via the Contact Us page on our website and we
          will attempt to resolve your complaint.
        </p>
      </section>
    </div>
    <ScrollButton/>
    </>
  );
};

export default Privacy;
