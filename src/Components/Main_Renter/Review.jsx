import React from 'react'
import './Review.css'
function Review() {
  return (
    <>
    
    <h2 className='reviewtext'>Happy Customers</h2>
    
   
  <div className="container_review">
  
   {data.map((d) =>(
         
       <div className="reviews">
            <div className='personicon' > 
                <p className='cusname' >{d.customername}</p>
            </div>
           <p className='textreview'>{d.review}</p>
           
       </div>
   ))}
   </div>

    </>
  )
}
const data=[
    {
        
       customername:'Dhruv Dave',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus nobis similique neque sed tempora explicabo accusantium, commodi nulla adipisci nemo rem excepturi, nesciunt iusto vero delectus provident! Incidunt, minus?",
        
    },
  
    {
        customername:'Harsh Patel',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus nobis similique neque sed tempora explicabo accusantium, commodi nulla adipisci nemo rem excepturi, nesciunt iusto vero delectus provident! Incidunt, minus?",
    },
   {
    customername:'Harshil Patel',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus nobis similique neque sed tempora explicabo accusantium, commodi nulla adipisci nemo rem excepturi, nesciunt iusto vero delectus provident! Incidunt, minus?",
   },

   {
    customername:'Om patel',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus nobis similique neque sed tempora explicabo accusantium, commodi nulla adipisci nemo rem excepturi, nesciunt iusto vero delectus provident! Incidunt, minus?",

   }
]
export default Review