/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import fire from "../../fire.jsx";

function GraphTeam() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = () => {
      fire
        .database()
        .ref("form")
        .on("value", (snapshot) => {
          setTodos(snapshot.val());
        });
    };
    console.log(todos);
    getTodos();
  }, []);
  // const result = Object.keys(todos).map((key) => [Number(key), todos[key]]);
  // console.log(result);
  const data = [
    {
      day: "Monday",
      degress: 59,
    },
    {
      day: "Tuesday",
      degress: 61,
    },
    {
      day: "Wednesday",
      degress: 55,
    },
    {
      day: "Thursday",
      degress: 78,
    },
    {
      day: "Friday",
      degress: 71,
    },
    {
      day: "Saturday",
      degress: 56,
    },
    {
      day: "Sunday",
      degress: 67,
    },
  ];
  return (
    <ResponsiveBar
      // data={[todos]}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}

export default GraphTeam;
