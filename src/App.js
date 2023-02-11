import React, { useState } from 'react';
import './App.css';
import 'tachyons';
import Header from './components/header';
import Footer from './components/footer';
import BcardList from './components/BcardList';
import {blogs} from './db/blogData';
import Content from './components/content';

const App = () => {
  
  const [route, setRoute] = useState('home');
  const [blog, setBlog] = useState('');

  const onRouteChange = (route) =>  {
    setRoute(route);
  }
  
  const callbackFunction = (blog) => {
    setBlog(blog);
    console.log(blog)

  }

  return (
    
    <div>
      <Header onRouteChange={onRouteChange}/>
      {
        route === 'home' ?
        <BcardList 
        onRouteChange={onRouteChange} 
        parentCallback={callbackFunction}
        blogs={blogs}/> : <Content blog={blog}/>
      }
        
                        
      <Footer/>
    </div> 
      
    
    
  );
}

export default App;
