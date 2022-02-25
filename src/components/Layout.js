import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IMAGE_URL } from "../config";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "black",
  border: "white",
}));

function Layout({ layout, imagelayout, layoutmaps }) {
  function getOptions(index) {
    let temp =
      layout[index] &&
      layout[index].data.map((lay) => {
        let time = new Date(lay.datetime);
        let milliseconds = time.getTime();
        return [milliseconds, lay.value];
      });
    let opt = {
      xAxis: {
        type: "datetime",
      },
      chart: {
        height: 75,
      },
      title: {
        text: null,
      },
      yAxis: {
        title: false,
      },

      series: [
        {
          showInLegend: false,
          name: "Time",
          data: temp,
        },
      ],
      credits: {
        enabled: false,
      },
    };
    return opt;
  }
  let interval;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    interval = setInterval(() => {
      if (index > imagelayout.length) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  if (!layoutmaps.latitude || !layoutmaps.longitude) {
    return <h1 className="text-center">Map View</h1>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Item>
            <div className="left-container">
              <h4 className="text-center header">Real Time Observations</h4>
              {layout.map((lay, index) => {
                return (
                  <Grid container spacing={0} className="parameter">
                    <Grid item xs={3}>
                      <div className="parameters">{lay.parameter_name}</div>
                    </Grid>
                    <Grid item xs={9} className="container-graph">
                      <div className="chart">
                        <HighchartsReact
                          key={index}
                          highcharts={Highcharts}
                          options={getOptions(index)}
                        />
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <h4 className="text-center header">Site Locations</h4>
            <MapContainer
              center={[27.807245, 85.455791]}
              zoom={16}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                key={[layoutmaps.latitude, layoutmaps.longitude]}
                position={[layoutmaps.latitude, layoutmaps.longitude]}
              >
                <Popup>Points</Popup>
              </Marker>
            </MapContainer>
          </Item>
          <Item>
            <h4 className="text-center header">Time Lapse Images</h4>
            {imagelayout[index] && (
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={IMAGE_URL + imagelayout[index].source}
                  alt=""
                />
              </div>
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Layout;
