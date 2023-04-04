import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useRepos = (amount: number) => {
  const [allRepos, setAllRepos] = useState<any>([]);
  const [repositories, setRepositories] = useState<any>([]);

  const fetchRepos = async (
    amount: number,
    setters: Dispatch<SetStateAction<any[]>>[],
  ) => {
    const response = { data: ["repo1", "repo2", "repo3"] }
    setters.forEach(setter => setter(response.data));
  };

  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories]);
  }, []);

  return [repositories, setRepositories, allRepos]
}

export default useRepos;