import { useContext, useEffect, useState } from "react";
import List from "./listItem/List";
import WithListLoading from "./listItem/WithListLoading";
import CreateCarForm from "./create_car_form/CreateCarForm";
import { carService } from "../../../services/car.service";
import VideoPlayer from "./video_player/VideoPlayer";
import { AuthContext } from "../../../providers/AuthProvider";

function Home() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const axiosData = async () => {
      const data = await carService.getAll();
      setAppState({ loading: false, repos: data });
    };
    axiosData();
  }, [setAppState]);

  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(null);

  return (
    <div>
      <h1>Cars catalog</h1>
      <br/>
      {!!user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <br/>

          <button onClick={() => {setUser(null); setName(null) }}>LogOut</button>
        </div>
      ) : (
        <div>
          <input
          className="m40"
            type="text"
            placeholder="Plz enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setUser({ name: name })}>LogIn</button>
        </div>
      )}
      <VideoPlayer />
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
