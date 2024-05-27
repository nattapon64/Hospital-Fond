import React from 'react'
import Baruser from './Baruser'
import Footeruser from './Footeruser'

function Mainuser() {
  return (
    <div>
        <div>
            <Baruser/>
        </div>
        <div>

        </div>
        <div className='flex'>
            <Footeruser/>
        </div>
    </div>
  )
}

export default Mainuser