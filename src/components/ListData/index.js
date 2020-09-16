import React, { useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import InputData from '../InputData'
import './index.scss';

const ListData = data => {
  const [isOpenMsg, setIsOpenMsg] = useState(false)
  return (
    <div className="listData">

      <div id="chat-circle" className={classnames('btn', 'btn-raised', { active: isOpenMsg })}>
        <div id="chat-overlay"></div>
        <FontAwesomeIcon className="icon" onClick={()=>{ setIsOpenMsg(true) }} icon={faComment} size="3x" />
	    </div>
      
      <div className={classnames('chat-box', { active: isOpenMsg })}>
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle"><FontAwesomeIcon className="icon" onClick={()=>{ setIsOpenMsg(false) }} icon={faTimes} /></span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay">   
          </div>
          <div className="chat-logs">
            {
              data.listMsg?.map( (msg, i) =>
                <div key={i} id={`cm-msg-${(i+1)}`} className={classnames('chat-msg', { self: msg.user==='user1' }, { user: msg.user==='user2' })}>
                  <span className="msg-avatar">
                    <FontAwesomeIcon className="icon" icon={faUser} size="3x" />
                  </span>
                  <div className="cm-msg-text">{msg?.text}</div>
                </div>
              )
            }
          </div>
        </div>
        <div className="chat-input">
          <InputData 
            onClickButtonHandler = {data.onClickButtonHandlerData}
          />
        </div>
      </div>
     </div>   
  )  
}
export default ListData
