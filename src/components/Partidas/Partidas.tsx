import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Partidas() {
  const classes = useStyles();

  return (
    <div>
      <h2>Partidas</h2>
    </div>
  );
}
