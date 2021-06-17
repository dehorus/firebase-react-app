import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebaseconfig';

const Login = () => {
   const histroial = useHistory()
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [error, setError] = useState(null);

   const registrarUsuario = (e) => {
      e.preventDefault();
         auth.createUserWithEmailAndPassword(email, pass)
         .then( r => {
            alert('Usuario registrado')
            histroial.push('/');
         })
         .then(r => setEmail(null))
         .catch(err => {
            if(err.code === 'auth/weak-password') {
               setError('La password es debil, escribe mas de 6 caracteres');
            }
         }) 
      }

   const loginUsuario = () => {
      auth.signInWithEmailAndPassword( email, pass)
      .then( r => {
         console.log(r)
         histroial.push('/')
      })
         
      .catch(e => {
         if(e.code === 'auth/wrong-password') {
            setError('Password incorrecta')
         }
         if(e.code === 'auth/user-not-found'){
            setError('Usuario no encontrado')
         }
      });
   }   

   return (
      <div className='container-sm mt-5'>
         <div className="col">
            <form onSubmit={registrarUsuario} className='form-group' action="">
               <label className='form-label' htmlFor="email"> Email </label>
               <input onChange={(e) => { setEmail(e.target.value)}} className='form-control mb-3' type="email" name='email' id='email'  placeholder='ej. hola@mundo.com' />
               <label className='form-label' htmlFor="password"> Password </label>
               <input onChange={(e) => { setPass(e.target.value)}} className='form-control mb-3' type="password" name='password' id='password' placeholder='ej. 12345' />
               <div className='d-grid gap-2 d-md-block'>
                  <input type='submit' value='Sign Up' className='btn btn-dark' />
               </div>
            </form>
            <div className='mt-3 d-grid gap-2 d-md-block'>
               <button onClick={loginUsuario} className='btn btn-outline-dark' type='button'> Log In</button>
            </div>
            {
               error != null ? 
               (
                  <div className='mt-3 alert alert-danger' role='alert'>
                     {error}
                  </div>
               ) 
               :
               (
                  <span></span>
               )
            }
         </div>
      </div>
   )
}

export default Login
