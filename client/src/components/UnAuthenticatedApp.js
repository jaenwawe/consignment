import Bar from "./Bar";
import ProductList from './ProductList';
import Register from './Register';
import Login from "./Login";
import Button from "@restart/ui/esm/Button";

function UnAuthenticatedApp ({ currentUser, setCurrentUser }){
    return(
    <div>UnAuthenticatedApp with {currentUser}
        {/* <Bar currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
      
     
       


    </div>
    )
};
export default UnAuthenticatedApp;