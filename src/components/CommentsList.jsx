import React from 'react'
import Comment from './Comment'

const CommentsList = () => {
  return (
    <div className='py-8 mx-8 w-[885px] h-[498px] shadow-2xl '>
        <h3>Comments</h3>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default CommentsList