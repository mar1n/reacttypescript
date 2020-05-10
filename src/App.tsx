import React, { useState, useEffect } from "react";
interface list {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [list, setList] = useState<list[]>([]);
  const [data, setData] = useState<list[]>([]);
  useEffect(() => {
    async function szymon() {
      try {
        let fetchCall = await fetch("https://api.github.com/users/Jonjoe/repos");
        let data = await fetchCall.json();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    }
    szymon();
  }, []);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let search = data.filter(word => word.name.includes(e.target.value))
      setSearch(e.target.value)
      setList(search)
  }
  return (
    <div className="App">
      <p>hello world</p>
      <p>{search}</p>
      <input value={search} onChange={searchChange} />
      {list.map((details) => (
        <div key={details.id} className="details">{details.name}</div>
      ))}
    </div>
  );
};

export default App;
