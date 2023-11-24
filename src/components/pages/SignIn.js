import React from 'react';
import '../../App.css';
import Signin from '../Signin';
import Footer from '../Footer';

// export default function SignUp() {
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }

function SignIn() {
  return (
    <>
      <Signin />
      <Footer />
    </>
  );
}

export default SignIn;