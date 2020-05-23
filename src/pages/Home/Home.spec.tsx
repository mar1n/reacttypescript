import React from "react";
import renderer from "react-test-renderer";

import HomePage, { filteredRepos } from "./Home.page";

test("Homepage renders as expected", () => {
  const component = renderer.create(
    <HomePage/>
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});


test('filterRepos() will reduce the repo array based on passed search term', () => {
  const dummyRepos = [
    {
      id: 1,
      name: 'This is a name'
    },
    {
      id: 2,
      name: 'another name'
    },
    {
      id: 3,
      name: 'This is a name'
    },
    {
      id: 4,
      name: 'another name'
    }
  ]
 
  const expectedResult: any = [
    {
      id: 1,
      name: 'This is a name'
    },
    {
      id: 3,
      name: 'This is a name'
    }
  ]

  const actualResult = filteredRepos(dummyRepos, 'is')

  expect(actualResult).toEqual(expectedResult)
})