Proxy error: Could not proxy request /register from localhost:4000 to http://localhost:3000/.

Post work via Postman http://localhost:3000/register

{
  "first_name": "abc",
   "last_name": "123",
"password": "abc123",
   "email" : "j@gmail.com",
   "username" : "jj",
   "phone_number" : 213,
   "address" : "93 m st",
   "state" : "GA", 
   "zipcode" : "03934",
   "gender" : "F",
   "store_name" : "nope",
   "store" : false
}

See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNRESET).




// ToDo.js

//  setIsLoggedIn
//  Home line 8, create toggle IsLogged in Login an registered user


//  Logout
//  setLoggedIn false
//  setCurrentUser'null'  no toggle to prevent logging back in w/o password










//  fyi, I got out of my lease.  I’ll consider other jobs.  I’m either going to live next to it like I did at Syracuse, University , work remotely, or move to a city with great public transportation.

// Basically, I’m open to relocation, and will consider offers in the 80s immediately.



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


 



<div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>