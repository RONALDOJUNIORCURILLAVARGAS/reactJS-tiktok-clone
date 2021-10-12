import React, { useEffect, useState } from 'react';
import Video from "./Video";
import db from './firebase';
import './App.css';

function App() {
  const [videos,setVideos]=useState([]);
  useEffect( ()=>{
    db.collection('videos').onSnapshot(snapshot=>(
      setVideos(snapshot.docs.map(doc => doc.data()) )
    )) 
  },[ ])

  return (
    //Conexion con la base de datos de firebase,
    //Se envian los campos correspondientes a cada item asignado 
    <div className="app">
     
       <div className="app__videos">
       {videos.map(
         ({ url,channel,description,song,likes,messages,share}) =>(
              <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                share={share}
              />
          )
       )}
        
      </div>
    
    </div>
  );
}

export default App;
