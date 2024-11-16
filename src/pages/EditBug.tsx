//import React, { useState} from 'react'
import React from 'react'
import { RootState } from '../store/store.ts'

//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import BugForm from './BugForm.tsx';

//import { AppDispatch } from '../store/store.ts' // Import the typed AppDispatch
//import { Bug } from '../features/bugSlice.ts';  //// Import the Bug type and actions

    // // // Define a new bug Update type using imported Bug type
    // interface BugId {
    //     bugs: Bug[];
    // }

    //const EditBug: React.FC<EditBug> = () => {
    const EditBug: React.FC = () => {
        //const dispatch: AppDispatch = useDispatch();

        const  bugId = useParams().id;         

        // // //get bug with id equal to bug selected for edit 
        // const bugs = useSelector((state: RootState) => state.bugs.entries);
        // const selectedBug = bugs.find((bug:Bug) => bug.id === bugId)  //both strings   

        const bugs = useSelector((state: RootState) => state.bugs.entries)
        const selectedBug = bugs.find(bug => bug.id === bugId);

        console.log("bugToEdit", selectedBug)
        //console.log("bugId", bugId)

        // const [updateName, setUpdateName] = useState(existingBug.name)
        // const [updateDesc, setUpdateDesc] = useState(existingBug.desc)
        // const [updateAssignTo, setUpdateAssignTo] = useState(existingBug.assignTo)
        // const [updateCompleted, setUpdateCompleted] = useState(existingBug.completed)
        // const [updateDate, setUpdateDate] = useState(existingBug.updateDate)

        // // Handle form input changes
        // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //     //Reset form
        //     setUpdateName(e.target.value)
        //     setUpdateDesc(e.target.value)
        //     setUpdateAssignTo(e.target.value)
        //     setUpdateCompleted(e.target.value)
        //     setUpdateDate(e.target.value)

            //for each Form Input: pass in unchanged values; otherwise, update value based on names
            // setBug((prevBug) => ({
            //   ...prevBug,
            //   [name]: value,
            // }));
        //};

        // const handleUpdate = (e) => {
        //     e.preventDefault();

        //     const editedBug = {
        //         id: existingBug.id,
        //         name: existingBug.name,
        //         desc: existingBug.desc,
        //         assignTo: existingBug.assignTo,
        //         completed: existingBug.completed,
        //         date: new Date().toISOString().split('T')[0],
        //     }  
        //     dispatch(updateBug({editedBug}))  
        // }    

        return (
            <div>
                <h1>Edit Bug</h1>
                {/* <BugForm selectedBug={selectedBug} />  */}
                {selectedBug ? (  //if selected from BugList to edit, then display in form
                    <BugForm selectedBug={selectedBug} />
                ) : (
                    <p>Bug not found</p>
                )}
            </div>
            
            // <div key={params.id}>
            //     <form onSubmit={handleUpdate}>
            //         <input onChange={handleChange}>{updateName}</input>
            //         <input onChange={handleChange}>{updateDesc}</input>
            //         <input onChange={handleChange}>{updateAssignTo}</input>
            //         <input>{updateCompleted ? 'Completed' : 'InComplete'}</input>
            //         <input>{updateDate}</input>
            //         <div>
            //         <button type="submit">update</button>
            //         </div>
            //     </form>
            // </div>          
        )
    }

export default EditBug;