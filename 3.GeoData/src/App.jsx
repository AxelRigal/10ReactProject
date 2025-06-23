import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";

function App() {
  const [europeData, setEuropeData] = useState(null);
  const [errorApi, setErrorApi] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        if (!response.ok) {
          throw new Error(` Error ${response.status}, ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setEuropeData(sortCountry(data));
      })
      .catch((e) => setErrorApi(e.message));
  }, []);

  function sortCountry(data) {
    return data.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  console.log(europeData);
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Data</h1>
        <p className="text-gray-100 text-xl mb-8">
          {" "}
          Click on a card to reveal country's information.
        </p>
        {europeData && !errorApi && (
          <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
            {europeData.map((country, index) => (
              <ListCard key={index} country={country} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
