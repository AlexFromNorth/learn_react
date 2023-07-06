import React from "react";
const List = (props) => {
  const { repos } = props;
  console.log(repos);
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className="list-head">Available Public Repositories</h2>
      {repos.map((repo) => {
        // console.log(repo)
        return (
          <li key={repo.id} className="list">
            <p className="repo-text">{repo.id} </p>
            <p className="repo-description">{repo.name}</p>
            <img src={repo.image} alt="Car" />
            <p className="repo-description">{repo.price}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
