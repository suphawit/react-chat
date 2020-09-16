import React from 'react'

const ListData = data => 
    <div style={{ marginTop:10 }}>
          {
               data.listMsg?.map( (msg, i) =>{
                    return <p key = { i }>{ msg?.props.children }</p>
               }) 
          }
     </div>     

export default ListData
