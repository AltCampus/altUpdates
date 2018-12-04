import React from 'react';

const Signup = () => {
  return (
    <div className="Signup">
      <form className="Signup__form">
        <input type="text" className="Signup__email" placeholder="enter your email"/><br/>
         <input type="text" className="Signup__username" placeholder="enter your username"/><br/>
        <input type="text" className="Signup__password" placeholder="enter your password"/><br/>
        <button className="Signup__btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;