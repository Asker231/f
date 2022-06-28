import React from 'react'
import Style from './card.style.module.css';
import {addCard} from '../../redux/cardSlice';
import { useDispatch } from 'react-redux';


function Card({url,title,diagonal,video,price}) {
  const dispatch = useDispatch();
  return (

      <div className={Style.card}>
        <img src={url}  alt="alt" />
           <p>{title}</p>
           <h6>{diagonal}</h6>
           <h5>{video}</h5>
           <span>{price}</span>
           <button onClick={()=>{
              dispatch(addCard({url,title,diagonal,video,price}))
           }}>Add shop</button>
      </div>
           

  )
}

export default Card