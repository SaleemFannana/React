import { Button } from 'bootstrap';
import React , {useState,useEffect , useRef} from 'react'
                                                            //useState
const UseStaeee = () => {

  const [count,setcount]=useState(0) ;
  const handelinscec = ()=>{
    setcount( count + 1 )
  }
  const unhandelinscec = () =>{
    setcount( count - 1 )

  }
  return (
    <div>
      <button onClick={handelinscec} >+</button>
      <button onClick={unhandelinscec}>-</button>
      <label>count is the {count}</label>
    </div>
  )
}

export default UseStaeee;


                                                       



     