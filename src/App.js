import React,{useEffect,useState} from 'react';
import './App.css';
import Video from './Video';
import db from './firebase'

function App() {
  const [videos, setvideos] = useState([])
  useEffect(()=>{
    db.collection('videos').onSnapshot(snapshot=>{
      setvideos(snapshot.docs.map(doc=>doc.data()))
    })
  },[])
  return (
    <div className="app">
      <div className='app__video' >
        {videos.map(({src,messages,share,likes,song,description,channel})=>(
          <Video src={src} messages={messages} share={share} likes={likes} song={song} description={description} channel={channel} />
        ))}
      </div>
    </div>
  );
}

export default App;
