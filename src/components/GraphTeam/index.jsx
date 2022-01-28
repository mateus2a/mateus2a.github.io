/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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

    // const form = Object.values(todos[0]);
  }, []);
  // const arrayOfObj = Object.entries(todos).map((e) => ({
  //   [e[0]]: e[1],
  // }));
  const d = Object.keys(todos).map((key) => {
    const v = todos[key].value;
    if (v >= 10 && v <= 20) todos[key].value = 7;
    else if (v > 20 && v <= 40) todos[key].value = 8;
    return todos[key];
  });

  console.log(d);
  return (
    <div style={{ height: 200 }}>
      <ResponsiveBar
        data={d}
        keys={["satisfaction"]}
        indexBy="team"
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
    </div>
  );
}

export default GraphTeam;
