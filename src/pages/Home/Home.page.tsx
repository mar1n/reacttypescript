import React, { useState, useEffect } from "react";
import getData from "../../modules/api/github/get-data/get-data";
import { hot } from "react-hot-loader/root";
import { Input, Loader, Page, List } from "../../components";

type list = {
  id: number;
  name: string;
};
export const filteredRepos = (data: list[], search: string) => {
  return data.filter((data) => data.name.includes(search));
};

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<list[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData().then((github: list[]) => {
      setData(github);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Page>
        <Input
          onChange={(inputValue) => setSearch(inputValue)}
          value={search}
        />
        {loading ? <Loader /> : <List data={filteredRepos(data, search)} />}
      </Page>
    </div>
  );
};

export default hot(App) as React.FC;
