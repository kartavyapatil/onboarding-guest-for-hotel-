// import { useState, useEffect } from 'react';
// import './App.css';
// import { useNavigate, Outlet } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUser } from './slice/user.slice'; // Import your Redux action
// import Header from './homepage/Header';
// function App() {
//   const [Loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const fetchdata = async (token) => {
//     try {
//       const { data } = await axios.get("http://localhost:8000/api/v1/auth/profile", {
//         headers: {
//           'Authorization': 'Bearer ' + token,
//         },
//       });
//       dispatch(setUser(data.user));
//       setLoading(false);
//     } catch (e) {
//       console.error(e);
//       navigate("/loginguest");
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/loginguest');
//     } else {
//       (async () => {
//         await fetchdata(token);
//       })();
//     }
//   }, [navigate]); // Adding `navigate` as a dependency

//   if (Loading) {
//     return <div>Loading...</div>; // Optionally, add a spinner or styled component
//   }

//   return (
//     <>
      
//       <Outlet /> {/* It helps in rendering the child components of the parent component */}
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import './App.css';
// import { useNavigate, Outlet } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUser } from './slice/user.slice'; // Import your Redux action
// import Header from './homepage/Header';

// function App() {
//   const [Loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const fetchdata = async (token) => {
//     try {
//       const { data } = await axios.get("http://localhost:8000/api/v1/auth/profile", {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },
//       });
//       dispatch(setUser(data.user));
//       setLoading(false);
//     } catch (e) {
//       console.error(e);
//       navigate("/loginguest");
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/loginguest');
//       return;
//     } else {
//       (async()=>{
//         await fetchdata(token)
//       })()
//     }
//   }, [navigate, dispatch]);

//   if (Loading) {
//     return <div>Loading...</div>; // Optionally, add a spinner or styled component
//   }

//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser  } from './slice/user.slice'; // Import your Redux action
import Header from './homepage/Header';
import LoadingPage from './LoadingPage';
function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async (token) => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/auth/profile", {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(data);
      dispatch(setUser(data.user));
      // dispatch(setUserRole(data.role));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);

      // Token is invalid or expired
      localStorage.removeItem('token'); // Clear the invalid token
      navigate("/loginguest"); // Redirect to login page
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     // No token found, redirect to login
  //     navigate('/loginguest');
  //     return;
  //   }

  //   // Fetch user data if token exists
  //   fetchData(token);
  // }, [navigate, dispatch]);
  useEffect(()=>{
    const token=localStorage.getItem("token") ||""
    console.log(token);
    if(!token){
      navigate("/loginguest")
      return
    }else{
      (async()=>{
        await fetchData(token)
      })()
    }
  },[navigate,dispatch])
  if (loading) {
    return <LoadingPage/>; // Optionally, add a spinner or styled component
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
