import React from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Main from './components/Main';
import './App.css';

function App() {
  
  let index=0;
  let images= [{src:"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"},{src:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowSXMg_G86vx9duJiH6nHlWnoiwvhj5GpWXEuQgv5XWX7KwdO"}];

  return (
    <div className="App">
      <Header className="App-header" title="Inshtush"/>
      <Main mainImage={images[index]} className="main" />
      <Footer  className="footer" symbol="Copyrights: " data="All Rights Reserved" year="2019"/>
    
    </div>
  );
}

export default App;
