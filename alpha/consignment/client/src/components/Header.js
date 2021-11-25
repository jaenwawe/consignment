
import NavBarLinks from './NavBarLinks';

import AuthBar from './AuthBar';


function Header(isLoggedIn, setIsLoggedIn) {
  console.log(isLoggedIn)
    return (
      <div  class="inline-flex">
        
         {//logged in user views order/post products/checkout option
          
          (isLoggedIn)
            ? <div> <AuthBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></div>  
            : <div> 
                <NavBarContainer 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                handleLogin={handleLogin} 
                handleLogOut={handleLogOut}
                setEmail={setEmail} 
                email={email} 
                setPassword={setPassword}
                password
                order
                setOrder
                setIsLoggedIn={setIsLoggedIn}/>
              </div> 



         }
      </div>
    );
  }
 
  export default Header;