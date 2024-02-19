import { useEffect, useState } from "react";
import "./App.css";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { fetchCurrentOrGivenLocationData } from "./Apis/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchedCity, setSearchedCity] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const  data  = await fetchCurrentOrGivenLocationData(searchedCity);
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchedCity]);

  console.log(searchedCity)


  return (
    <>
      <main>
        <div className="container-fluid ">
          <div className="row justify-content-md-center">
            <LeftBar data={data} setSearchedCity={setSearchedCity} />
            <RightBar data={data} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
