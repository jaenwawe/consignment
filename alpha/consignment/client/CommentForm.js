import React from 'react';


function CommentForm({ onAddComment }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
 
    
    function addComment(newComment) {
        // spread to create a new array and add new comment at the end
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
      }

      function removeComment(commentId) {
        // filter to return a new array with the comment we don't want removed
        const updatedComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
      }
    
      function updateComment(updatedComment) {
        // filter to return a new array with the comment we don't want removed
        const updatedComments = comments.map((comment) => {
          if (comment.id === updatedComment.id) {
            // if the comment in state is the one we want to update, replace it with the new updated object
            return updatedComment;
          } else {
            // otherwise return the original object
            return comment;
          }
        });
        setComments(updatedComments);
      }

      // updating one object in an array
function updateCustomer(id, name) {
    // use map to return a new array so we aren't mutating state
    const updatedCustomers = customers.map((customer) => {
      // in the array, look for the object we want to update
      if (customer.id === id) {
        // if we find the object
        // make a copy of it and update whatever attribute have changed
        return {
          ...customer,
          name: name,
        };
      } else {
        // for all other objects in the array
        return customer; // return the original object
      }
    });
  
    // set state with our updated array
    setCustomers(updatedCustomers);
  }



    function handleUsernameChange(event) {
      setUsername(event.target.value);
    }
    function addComment(newComment) {
        // spread to create a new array and add new comment at the end
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
      }
  
    function handleCommentChange(event) {
      setComment(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const newComment = {
        username,
        comment,
      };
      onAddComment(newComment);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleUsernameChange} />
        <textarea name="comment" onChange={handleCommentChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default CommentForm;