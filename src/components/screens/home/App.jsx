import React, { useEffect, useState } from 'react';
import List from './List';
import WithListLoading from './WithListLoading';
function App() {
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
    <div className='App'>
      <div className='container'>
        <h1>Cars</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}
export default App;