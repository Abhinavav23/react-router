import React, {forwardRef} from 'react'

export const Address = forwardRef((props, ref) => {
    console.log(ref); 
  return (
    <form>
        <label htmlFor="pin">Pin code</label>
        <input id="pin" type="text" value={props.pin} ref={ref}/>
        <label htmlFor="city">City</label>
        <input id="city" type="text" value={props.city}/>
        <label htmlFor="state">State</label>
        <input id="state" type="text"/>
    </form>
  )
})




