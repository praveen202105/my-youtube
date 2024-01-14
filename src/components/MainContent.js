import { useEffect } from 'react' 
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import {openMenu} from './utils/appSlice'


const MainContent = () => {
  
  const dispatch =useDispatch();
  useEffect(()=>{
   dispatch(openMenu())
  },[]);

  return (
    <>
    <div>
      main
      <ButtonList/>
      <VideoContainer/>
      </div>
    </>
  )
}

export default MainContent
