import React ,{useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { value } from './utils/appSlice';
import { Link } from 'react-router-dom';

const List = ({i}) => {
  
 
  const dispatch =useDispatch();
  const dispatchvalue =(e)=>{
    // console.log(e);
    dispatch(value(e));
    
    // console.log(e);
   }
 
  return (
    <Link to="/">
    <div
     className='py-2 px-3 shadow-sm  hover:bg-gray-300'
     onClick={()=>dispatchvalue(i)}
     >
     {i}
    </div>
    </Link>
  )
}

export default List
