
import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div >
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
