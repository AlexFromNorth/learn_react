import React, { useMemo, useState } from "react";
import Listitem from "./Listitem";
import { render } from "react-dom";
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>There are not cars</p>;

  const [filter, useFilter] = useState(30000);
  const carsFilter = useMemo(
    () => repos.filter((e) => e.price > filter),
    [filter]
  );

  return (
    <>
      <ul>
        <h2 className="list-head">Available Public Repositories</h2>
        {carsFilter.map((repo) => (
          <Listitem key={repo.id} car={repo} />
        ))}
      </ul>
    </>
  );
};
export default List;
