import React, { useState } from 'react'
import * as firebase from 'firebase'
import ListData from './components/ListData'
import { Config } from './Config'

import './App.scss';

firebase.initializeApp(Config)

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
}

const App = () => {
  const [listMsg, setListMsg] = useState([])
  useConstructor(()=>{
    firebase.database().ref('message/').on('value', function(snapshot) {
      if(snapshot.val() != null) {
         setListMsg(snapshot.val())
       }
    });
  })

  const onClickButtonHandlerData = message => {
    const listMsgData = listMsg.concat({
      key: Math.random().toString().replace('.',''),
      message
     })
    firebase.database().ref('message/').set(listMsgData);
    setListMsg(listMsgData)
  }
  
  return (
    <div className="app container">
      <ListData
        listMsg = {listMsg.map( msg => <p>{msg.message}</p>)} 
        onClickButtonHandlerData = {onClickButtonHandlerData}
      />
      {/* <InputData 
        onClickButtonHandler = {onClickButtonHandlerData}
      /> */}
    </div>
  );
}

export default App;
