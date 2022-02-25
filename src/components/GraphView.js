import { React } from "react";
import Highcharts, { getOptions } from "highcharts";
import HighchartsReact from "highcharts-react-official";

function GraphView({ graph }) {
  // const d1 =
  //   graph[0] &&
  //   graph[0].data.map((gr) => {
  //     let time = new Date(gr.datetime);
  //     let milliseconds = time.getTime();
  //     return [milliseconds, gr.value];
  //   });
  // const options = {
  //   title: {
  //     text: "Graph View of API",
  //   },
  //   xAxis: {
  //     type: "datetime",
  //   },
  //   series: [
  //     {
  //       name: "Time",
  //       data: d1,
  //     },
  //   ],
  // };

  function getOptions(index) {
    // console.log(graph[index]);
    let temp =
      graph[index] &&
      graph[index].data.map((gr) => {
        let time = new Date(gr.datetime);
        let milliseconds = time.getTime();
        return [milliseconds, gr.value];
      });
    let opt = {
      title: {
        text: "Graph View of API",
      },
      xAxis: {
        type: "datetime",
      },
      series: [
        {
          name: "Time",
          data: temp,
        },
      ],
    };
    return opt;
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Graph View</h1>
        <HighchartsReact highcharts={Highcharts} options={options} />
        {graph &&
          graph.map((gr, index) => {
            // console.log(index);
            return (
              <HighchartsReact
                key={index}
                highcharts={Highcharts}
                options={getOptions(index)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default GraphView;
