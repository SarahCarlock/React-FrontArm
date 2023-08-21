import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { Contact } from './Contact.js'
import { billionaires } from './billionaires.js'

function ContactList(props) {
  return (
    <div className='ContactList'>
      <h2 className='ContactList-title'>Contacts</h2>
      {props.children}
    </div>
  )
}

let contactElements = billionaires.map(billionaire =>
  // The ... adds all properties from `billionaire`
  // to the <Contact> element's props.
  <Contact {...billionaire} key={billionaire.email} />
)

ReactDOM.render(
  <ContactList>{contactElements}</ContactList>,
  document.getElementById('root')
)
