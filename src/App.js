import React, { useState } from 'react';
import InputData from './InputData'
import ListData from './ListData'
import * as firebase from 'firebase'
import { Config } from './Config'
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
    <div className="container">
      <ListData
          listMsg = {listMsg.map( msg => <p>{msg.message}</p>)} />
      <InputData 
          onClickButtonHandler = {onClickButtonHandlerData}
      />
    </div>
  );
}

export default App;
