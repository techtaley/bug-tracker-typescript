// Define the Bug type
export interface Bug {
  id: string;
  name: string;
  desc: string;
  assignTo: string;
  completed: boolean;
  date: string;
}

// Define the initial state type
interface BugState {
  entries: Bug[];
}

// const today = new Date();
// const year = today.getFullYear();
// const month = String(today.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-indexed
// const day = String(today.getDate()).padStart(2, '0');

// const formattedDate = `${month}/${day}/${year}`;

// Initial state
const initialState: BugState = {
  //entries: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
  entries: [{
    id: "M93Y8472F88A48",
    name: "SEO Issues",
    desc: "Ensure that all alt tags are included",
    assignTo: "Taley",
    completed: false,
    date: "10/21/2024",    
  }],
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Create the slice
const bugSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    // Action to add a new bug
    addBug: (state, action: PayloadAction<Bug>) => {
      state.entries.push(action.payload);

      localStorage.setItem('Bug entries', JSON.stringify(state.entries))
    },
    // Action to update an existing bug
    updateBug: (state, action: PayloadAction<Bug>) => {
      //this gets all bugs from state, returns all unchanged entries, and action.payload(all updates of bid)
      const prevEntries = state.entries.filter(entry => entry.id !== action.payload.id)  //get all except selected id
      state.entries = [...prevEntries, action.payload]  //get all previous unchanged, and then updated entry

      //deals with only the one bug 
      //const updatedBug = action.payload;
      // const existingBug = state.entries.find((entry) => entry.id === action.payload.id);  //get the one by id and update
      // if (existingBug) {
      //   existingBug.name = updatedBug.name;
      //   existingBug.desc = updatedBug.desc;
      //   existingBug.assignTo = updatedBug.assignTo;
      //   existingBug.completed = updatedBug.completed;
      //   existingBug.date = updatedBug.date;
      //}

      localStorage.setItem('Bug entries', JSON.stringify(state.entries))
    },
    // // Action to delete a bug by id
    deleteBug: (state, action: PayloadAction<string>) => {
      //filter or return all entries except id
      state.entries = state.entries.filter((entry) => entry.id !== action.payload);

      localStorage.setItem('Bug entries', JSON.stringify(state.entries))
    },
  },
});

// Export actions
export const { addBug, updateBug, deleteBug } = bugSlice.actions;

// Export the reducer to be added to the store
export default bugSlice.reducer;
