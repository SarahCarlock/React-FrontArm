import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionaires.js'

let elements = []
for (let i = 0; i < billionaires.length; i++) {
  let contact = billionaires[i]
  let names = contact.name.split(' ')
  let initials = names.map(name => name[0].toUpperCase()).join('')
  let element =
    <div className='Contact' key={i}>
      <div className='Contact-avatar'>
        {initials}
        {contact.photoURL && <img src={contact.photoURL} />}
      </div>
      <span className='Contact-name'>
        {contact.name}
      </span>
      <a href={"mailto:"+contact.email}>
        {contact.email}
      </a>
    </div>
  elements.push(element)
}

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)
