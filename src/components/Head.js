import React, { useEffect, useState } from 'react'
import { toggleMenu ,value} from './utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchapi } from './utils/constants';
import { cacheResults } from './utils/searchSlice';
import List from './List';
const Head = () => {
const [searchquery,setsearchquery] =useState("");
const [suggestion,setsuggestions] = useState([]);
const [showsuggestions,setshowsuggestions] = useState(true)
const searchCache =useSelector((store)=>store.search)
const [val,setvalue]=useState("");
  const dispatch = useDispatch();

  const dispatchvalue =(e)=>{
    // console.log(e);
    dispatch(value(e));
    setsearchquery(e);
    
    // console.log(e);
   }
  const handletoggleMenu = ()=>{
    dispatch(toggleMenu());
  }

  useEffect(()=>{
    // console.log(searchquery)
    
    const timer =setTimeout(()=> {
      if(searchCache[searchquery]){
        // console.log(searchCache[searchquery])
        setsuggestions(searchCache[searchquery])
      }else{
        getsearchSuggestions();
      }
    },200);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchquery])

  const getsearchSuggestions = async()=>{
    const suggestion =await fetch(searchapi+searchquery);
    const suggestionJson= await suggestion.json();
    // console.log(suggestionJson[1]);
    setsuggestions(suggestionJson[1])

    dispatch(
      cacheResults({
        [searchquery]:suggestionJson[1],
      })
    )

  }
  

  

  return (
    <>
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex  col-span-1">
            <img 
             onClick={()=>handletoggleMenu()}
             className="h-8 cursor-pointer"
             alt="menu" 
             src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
             />

            <Link to="/">
            <img 
             className="h-8" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU"/>
            </Link>
        </div>   
      {/* <h1>head</h1> */}
      <div className="col-span-10 px-10">
        <div>
        <input 
        className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        value={searchquery}
        onChange={(e)=> setsearchquery(e.target.value)}
        onFocus={()=>setshowsuggestions(true)}
    
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full" >Search</button>
        </div>
       <div className='absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'
    
       >
          
            {
              suggestion.map((e,index)=>  {
               return <><div 
                className="cursor-pointer  w-[34rem] "
                onFocus={()=>setshowsuggestions(true)}
                onBlur={()=>setshowsuggestions(false)}
                onClick={()=>setshowsuggestions(false)}
                 >
                  {/* {showsuggestions && <List key={index} i={e}/>} */}
               {showsuggestions && <Link to="/">
                <div
                className='py-2 px-3 shadow-sm  hover:bg-gray-300'
                
                onClick={()=>dispatchvalue(e)}
                >
                {e}
                </div>
                </Link>}
                  
                  
                  
                  
                  
                  </div>
                  </>
              }
               )
            }
         
        

        </div>
       </div>
       <div className="col-span-1">
        <img className="h-8" alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdagfNlkCXKS54rDkgY6CjGNtPECsI_SZlKQ&usqp=CAU"/>
       </div>
      </div>
    </>
  )
}

export default Head;
