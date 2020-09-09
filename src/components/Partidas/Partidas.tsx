import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Container from "@material-ui/core/Container";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function createData(
  idPartida: number,
  fecha: string,
  estado: string,
  provincia: string,
  modoDeJuego: string,
  partidaGanada: boolean | null
) {
  return {
    idPartida,
    fecha,
    estado,
    provincia,
    modoDeJuego,
    partidaGanada,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.idPartida}
        </TableCell>
        <TableCell align="center">{row.fecha}</TableCell>
        <TableCell align="center">{row.estado}</TableCell>
        <TableCell align="center">{row.provincia}</TableCell>
        <TableCell align="center">{row.modoDeJuego}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Detalles de la partida
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    1,
    "09/09/2020 15:23",
    "En Progreso",
    "Buenos Aires",
    "Normal",
    null
  ),
  createData(
    2,
    "08/09/2020 13:27",
    "Terminada",
    "Buenos Aires",
    "Rapido",
    null
  ),
  createData(
    3,
    "06/09/2020 18:37",
    "Terminada",
    "Buenos Aires",
    "Normal",
    null
  ),
  createData(
    4,
    "03/09/2020 12:51",
    "Cancelada",
    "Buenos Aires",
    "Extendido",
    null
  ),
  createData(
    5,
    "27/08/2020 14:14",
    "Terminada",
    "Buenos Aires",
    "Normal",
    null
  ),
];

export default function Partidas() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID Partida</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Provincia</TableCell>
              <TableCell align="center">Modo de juego</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.idPartida} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
