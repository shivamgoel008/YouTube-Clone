import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';

const Watch = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
  return (
    <div>Watch</div>
  )
}

export default Watch;
