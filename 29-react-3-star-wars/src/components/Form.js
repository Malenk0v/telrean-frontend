import React from 'react'



const Form = (props) => {
    const planets = props.allPlanets;

    const style = {width: "50%", margin: "auto", display: "flex", flexDirection: "column", backgroundColor: " rgba(60, 69, 67, 0.6)"};
    return (<div className={`border`} style={style}>
       <div style={{width: "50%", margin: "auto", display: "flex", flexDirection: "column",}}>
           <div className='mb-3 mt-3 '>
               <label htmlFor='First Name' className=''>
                   First Name:
               </label>
               <input
                   type='text'
                   className='form-control'
                   id='firstName'
                   placeholder='First Name'
                   name='firstName'
               />
           </div>
           <div className='mb-3'>
               <label htmlFor='Last Name' className=''>
                   Last Name:
               </label>
               <input
                   type='text'
                   className='form-control'
                   id='email'
                   placeholder='First Name'
                   name='firstName'
               />
           </div>
           <div className='mb-3 mt-3'>
               <label htmlFor='email' className=''>
                   Email:
               </label>
               <input
                   type='email'
                   className='form-control'
                   id='email'
                   placeholder='Enter email'
                   name='email'
               />
           </div>
           <div className='form-check mb-3'>
               <label className='form-check-label'>
                   Choose planet
                   <select style={{marginLeft: "10px"}}>
                       <option selected disabled>choose planet</option>
                       {planets.map(pl => <option key={pl.name}>{pl.name}</option>)}
                   </select>
               </label>
           </div>
       </div>
        <button type='submit' className='btn btn-danger'>
            Submit
        </button>
    </div>)
}

export default Form
