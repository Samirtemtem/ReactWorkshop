import { useEffect, useState } from 'react'
const CounterF = ({ initialCount = 0, step = 1 }) =>{
    console.log("CounterF : Render");
    const [count,setCount]=useState(initialCount);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },3000);
        return ()=>clearTimeout(timer);
    },[])

    useEffect(()=>{
        console.log("Component Did update");
    },[count])
    const handleClick = () =>{
        setCount((prev)=>prev + step);
    }
    const handleClickDec = () =>{
        setCount((prev)=>prev - step);
    }
    const handleReset = () => {
        setCount(initialCount);
    }
    return (
       <div className="container mt-4">
           <div className="card">
               <div className="card-body">
                   {loading ? 
                       <div className="text-center">
                           <div className="spinner-border text-primary" role="status">
                               <span className="visually-hidden">Loading...</span>
                           </div>
                       </div> 
                       : 
                       <>
                           <h2 className="card-title mb-4">Counter</h2>
                           <p className="display-4 text-center mb-4">Count = {count}</p>
                           <div className="d-flex justify-content-center gap-2">
                               <button className="btn btn-success" onClick={handleClick}>Incrementer +{step}</button>
                               <button className="btn btn-warning" onClick={handleClickDec}>Decrementer -{step}</button>
                               <button className="btn btn-danger" onClick={handleReset}>Reset</button>
                           </div>
                       </>
                   }
               </div>
           </div>
       </div>
    );
};
export default CounterF;