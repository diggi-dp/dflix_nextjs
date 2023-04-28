import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className={styles.container}>

        <h1>Contact Us</h1>

        <ContactCard />

        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>from you</span></h2>
          <ContactForm />
        </section>

      </div>

      <iframe
        className={styles.mapping}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6346082201585!2d72.52255697402121!3d23.073853814415003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2a23c0d3d1%3A0xec51e70d4fe404dc!2sCreative%20Encode%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682595834906!5m2!1sen!2sin"
        width={100} height={450} style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </>
  ) 
}

export default Contact
