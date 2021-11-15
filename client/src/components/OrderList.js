


function OrderList ({handleAddOrder, orders,newOrder}){




 




 
//    //  Extra Credit: Create a state (formData) to manage all of our form data
//       const [formData, formDataSetter ] = useState({
//          paymentMethod: "",
//          total: ""     
//      })
 
//       // Create states we will use to handle price and paymentMethod
//       const [ paymentMethod, setPaymentMethod ] = useState(" ");
//       const [ total, setTotal ] = useState("");
 
//      // Create callback functions to manage the onChange behavior for each of our controlled inputs
//       function managePaymentMethod(event) {
//          setPaymentMethod(event.target.value);
//       }
 
//       function manageTotal(event) {
//          setTotal(event.target.value);    
//       }
 
 
//      // Extra Credit: Create ONE callback function to manage the onChange behavior for any of our
//      // controlled inputs
//           // Capture name and value from target of event
//      function manageFormData(event) {
//          let targetName = event.target.name;
//          let targetValue = event.target.value;
     
 
//          // Update formData state with new form submission data
//             formDataSetter({
//                 // Object we want to modify
//                 ...formData,
                
//                 // Key / value pairing to be updated
//                 [targetName]: targetValue 
//             });
//         }
//     }
 
//      // Create a callback function to handle onSubmit behavior for our controlled form
//      function handleSubmit(event) {
//          let newId = parseInt(orders[orders.length - 1].id) + 1;
//          // let newId = orders.length + 1;
 
//          // Prevent default form submission behavior
//          event.preventDefault();
 
//          // Create newOrder JS object with formData and generate
//          // a unique ID for each new object
//          const newOrder = {
//              total: formData.total,
//              paymentMethod: formData.paymethod
//              // ...formData
//          }
 
//          // Use handleAddOrder from props to add the newOrder JS object
//          // to the existing array of Order objects (orders)
//          handleAddOrder(newOrder); 
 
//          // Clear out input values upon form submission using formDataSetter
//          formDataSetter(
//                 // key / value pairs to update
//              {
          
//              price: "",
//              paymentMethod: ""    
//          });
    

//     return (
//         <div>
//             <h1> Add New Order</h1>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder="PaymentMethod" 
//                     name="payment"
//                     className="input"
//                     onChange={manageFormData}
//                     value={formData.paymentMethod}
//                 />
    

//                     <input 
//                     type="text" 
//                     placeholder="Total" 
//                     name="total"
//                     className="input"
//                     onChange={manageFormData}
//                     value={formData.total}
//                 />

//                 <input 
//                     type="submit" 
//                     value="Submit"
//                     className="input"
//                 />

           
//             </form>

//             <p>{formData.total} {formData.paymentMethod}</p>
//         </div>
//     );
// }


export default OrderCard;