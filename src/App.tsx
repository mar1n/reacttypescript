import React, { useState, useEffect } from "react";
interface list {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<list[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getData() {
      try {
        let fetchCall = await fetch(
          "https://api.github.com/users/Jonjoe/repos"
        );
        let data = await fetchCall.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <p>hello world</p>
      <p>{search}</p>
      <input value={search} onChange={searchChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        data
          .filter((word) => word.name.includes(search))
          .map((details) => (
            <div key={details.id} className="details">
              {details.name}
            </div>
          ))
      )}
    </div>
  );
};

export default App;
