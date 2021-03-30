import React from 'react'
import {Card} from 'react-bootstrap'

 const Footer =()=>{


return(

<div>   
<Card className="text-center  bg-secondary">
<Card.Header>Featured</Card.Header>
<Card.Body>
<Card.Title className='text-dark'><i>MEDLIVERY</i></Card.Title>
<Card.Text className=' text-white text-center'>
<p className='lead '><i> At our core is a collection of design and development solutions that represents everything  <br />
your business needs to compete in the modern marketplace.</i>
</p> 

<p className='text-dark'><strong className=''>Our Location</strong> <br/> Plot 20339 Phakalane <br/> Gaborone <br/> Botswana</p>
<p className='text-dark'><strong>Contact info</strong> <br/> (+267) 76364834 <br/> (+267) 74321804 <br/> mathubaraphael@gmail.com</p>

</Card.Text>
</Card.Body>
<Card.Footer className="">2 days ago</Card.Footer>
</Card>








</div> 

)
}

export default Footer


  
     