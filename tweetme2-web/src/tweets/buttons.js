import React  from 'react';
import {apiTweetAction} from './lookup';



// 좋아요,싫어요,리트윗 버튼 &
export function ActionBtn(props){
    const {tweet,action,didPerformAction} = props 
    const likes = tweet.likes ? tweet.likes : 0
    const className  = props.className? props.className : 'btn btn-primary btn-sm'
    const actionDisplay = action.display? action.display : 'Action'

    const handleBackendEvent = (response,status) =>{
        console.log(response,status)
        if (((status === 200)|| (status === 201)) && didPerformAction){
            didPerformAction(response,status)

        }
        // if (action.type ==='like'){
        //     if (userLike === true){
        //         //prehaps i Unlike it?
        //         setLikes(likes -1)
        //         setUserLike(false)
        //     }
        //     else{
        //         setLikes(likes+1)
        //         setUserLike(true)
        //     }
        // }
    }
    const handleClick = (event)=>{
        event.preventDefault()
        apiTweetAction(tweet.id,action.type,handleBackendEvent)
        
    }
    const display = action.type === 'like'? `${likes}  ${actionDisplay}`:actionDisplay
    return <button className = {className} onClick = {handleClick}> {display}</button>
  }
