import React, { useState } from 'react'
import './index.scss';

const InputData = props => {
    const [msg, setMsg] = useState('')
    
    return(
        <div className="panel-footer">
            <div className="input-group">
                <input
                    onChange = { e => { setMsg(e.target.value) } }
                    value = { msg }
                    id="btn-input" 
                    type="text" 
                    className="form-control input-sm" 
                    placeholder="Type your message here..." />
                    <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm" 
                        onClick={() => {
                            props.onClickButtonHandler(msg)
                            setMsg('')
                        }}
                        id="btn-chat">
                        Send</button>
                </span>
            </div>
        </div>
     )
}

export default InputData
