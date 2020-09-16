import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
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
  const [user, setUser] = useState('user1')
  useConstructor(()=>{
    firebase.database().ref('message/').on('value', function(snapshot) {
      if(snapshot.val() != null) {
        console.log(snapshot.val())
         setListMsg(snapshot.val())
       }
    });
  })

  const onClickButtonHandlerData = text => {
    if(text) {
      const listMsgData = listMsg.concat({

        key: Math.random().toString().replace('.',''),
        text,
        user
      })
      firebase.database().ref('message/').set(listMsgData);
      setListMsg(listMsgData)
    }
  }
  
  return (
    <div className="app container">
      <div key={`inline-radio`} className="mb-3">
        <Form.Check inline name="user" label="user1" type='radio' value='user1'
          checked={user==='user1'}
          onClick={e=>{setUser(e.target.value)}} 
        />
        <Form.Check inline name="user" label="user2" type='radio' value='user2'
          checked={user==='user2'}
          onClick={e=>{setUser(e.target.value)}}
        />
      </div>
      <ListData
        listMsg = {listMsg}
        currentUser = {user}
        onClickButtonHandlerData = {onClickButtonHandlerData}
      />
    </div>
  );
}

export default App;
