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
    getTodos();
  }, []);
  const arrayOfObj = Object.entries(todos).map((e) => ({
    [e[0]]: e[1],
  }));

  console.log(arrayOfObj);
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
