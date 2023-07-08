import { useEffect, useState } from "react";
import List from "./listItem/List";
import WithListLoading from "./listItem/WithListLoading";
import CreateCarForm from "./create_car_form/CreateCarForm";

function Home() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });


  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:4300/images`;
    fetch(apiUrl)
    .then((res) => res.json())
    .then((repos) => {
      setAppState({ loading: false, repos: repos });
    });
  }, [setAppState]);
  
  return (
    <div>
      <h1>Cars catalog</h1>
      {/* <App/> */}
      <CreateCarForm setAppState={setAppState}/>
      <div className="App">
        <div className="container">
          <h1>Cars</h1>
        </div>
        <div className="repo-container">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>
    </div>
  );
}

export default Home;
