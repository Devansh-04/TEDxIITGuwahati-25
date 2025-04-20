import React, { useState, useEffect } from 'react';
import styles from './contactUs.module.css'
import ScrollButton from '../../components/scroll/ScrollButton';

const ContactUs = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
    comments: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);  

    const url = "https://script.google.com/macros/s/AKfycbwi3Fj33QEnEY9TSkLjE_9-PoBAPO6NIkq4jWEyNzbpv66M3nOt0UxhTQU3wiAyxW-U-g/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then((res) => res.text())
    .then(() => {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        comments: '',
        newsletter: false,
      });
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 2500);
    })
    .catch((error) => console.error('Error:', error))
    .finally(() => setIsSubmitting(false)); 
  };

  return (
    <>
      <div className={styles.main}>
      <div className={styles.background_image}></div>
      <div className={styles.blog_section}>
        <h1>Leave Us a Message!!</h1>
        <p>
          If you would like to subscribe to our Newsletter, have a question
          about an upcoming event, would like to explore a partnership with TEDxIITGuwahati, or want to send us a comment or suggestion, simply fill out the form below and we’ll get back to you shortly.
        </p>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name*"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact_number"
                placeholder="Contact Number*"
                value={formData.contact_number}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label htmlFor="newsletter">
                Sign me up for the TEDxIITGuwahati newsletter
              </label>
            </div>
            <div className={styles.button_container}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            <br></br>
            {successMsg && <p className={styles.successMsg}>Thank you for your response</p>}
          </form>
        </div>
      </div>
    </div>
    <ScrollButton/>
    </>
  );
};

export default ContactUs;
