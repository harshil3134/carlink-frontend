import React from 'react'
import "./Filter.css"
function Filter() {
  return (
    <div className="filter">
        <p className='filtertext'>Filter</p>
        <div className="carsegment">
            <p className='segment'>Segment</p>
            
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="vehicle1"><span> Hackback</span> </label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label htmlFor="vehicle2"> Sedan</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label htmlFor="vehicle3"> Suv</label><br/><br/>
        
        </div>
        <div className="carsegment">
            <p className='segment'>Brands</p>
            
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label htmlFor="vehicle1"><span> Maruti Suzuki</span> </label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label htmlFor="vehicle2"> TATA</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label htmlFor="vehicle3"> Skoda</label><br/>
  <input type="checkbox" id="vehicle4" name="vehicle4" value="Boat"/>
  <label htmlFor="vehicle3"> Honda</label><br/>
  <input type="checkbox" id="vehicle5" name="vehicle5" value="Boat"/>
  <label htmlFor="vehicle5"> Hyundai</label><br/>
  <input type="checkbox" id="vehicle6" name="vehicle6" value="Boat"/>
  <label htmlFor="vehicle6"> Kia</label><br/>
  <input type="checkbox" id="vehicle7" name="vehicle7" value="Boat"/>
  <label htmlFor="vehicle7"> Toyota</label><br/>
  <input type="checkbox" id="vehicle8" name="vehicle8" value="Boat"/>
  <label htmlFor="vehicle8"> Volks Wagen </label><br/>
  <input type="checkbox" id="vehicle9" name="vehicle9" value="Boat"/>
  <label htmlFor="vehicle9"> Nissan</label><br/>
  <input type="checkbox" id="vehicle10" name="vehicle10" value="Boat"/>
  <label htmlFor="vehicle10"> Renault</label><br/>
  <input type="checkbox" id="vehicle11" name="vehicle11" value="Boat"/>
  <label htmlFor="vehicle11"> Ford</label><br/><br/>
  </div>
  <div className="carsegment">
    <p className='segment'>Fuel Type</p>
            
<input type="checkbox" id="petrol" name="petrol" value="Bike"/>
  <label htmlFor="petrol"><span> Petrol</span> </label><br/>
  <input type="checkbox" id="diesel" name="diesel" value="Car"/>
  <label htmlFor="diesel"> Diesel</label><br/>
  <input type="checkbox" id="cng" name="cng" value="Boat"/>
  <label htmlFor="cng"> CNG</label><br/>
  <input type="checkbox" id="ev" name="ev" value="Boat"/>
  <label htmlFor="ev"> EV</label><br/>
  <input type="checkbox" id="Hybrid" name="hybrid" value="Boat"/>
  <label htmlFor="hybrid"> Hybrid</label><br/><br/>
  
</div>
<div className="carsegment">
    <p className='segment'>Fuel Type</p>
            
<input type="checkbox" id="manual" name="manual" value="Bike"/>
  <label htmlFor="manual"><span> Manual</span> </label><br/>
  <input type="checkbox" id="auto" name="auto" value="Car"/>
  <label htmlFor="auto"> Automatic</label><br/>  <br/>
        </div>
    </div>
  )
}

export default Filter