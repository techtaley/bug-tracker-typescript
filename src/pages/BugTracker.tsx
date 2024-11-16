//import { Bug } from '../features/bugSlice.ts' // Import the Bug type
import { useSelector } from 'react-redux';
import { RootState } from './../store/store.ts'
import BugList from './BugList.tsx'
import BugForm from './BugForm.tsx'

const BugTracker: React.FC = () => {  
    //get all bugs from state and pass to BugList  state.slicename.initialstate
    const bugs = useSelector((state: RootState) => state.bugs.entries)

    return (
         <>
            <BugForm />
            <h1>All Bugs</h1>
            <BugList bugs={bugs} />
         </>
    )    
}

export default BugTracker;
