import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, contestName, rating, rank) {
  const dataObject = {
    time: time,
    contestName: contestName,
    rating: rating,
    rank: rank,
    tier: getTier(rating)
  };
  return dataObject;
}

function getTier(rating) {
  if (rating < 1199) return "newbie";
  else if (rating < 1399) return "pupil";
  else if (rating < 1599) return "specialist";
  else if (rating < 1899) return "expert";
  else if (rating < 2099) return "candidate master";
  else if (rating < 2299) return "master";
  else if (rating < 2399) return "international master";
  else if (rating < 2599) return "grandmaster";
  else if (rating < 2999) return "international grandmaster";
  else return "legendary grandmaster";
}
const data = [
  createData("Oct 2019", "Codeforces Round #639", 1350, 4234),
  createData("Nov 2019", "Codeforces Round #641", 1393, 1434),
  createData("Dec 2019", "Codeforces Round #643", 1211, 6783),
  createData("Jan 2020", "Codeforces Round #644", 1400, 678),
  createData("Feb 2020", "Codeforces Round #646", 1450, 1345),
  createData("Mar 2020", "Codeforces Round #648", 1581, 1456),
  createData("Apr 2020", "Codeforces Round #649", 1511, 3500)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title> Highest Ratings : 1581 </Title>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Ratings
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="rating"
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
