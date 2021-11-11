import Bar from "./Bar";
import ProductList from './ProductList';
import Register from './Register';

function UnAuthenticatedApp ({ currentUser, setCurrentUser }){
    return(
    <div>UnAuthenticatedApp with {currentUser}
        <Bar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
    )
};
export default UnAuthenticatedApp;