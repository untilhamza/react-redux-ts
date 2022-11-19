import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state/reducers";
import { useSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { loading, error, data } = useSelector(
    (state: RootState) => state.repositories
  );
  const { searchRepositories } = useActions();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(term);
    searchRepositories(term);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <ul>
        {!error && !loading && data.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </form>
  );
};

export default RepositoriesList;
// Path: src/components/App.jsx
