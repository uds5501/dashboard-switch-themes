import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, hash, when, who, problem, lang, verdict, time, memory) {
  return { id, hash, when, who, problem, lang, verdict, time, memory };
}

const rows = [
  createData(
    0,
    79053104,
    "May/05/2020 17:24UTC+5.5",
    "uddeshya.singh",
    "D - Alena And The Heater",
    "Python3",
    "Wrong answer on test 7	",
    "187 ms",
    "7900 KB"
  ),
  createData(
    1,
    79053086,
    "May/05/2020 17:14UTC+5.5",
    "uddeshya.singh",
    "D - Alena And The Heater",
    "C++14",
    "Wrong answer on test 7	",
    "187 ms",
    "600 KB"
  ),
  createData(
    2,
    78908900,
    "May/03/2020 21:48UTC+5.5",
    "uddeshya.singh",
    "C - Summarize to the Power of Two",
    "C++14",
    "Accepted",
    "670 ms",
    "4400 KB"
  ),
  createData(
    3,
    78908548,
    "May/03/2020 21:45UTC+5.5	",
    "uddeshya.singh",
    "D - Alena And The Heater",
    "C++14",
    "Wrong answer on test 5	",
    "31 ms",
    "0 KB"
  ),
  createData(
    4,
    78896002,
    "May/03/2020 19:06UTC+5.5	",
    "uddeshya.singh",
    "B - Koala and Lights",
    "C++14",
    "Accepted",
    "155 ms",
    "300 KB"
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Submissions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Submissions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>When</TableCell>
            <TableCell>Who</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell>Lang</TableCell>
            <TableCell>Verdict</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Memory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <Link color="primary" href="#" onClick={preventDefault}>
                  {row.hash}
                </Link>
              </TableCell>
              <TableCell>{row.when}</TableCell>
              <TableCell>{row.who}</TableCell>
              <TableCell>
                <Link color="primary" href="#" onClick={preventDefault}>
                  {row.problem}
                </Link>
              </TableCell>
              <TableCell>{row.lang}</TableCell>
              <TableCell>{row.verdict}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.memory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Submissions
        </Link>
      </div>
    </React.Fragment>
  );
}
