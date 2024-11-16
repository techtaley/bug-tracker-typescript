import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import { lazy } from 'react';
//import { lazy, Suspense } from 'react';
//import { BallTriangle } from 'react-loader-spinner'
// import MainLayout from './components/layout/MainLayout';
// import SocialLayout from './components/layout/SocialLayout';

//const Layout = lazy(() => import( './components/layout/MainLayout'));
//const Home = lazy(() => import( './pages/home/Home'));

import BugTracker from './pages/BugTracker';
import BugForm from './pages/BugForm';
//import BugList from './pages/BugList';
import EditBug from './pages/EditBug';

function App() {

  return (
      <Router> 
        {/* <Suspense fallback={<div className="page-center"> */}
          {/* <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#666"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          /> 
          </div>}> 
          */}

          <Routes>
            {/* <Route element={<MainLayout />}> */}
            <Route path="/" element={<BugTracker />} />
            <Route path="/bug-form" element={<BugForm />} />
            {/* <Route path="/bug-list" element={<BugList />} /> */}
            <Route path="/edit/:id" element={<EditBug />} />
            <Route path="*" element={<Navigate to="/" />}  />          
            {/* </Route> */}
            
            {/* <Route element={<SocialLayout />}> */}
              {/* <Route path="*" element={<Navigate to="/" />}  /> */}
            {/* </Route>   */}

          </Routes>
      {/* </Suspense>   */}
    </Router>    
  )
}

export default App