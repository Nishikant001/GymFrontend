import React from 'react'
import './cardimg.css'
import Card from 'react-bootstrap/Card';

function Cardimg(props) {
  return (
    <div  >
       <Card body className='j  aspect-ratio-16-9'>
            <img src={props.img} alt="" height={300} width={300} />
        </Card>;

      
    </div>
  )
}

export default Cardimg
