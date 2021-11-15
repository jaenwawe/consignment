// import Button from '@restart/ui/esm/Button'
// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import App from './App'


function Logout({currentUser, setCurrentUser,handleLogout, handleLogOut,currentUserID}) {
//     const history = useHistory()

// //  if(currentUser) {
 
// //  
// // const userLoggedOut = currentUser.id

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         fetch('/logout', {
//         method: 'DELETE',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(currentUser.id)
//     })
//       .then(res => {
//         if (res.ok) {
//           res.json().then(user => {
//             console.log(`${currentUser.first_name}` + ' ' + "logged out")
//             setCurrentUser(null)
//             history.push("/login");
//           })
//         }else {
//             res.json().then(errors => {
//             console.error(errors)
//             })
//         }
//       })
  

 
  return (
    <>handleLogOut(currentUserID)</>
  )
}
// }

export default Logout;