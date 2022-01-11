import React, { useEffect, useState } from "react";

export default function App() {
  const [apiResult, setApiResult] = useState();

  const apiCall = () => {
    fetchData("https://randomuser.me/api").then(response => setApiResult(response));
  };
  return (
    <div>
      <h1>hi</h1>
      <button onClick={apiCall}>FETCH</button>
      <div>
        {apiResult &&
          apiResult.map((el, i) => {
            return (
              <div key={i}>
                <p>
                  {el.name.title} {el.name.first} {el.name.last}
                </p>
                <img
                  src={el.picture.large}
                  alt={`picture of ${el.name.first} ${el.name.last}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

const fetchData = url => {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response.results);
      return response.results;
    });
};
