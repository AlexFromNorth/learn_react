import { useEffect, useState } from "react";
import List from "./listItem/List";
import WithListLoading from "./listItem/WithListLoading";
import CreateCarForm from "./create_car_form/CreateCarForm";
import { carService } from "../../../services/car.service";

function Home() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const axiosData = async () => {
      const data = await carService.getAll()
          setAppState({ loading: false, repos: data });
    };
    axiosData()
  }, [setAppState]);

  return (
    <div>
      <h1>Cars catalog</h1>
      {/* <App/> */}
      <CreateCarForm setAppState={setAppState} />
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
