import React from 'react'

function Contact () {
  return (
    <div className='container mt-5'>
      <h3>Contact Us!</h3>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='firstName' className='form-label'>First Name</label>
          <input type='text' className='form-control' id='firstName' required />
        </div>
        <div className='col-md-6'>
          <label htmlFor='lastName' className='form-label'>Last Name</label>
          <input type='text' className='form-control' id='lastName' required />
        </div>
        <div className='col-md-8'>
          <label htmlFor='emailInfo' className='form-label'> E-mail </label>
          <input type='email' className='form-control' id='emailInfo' required />
        </div>
        <div className='col-md-4'>
          <label htmlFor='phoneNumber' className='form-label'> Phone Number </label>
          <input type='text' className='form-control' id='phoneNumber' placeholder='+52 (555) 3496-5278' />
        </div>
        <div className='col-md-12'>
          <label htmlFor='comments' className='form-label'> Comments </label>
          <textarea className='form-control' id='comments' rows='4' />
        </div>
        <div className='col-md-12'>
          <button className='btn btn-outline-dark'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
