import React from 'react'

const commentsData=[
    {
        name:"praveen",
        text:"hello my name is praveen",
        replies:[
        {
                 name:"adarsh",
                 text:"hello my name is praveen",
                 replies:[
                    {
                        name:"rahul",
                        text:"hello my name is praveen",
                        replies:[
                        {
                                 name:"praveen",
                                 text:"hello my name is praveen",
                                 replies:[
                                    
                                 ]  
                        }
                    ]
                    }
                 ]  
        }
    ]
    },
    {
        name:"praveen",
        text:"hello my name is praveen",
        replies:[
        {
                 name:"adarsh",
                 text:"hello my name is praveen",
                 replies:[
                    {
                        name:"rahul",
                        text:"hello my name is praveen",
                        replies:[
                        {
                                 name:"praveen",
                                 text:"hello my name is praveen",
                                 replies:[
                                    
                                 ]  
                        }
                    ]
                    }
                 ]  
        }
    ]
    }
    
]

const Coment =({data})=>{
    const {name,text,replies}=data;
    if(!data) return null;
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img
            className='w-12 h-12'
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUdziqU2Kvy7aNsurztqFn3P52FVoJrQzHg&usqp=CAU"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>

        </div>
    )
}

const CommentList =({comments})=>{
 return comments.map((cmt,index)=>( 
       <div> 
        <Coment key={index} data={cmt}/>
        <div className="pl-5 border border-l-black ml-5 ">
            <CommentList comments={cmt.replies}/>
        </div>
    </div>
 )
 )};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold '>Comments:</h1>
       <CommentList comments={commentsData}/>

    </div>
  )
}

export default CommentContainer
