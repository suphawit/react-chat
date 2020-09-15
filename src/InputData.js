import React, { Component } from 'react'

function InputData() {
    return(
        <div className="panel-footer">
            <div className="input-group">
                <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm" id="btn-chat">
                    Send</button>
                </span>
            </div>
        </div>
     )
}

export default InputData
