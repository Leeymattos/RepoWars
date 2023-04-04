import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { githubClient } from "../api";

const useRepos = (amount: number) => {
  const [allRepos, setAllRepos] = useState<any>([]);
  const [repositories, setRepositories] = useState<any>([]);

  const randomSince = Math.floor(Math.random() * 1000000);

  const fetchRepos = async (
    amount: number,
    setters: Dispatch<SetStateAction<any[]>>[],
  ) => {
    const response = await githubClient.request("GET /search/repositories", {
      q: `is:public stars:>1000 fork:false`,
      sort: "stars",
      order: "desc",
      per_page: amount,
      since: randomSince,
      page: 1,
    })
    setters.forEach(setter => setter(response.data.items));
  };

  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories]);
  }, []);

  return [repositories, setRepositories, allRepos]
}

export default useRepos;