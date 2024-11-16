import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store' // Import the typed AppDispatch
import { useNavigate } from 'react-router-dom';

import { Bug, addBug, updateBug } from '../features/bugSlice' // Import the Bug type and actions
import { nanoid } from 'nanoid';

// Define a new bug FORM type using imported Bug type
interface BugFormProps {
  selectedBug?: Bug;
}

const BugForm: React.FC<BugFormProps> = ({ selectedBug }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    id: selectedBug?.id || "",
    name: selectedBug?.name || '',
    desc: selectedBug?.desc || '',
    assignTo: selectedBug?.assignTo || '',
    completed: selectedBug?.completed || false,
    date: selectedBug?.date || ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; 

    //for each Form Input: pass in unchanged values; otherwise, update value based on names
    setFormState({
      ...formState, 
    [name]: value,
    //!formState.completed, 
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
  //const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  ?? why not the entire line?
    e.preventDefault();

    const editedBug: Bug = {
      id: formState.id,
      name: formState.name,
      desc: formState.desc,
      assignTo: formState.assignTo,
      completed: formState.completed,
      date: formState.date
    }

    if (selectedBug) {  //send updated of selectedBug to store
      dispatch(updateBug(editedBug))
    } else {
      dispatch(addBug({        
        id: nanoid(),
        name: formState.name,
        desc: formState.desc,
        assignTo: formState.assignTo,
        completed: formState.completed,
        date: formState.date   
      })); // Dispatch add action with a new id

      // dispatch(addBug({
      //   id: nanoid(),
      //   ...formState
      // }))
    }

    setTimeout(() => {
      navigate('/');
    }, 2000);

    // //Reset form
    // setName('');
    // setDesc('');
    // setAssignTo('');
    // setCompleted(false);
    // setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Bug Name"
        value={formState.name}
        onChange={handleChange}
        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        required
      />
      <textarea
        name="desc"
        placeholder="Bug Description"
        value={formState.desc}
        onChange={handleChange}
        //onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
        required
      />
      <input
        type="text"
        name="assignTo"
        placeholder="Assign To"
        value={formState.assignTo}
        onChange={handleChange}
        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAssignTo(e.target.value)}        
        required
      />
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={handleChange}
        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}        
        required
      />
      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={formState.completed}
          //onChange={handleChange}          
          onChange={() => setFormState({...formState, completed: !formState.completed})}        
        />
      </label>
      {/* <button type="submit">Add Bug</button> */}
      {/* if there is an existing but show edit button - if edit is clicked */}
      <button type="submit">{selectedBug ? "Update" : "Add"}</button>
    </form>
  );
};

export default BugForm;
