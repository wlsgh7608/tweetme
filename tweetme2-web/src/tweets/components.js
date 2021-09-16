import React, {useEffect, useState  } from 'react';

import { Tweet } from './detail';
import {TweetsList} from './list'
import {TweetCreate} from './create'
import { apiTweetDetail } from './lookup';




export function TweetsComponent(props){
    const [newTweets,setNewTweets] = useState([])
    const canTweet = props.canTweet ==="false"? false:true
    // const handleBackendUpdate = (newTweets) =>{
    const handleNewTweet  = (newTweets) =>{
        // backend api response handler
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweets)
        setNewTweets(tempNewTweets)
        // if (status === 201){
        //     tempNewTweets.unshift(response)
        //     setNewTweets(tempNewTweets)
        // }else{
        //     console.log("response",response)
        //     alert("An error occured please try again")
        // }
    }
    
    return <div className ={props.className}>
        {canTweet === true && 
        <TweetCreate didTweet = {handleNewTweet}></TweetCreate>
        }
    <TweetsList newTweets = {newTweets}  {...props }></TweetsList>
    </div>     
}

export function TweetDetailComponent(props){
    const {tweetId} = props
    const [didLookup,setDidLookup] = useState(false)
    const [tweet,setTweet] = useState(null)
    const handleBackendLookup = (response,status) => {
        if (status ===200){
            setTweet(response)
        }
        else{
            alert("there was an error finding your tweet.")
        }
    }


    useEffect(() => {
        if(didLookup === false){
            apiTweetDetail(tweetId,handleBackendLookup)
            setDidLookup(true)

        }
    },[tweetId,didLookup,setDidLookup])
    return tweet === null? null:<Tweet tweet = {tweet} className = {props.className} />
}