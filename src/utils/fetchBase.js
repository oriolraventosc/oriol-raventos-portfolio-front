import { useCallback, useState } from "react";

const useProject = () => {
  const url = process.env.REACT_APP_URL;
  const [result, setData] = useState({ loading: true, data: [] });
  const loadAllProjects = useCallback(async () => {
    const response = await fetch(`${url}/projects/loadAllProjects`);
    const data = await response.json();
    setData({ loading: false, data: [data.projects] });

    return data;
  }, [url]);
  return { loadAllProjects, result };
};

export default useProject;
