/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { Bar } from "@nivo/bar";
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
  const data = [
    {
      satisfaction: "10",
      team: 15,
    },
    {
      satisfaction: 10,
      team: "15 ou mais",
    },
    {
      satisfaction: 6,
      team: "15 ou mais",
    },
    {
      satisfaction: 4,
      team: "1 até 3",
    },
    {
      satisfaction: 6,
      team: "4 até 6",
    },
  ];
  console.log(d);
  return (
    // style={{ height: 200 }}
    <div>
      <Bar
        width={600}
        height={400}
        margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
        data={data}
        indexBy="country"
        keys={["hot dogs"]}
        labelTextColor="inherit:darker(1.4)"
        enableGridX
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: "green",
              },
              text: {
                fill: "red",
              },
            },
          },
          grid: {
            line: {
              stroke: "pink",
              strokeWidth: 2,
              strokeDasharray: "4 4",
            },
          },
        }}
      />
    </div>
  );
}

export default GraphTeam;
