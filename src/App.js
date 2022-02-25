import Header from "./components/Header";
// import DataTable from "./components/DataTable";
// import ImageSlider from "./components/ImageSlider";
// import MapView from "./components/MapView";
// import GraphView from "./components/GraphView";
import Layout from "./components/Layout";
import "./App.css";
import { React, useState, useEffect } from "react";
import { fetchData } from "./libs/api";

function App() {
  const [observation, setObservation] = useState([]);
  const [images, setImages] = useState([]);
  const [maps, setMaps] = useState([]);
  const [graph, setGraphs] = useState([]);
  const [layout, setLayout] = useState([]);
  const [imagelayout, setImagelayout] = useState([]);
  const [layoutmaps, setLayoutmaps] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setObservation(response.data[0].observations);
      setImages(response.data[0].files);
      setMaps([
        { latitude: 27.807245, longitude: 85.455791 },
        { latitude: 27.809245, longitude: 85.451791 },
        { latitude: 27.800245, longitude: 85.459791 },
      ]);
      setGraphs(response.data[0].observations);
      setLayout(response.data[0].observations);
      setImagelayout(response.data[0].files);
      setLayoutmaps(response.data[0]);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <DataTable observation={observation} />
      <ImageSlider images={images} />
      <MapView maps={maps} />
      <GraphView graph={graph} /> */}
      <Layout
        layout={layout}
        imagelayout={imagelayout}
        layoutmaps={layoutmaps}
      />
    </div>
  );
}

export default App;
