import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseconfig';


const Nav = () => {
   const histroial = useHistory();
   const [usuario, setUsuario] = useState(null);

   useEffect(() => {
      auth.onAuthStateChanged( (user)=> {
         if(user) {
            setUsuario(user.email);
         }
      } )
   }, [])

   const closeSession = () => {
      auth.signOut();
      setUsuario(null);
      histroial.push('/login');
   }

   return (
      <div>
         <header> 
         <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
               <div className="logo navbar-brand">
                  <Link to='/' className='navbar-brand'> FireBase App</Link>
               </div>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                  <ul className='navbar-nav'>
                     <li className='nav-link active' aria-current='page'> <Link className='nav-link' to='/'> Home </Link></li>
                     {
                        !usuario  ?
                        (
                           <li className='nav-link'> <Link className='nav-link' to='/login'> Login </Link></li>
                        )
                        :
                        (
                           <li></li>
                        )
                     }
                     {
                        !usuario  ?
                        (       
                           <li className='nav-link'> <Link className='nav-link' to='/admin'> Admin </Link></li>
                        )
                        :
                        (
                           <li></li>
                        )
                     }
                  </ul>
               </div>
               {
                  usuario ?
                  ( 
                     <button onClick={closeSession} className='btn btn-outline-danger'> Cerrar sesion </button>
                  )
                  :
                  ( 
                  <span> </span> 
                  )
               }
            </div>   
         </nav>
            
            
         </header>
      </div>
   )
}

export default Nav

