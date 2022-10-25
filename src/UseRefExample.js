
                                         //useRef

 import React from 'react'
 
  const UseRefExample = () => {

  const Valueinput = useEffect(null);
  const Focastt= ()=>{
    Valueinput.current.Focastt()
    console.log(Valueinput.current.value)
  }


   return (
     <div>
      <input type="text" ref={Valueinput}/>
     <button onClick={Focastt}>Focastt</button>
     </div>
   )
 }
 export default UseRefExample;
                                 