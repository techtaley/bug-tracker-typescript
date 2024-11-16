import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store' // Import the typed AppDispatch
import { Bug, deleteBug } from './../features/bugSlice';  //// Import the Bug type and actions
import { Link } from 'react-router-dom';

  // Define a new bug LIST type using imported Bug type
  interface BugList {
    bugs: Bug[];
  }

  const BugList: React.FC<BugList> = ({ bugs }) => { 
    const dispatch: AppDispatch = useDispatch();

    const handleDelete = (bid:any) => {
        dispatch(deleteBug(bid))  
    }

    return (
      <div>        
          {bugs?.map(bug => (
            //SingleBug
            <div key={bug.id}>
              <p>{bug.id}</p>              
              <p>{bug.name}</p>
              <p>{bug.desc}</p>
              <p>{bug.assignTo}</p>
              <p>{bug.completed ? 'Completed' : 'InComplete'}</p>
              <p>{bug.date}</p>
              <div>
                <Link to={`/edit/${bug.id}`}>
                  <button>edit</button>
                </Link>
                <button onClick={() => handleDelete(bug.id)}>delete</button>
              </div>
            </div>
          ))}
      </div>
  )
}

export default BugList