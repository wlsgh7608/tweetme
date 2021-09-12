import React from 'react';
import logo from './logo.svg';
import './App.css';

import {TweetsComponent} from './tweets'




// function ReTweetBtn(tweet){
//   return "<button class = 'btn btn-outline-success btn-sm' onclick = handleTweetActionBtn("+
//   tweet.id+","+tweet.likes+ ",'retweet') > ReTweet</button>"
// }

// // 싫어요 
// function UnLikeBtn(tweet){
//   return "<button class = 'btn btn-outline-primary btn-sm' onclick = handleTweetActionBtn("+
//   tweet.id+","+tweet.likes+ ",'unlike') > UnLike</button>"
// }







function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TweetsComponent />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
