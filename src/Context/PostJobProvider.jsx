import React, { createContext, useContext, useState } from 'react';

// Context Create
const PostJobContext = createContext();

// Custom Hook
export const usePostJob = () => useContext(PostJobContext);

// Provider
export const PostJobProvider = ({ children }) => {
  const [postJobData, setPostJobData] = useState({
    location: null,
    category: null,
    jobInformation: {},
    budget: {}

  });

  const [activeLine1 ,setIsActiveLine1] = useState(false)
  const [activeLine2 ,setIsActiveLine2] = useState(false)
  const [activeLine3 ,setIsActiveLine3] = useState(false)

   console.log(postJobData);
   
  // Dynamic Update Function
  const updatePostJobData = (key, value) => {
    setPostJobData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PostJobContext.Provider value={{ postJobData, updatePostJobData,setIsActiveLine1,setIsActiveLine2,setIsActiveLine3,activeLine1,activeLine2,activeLine3 }}>
      {children}
    </PostJobContext.Provider>
  );
};