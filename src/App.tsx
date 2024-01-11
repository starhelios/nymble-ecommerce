
import { useContext, useEffect } from 'react';
import { adminRoute, nonAuthRoute } from './react-router';
import { useRoutes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "react-hot-toast"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const queryClient = new QueryClient()
function App() {
  const { auth, updateAuth } = useContext(AuthContext);
  const content = useRoutes(auth ? adminRoute : nonAuthRoute);

  useEffect(()=>{
    const response = localStorage.getItem("jwt")
    if(response){
      updateAuth({access_token:response})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 5000 }} />
      <QueryClientProvider client={queryClient}>
        {content}
      </QueryClientProvider>
    </div>
  );
}

export default App;
