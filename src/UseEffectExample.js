export const UseEffectExample = () => {                           //useEffect
    const [contt , setcountt] = useState(0);
    useEffect(()=>{
      console.log('Hello Effects Go Example')
    } , [])
    return (
      <div>
        <button onClick={()=>setcountt (contt +1)}>+</button>
        <label>{contt}</label>
      </div>
    )
  }
  export default UseEffectExample;