import React from 'react'

export default (props)=>{
      return (
            <div>
                  {
                        props.snakeDots.map((dot,index)=>{
                              const style = {
                                left: `${dot[0]}%`,
                                top: `${dot[1]}%`,
                              };
                              return(
                                    <div key={index} style={style} className="snake_dot"></div>
                              )
                        })
                  }
            </div>
      )
}