import React from 'react'
import './Cities.css'
function Cities() {
    const cities1 = [
        { id: 1, name: 'Car Rental In Mumbai' },
        { id: 2, name: 'Car Rental In Delhi' },
        { id: 3, name: 'Car Rental In Bangalore' },
        { id: 4, name: 'Car Rental In Hyderabad' },
        { id: 5, name: 'Car Rental In Ahmedabad' },
        { id: 6, name: 'Car Rental In Chennai' },
        { id: 7, name: 'Car Rental In Kolkata' },
        { id: 8, name: 'Car Rental In Surat' },
        { id: 9, name: 'Car Rental In Pune' },
        
    
   
      ];
   const cities2=[
    { id: 11, name: 'Car Rental In Jaipur' },
    { id: 12, name: 'Car Rental In Lucknow ' },
    { id: 13, name: 'Car Rental In Kanpur' },
    { id: 14, name: 'Car Rental In Nagpur' },
    { id: 15, name: 'Car Rental In Indore' },
    { id: 16, name: 'Car Rental In Thane' },
    { id: 17, name: 'Car Rental In Bhopal' },
    { id: 18, name: 'Car Rental In Visakhapatnam' },
    { id: 19, name: 'Car Rental In Patna' },
    
   ]
   const cities3=[
    { id: 21, name: 'Car Rental In Vadodara' },
    { id: 22, name: 'Car Rental In Ghaziabad' },
    { id: 23, name: 'Car Rental In Ludhiana' },
    { id: 24, name: 'Car Rental In Agra' },
    { id: 25, name: 'Car Rental In Nashik' },
    { id: 26, name: 'Car Rental In Faridabad' },
    { id: 27, name: 'Car Rental In Meerut' },
    { id: 28, name: 'Car Rental In Rajkot' },
    { id: 29, name: 'Car Rental In Srinagar' },
   
   ]
  return (
    <div className='fullcontainer_cities'>
    <h1 className='citiestext'>Serviceable Cities</h1>
    <div className='container_cities'>
    
    <ul>
      
      {cities1.map(city => (
        <>
        <li key={city.id} className='cities1'>{city.name}</li><br></br>
        </>
      ))}
    </ul>
    <ul>
    {cities2.map(city => (
        <>
        <li key={city.id} className='cities2'>{city.name}</li><br></br>
        </>
      ))}
    </ul>
    <ul>
    {cities3.map(city => (
        <>
        <li key={city.id} className='cities3'>{city.name}</li><br></br>
        </>
      ))}
    </ul>
  
  </div>
  
   </div>
  );
}
// Car Rental In BangaloreCar Rental In Hyderabad Car Rental In Ahmedabad
// Car Rental In KolkataCar Rental


  // Divide cities into groups of 10
 

export default Cities