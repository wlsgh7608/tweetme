import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TweetsComponent } from './tweets';


const appEl = document.getElementById('root')
if(appEl){
  ReactDOM.render(<App></App>,appEl);
}

const e = React.createElement
const tweetsEl = document.getElementById('tweetme-2')
if(tweetsEl){
  console.log("whats",tweetsEl.dataset)
  const MyComponent = e(TweetsComponent,tweetsEl.dataset )
  // ReactDOM.render(<TweetsComponent username = {tweetsEl.dataset.username}></TweetsComponent>,tweetsEl);
  ReactDOM.render(MyComponent,tweetsEl)

}

 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
