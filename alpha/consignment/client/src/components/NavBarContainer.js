import NavBarLinks from "./NavBar";
import Login from "./Login";
import Register from "./Register";

function NavBarContainer ({isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password, order, setOrder,handleLogOut,setCurrentUser, handleLogin, currentUser, setIsLoggedIn }){
    return(
    <div>
        NavBarContainer with {currentUser}
        {/* <AuthBar setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogOut={handleLogOut} /> */}
        <NavBarLinks setIsLoggedIn={setIsLoggedIn}/>  
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} setEmail={setEmail} email={email} setPassword={setPassword} password={password} order={order} setOrder={setOrder} setIsLoggedIn={setIsLoggedIn}/> 
        <Register setCurrentUser={setCurrentUser} handleLogin={handleLogin}currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>   
    </div>)
};




  export default NavBarContainer;
