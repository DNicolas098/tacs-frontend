import Fab from "@material-ui/core/Fab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(8),
      right: theme.spacing(8),
    },
  })
);

export default function NuevaPartidaFabButton() {
  const classes = useStyles();

  return (
    // FIXME: Al agregar el fab, aparecio la barra desplazamiento horizontal (parece que se agrego alguna especie de padding o margen)
    <div className={classes.root}>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}
