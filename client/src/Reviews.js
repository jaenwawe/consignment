import React from 'react';
import CommentForm from './CommentForm'

function CommentContainer() 
{

    const [comments, setComments] = useState([])
  
    const commentCards = comments.map((comment, index) => 
        (<CommentCard key={index} comment={comment} />))
  
    // callback for adding a comment to state
    function addComment(newComment) {
        setComments([...comments, comment]);
    };
  
    render() 
    {
      return (
        <section>
          {commentCards}
          <hr />
          <CommentForm onAddComment={addComment} />
        </section>
      );
    }
  }
  