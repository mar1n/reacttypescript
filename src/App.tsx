import React, { useState, useEffect } from "react"
import { hot } from 'react-hot-loader/root';
import { Input, Loader, Page, List } from "./components"
type list = {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<list[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    async function getData() {
      try {
        let fetchCall = await fetch(
          "https://api.github.com/users/Jonjoe/repos"
        )
        let data = await fetchCall.json()
        setData(data)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, []);

  const filteredRepos: any = data.filter((data: any) =>
    data.name.includes(search)
  );

  return (
    <div className="App">
      <Page>
        <Input
          onChange={inputValue => setSearch(inputValue)}
          value={search}
        />
        {
          loading ? <Loader/> : <List data={filteredRepos} />
        }
      </Page>
    </div>
  );
};

export default hot(App) as React.FC
