import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validationFormatter'

export interface FormDataType {
       name: string
       email: string
       comments: string
}

const ContactForm: React.FC = () => {
    const DEFAULT_VALUES: FormDataType = {name: '', email: '',comments:'' }
    const [formData, setFormData] = useState <FormDataType>(DEFAULT_VALUES)
    const [errors, setErrors] = useState <FormDataType>(DEFAULT_VALUES)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean> (false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]:value}) // id är name, email och comments

        if (id === 'name')
              setErrors({...errors, [id]: validateText(id, value)})

        if (id=== 'email')
               setErrors({...errors, [id]:validateEmail(id, value)})
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'comments')
              setErrors({...errors, [id]: validateText(id, value, 5)})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)
        setFailedSubmit(false) //sätter båda till false så att alla felmeddelande tas bort
        console.log(0)

        if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
            console.log(1)
             if (errors.name === '' && errors.email === '' && errors.comments == ''){
                console.log(2)
                const res = await fetch ('http://localhost:5000/api/contact', {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)

                })
                if(res.status === 200){
                    console.log("Success")
                    setSubmitted(true)
                    setFormData(DEFAULT_VALUES)//tömer formuläret 
                } else {
                    console.log(res)
                    setSubmitted(false)
                    setFailedSubmit(true)
                }
            
             }

    }
  
  return (
    <section className="contact-form">
        <div className="container">
            {submitted ? (<AlertNotification alertType="success" title="Thank you for your comments" text="We will contact you as soon as possible."/> ) : (<></>)}
            {failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text="We couldn't submit your comments right now."/> ) : (<></>)}
                 
          

            <h2>Come in Contact with Us</h2>
            <form onSubmit={handleSubmit} noValidate> 
                <div>
                    <input id="name" className={(errors.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)}  type="text"
                     placeholder="Your name" />
                        <div className="errorMessage">{errors.name}</div>
                </div>
                <div>
                    <input id="email" className= {(errors.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email"
                    placeholder="Your Mail" />
                    <div className="errorMessage">{errors.email}</div>
                </div>
                    <div className="textarea">
                        <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border:'1px solid #FF7373'}: {} )}
                        value={formData.comments} onChange={(e) => handleTextAreaChange(e)} placeholder="Comments"></textarea>
                    </div>
                        <div className="formBtn">
                            <button type="submit" className="btn-theme">Post Comments</button>
                        </div>
            </form> 
            
        </div>
    </section>        
  )
  }

export default ContactForm