import Bar from "./Bar";

function UnAuthenticatedApp ({ currentUser, setCurrentUser }){
    return(<div>UnAuthenticatedApp with {currentUser}
    <Bar currentUser={currentUser} setCurrentUser={setCurrentUser} /></div>)
};
export default UnAuthenticatedApp;