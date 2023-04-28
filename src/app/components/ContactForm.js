'use client'

import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'
import { useState } from 'react'

const mulish = Mulish({
    weight: ['300', '400', '600', '500', '700', '800', '900'],
    subsets: ['latin'],
})

const ContactForm = () => {

    const [user, setUser] = useState({
        userName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [status, setStatus] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: user.userName,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            console.log(res)
            if (res.status === 200) {
                setUser({
                    userName: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setStatus("success") 
            } else {
                setStatus("error")
            }


        } catch (error) {

        }
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }


    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="userName" className={styles.label}>
                    Enter your name
                    <input value={user.userName} required autoComplete="off" onChange={handleChange} type="text" name='userName' id='userName'
                        placeholder='Enter your name...' className={mulish.className}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter your email
                    <input value={user.email} onChange={handleChange} type="email" name='email' id='email'
                        placeholder='Enter your email...' className={mulish.className}
                        required autoComplete="off"
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter your phone
                    <input value={user.phone} onChange={handleChange} type="number" name='phone' id='phone'
                        placeholder='Enter your phone...' className={mulish.className}
                        required autoComplete="off"
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Enter your message
                    <textarea value={user.message} onChange={handleChange} name='message' id='message' rows={5}
                        placeholder='Enter your message...' className={mulish.className}
                        required autoComplete="off"
                    />
                </label>
            </div>

            <div>
                {
                    status === 'success' && <p className={styles.success_msg}>Thank you for your message!!</p>
                }
                {
                    status === 'error' && <p className={styles.error_msg}>There was an error submitting you message!!</p>
                }
                <button type='submit' className={mulish.className}>
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
