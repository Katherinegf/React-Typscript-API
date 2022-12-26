import React from 'react'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import MapSection from '../sections/MapSection'
import ContactForm from '../sections/ContactForm'

const ContactsView: React.FC = () => {
  return (
    <>
        <MainMenu /> 
        <Breadcrumb currentPage="Contact"/> 
        <MapSection /> 
        <ContactForm />
    </>
  )
}

export default ContactsView