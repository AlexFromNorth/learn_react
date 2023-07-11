import React, { useMemo, useState } from "react";
import Listitem from "./Listitem";
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>There are not cars</p>;

  const [filter, useFilter] = useState(10000);
  const carsFilter = useMemo(
    () => repos.filter((e) => e.price > filter),
    [filter]
  );

  return (
    <>
      <div>
        <h3>Added cars filter</h3>
        <div className="flex">
          <input
            type="range"
            name="volume"
            min="0"
            max="100000"
            value={filter}
            onChange={(e) => {
              useFilter(e.target.value);
            }}
          />
          <span>${filter}</span>
        </div>
      </div>
      <ul>
        {carsFilter.map((repo) => (
          <Listitem key={repo.id} car={repo} />
        ))}
      </ul>
    </>
  );
};
export default List;
