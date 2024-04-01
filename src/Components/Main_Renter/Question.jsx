import React from 'react'
import './Question.css'
function Question() {
  return (
    <>
    <h2 className='faq'>FAQs</h2>
    <div className="container_faq">
   
   {data.map((d) =>(
       <div className="faqs">
           <p className='question'>{d.question}</p>
           <p className='answer'>{d.answer}</p>
           
       </div>
   ))}
   </div>
    </>
  )
}

const data=[

    {
        question:'Is there a speed limit?',
        answer:'CarLink allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.'
    },
    {
        question:'Can I extend/ cancel/ modify?',
        answer:'Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy..'
    },
    {
        question:'Booking criteria & documents?',
        answer:'Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence.'

    },
    {
        question:'Are there any restricted areas?',
        answer:'Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take CarLink cars. Customer will be fully liable for any damages incurred to the car in that region.'
    }
]
export default Question