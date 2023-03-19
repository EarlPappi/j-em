import React from 'react'
import classes from './ContactForm.module.css'

function ContactForm() {
    return (
        <div className={classes.formCon}>
            <form action="">
                <div>
                    <input placeholder='Prénom' type="text" name="" id="" />
                    <input placeholder='Nom' type="text" name="" id="" />
                </div>
                
                <input placeholder='Sujet' type="text" name="" id="" />

                <label htmlFor="message">Message</label>
                <textarea name="" id="message" cols="30" rows="10" style={{ resize: 'none' }}></textarea>

                <button>ENVOYER</button>
            </form>
        </div>
    )
}

export default ContactForm