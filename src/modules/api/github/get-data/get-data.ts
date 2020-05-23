async function getData(): Promise<[]> {
  let fetchCall = await fetch("https://api.github.com/users/Jonjoe/repos");
  let data = await fetchCall.json();
  return data;
}

export default getData;
