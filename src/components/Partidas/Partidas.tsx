import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
import Grid from "@material-ui/core/Grid";

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
    subDetalle: {
      paddingLeft: "20px",
    },
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
);

function createData(
  idPartida: number,
  fecha: string,
  estado: string,
  provincia: string,
  modoDeJuego: string,
  partidaGanada: boolean | null,
  jugadores: string[],
  ganador: string | null,
  cantidadDeMunicipios: number
) {
  return {
    idPartida,
    fecha,
    estado,
    provincia,
    modoDeJuego,
    partidaGanada,
    jugadores,
    ganador,
    cantidadDeMunicipios,
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
        <TableCell scope="row">{row.idPartida}</TableCell>
        <TableCell align="center">{row.fecha}</TableCell>
        <TableCell align="center">{row.estado}</TableCell>
        <TableCell align="center">{row.provincia}</TableCell>
        <TableCell align="center">{row.modoDeJuego}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container style={{ padding: "0px 20px 20px 20px" }}>
              <Grid item xs={12}>
                <Typography variant="h6">Más detalles</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  <div>Jugadores</div>
                  {row.jugadores.map((jugador) => (
                    <div className={classes.subDetalle}>
                      <Typography variant="body1">{jugador}</Typography>
                    </div>
                  ))}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  Ganador: {row.estado == "En Progreso" ? "-" : row.ganador}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Cantidad de municipios: {row.cantidadDeMunicipios}
                </Typography>
              </Grid>
            </Grid>
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
    null,
    ["Cuario", "Cirif", "XMonad", "Annatar"],
    null,
    27
  ),
  createData(
    2,
    "08/09/2020 13:27",
    "Terminada",
    "Cordoba",
    "Rapido",
    null,
    ["Cuario", "Cirif", "XMonad", "Annatar"],
    "Cuario",
    12
  ),
  createData(
    3,
    "06/09/2020 18:37",
    "Terminada",
    "La Pampa",
    "Normal",
    null,
    ["Cuario", "Cirif", "XMonad", "Annatar"],
    "Cirif",
    17
  ),
  createData(
    4,
    "03/09/2020 12:51",
    "Cancelada",
    "Buenos Aires",
    "Extendido",
    null,
    ["Cuario", "Cirif", "XMonad", "Annatar"],
    "XMonad",
    30
  ),
  createData(
    5,
    "27/08/2020 14:14",
    "Terminada",
    "Tucuman",
    "Normal",
    null,
    ["Cuario", "Cirif", "XMonad", "Annatar"],
    "Annatar",
    10
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
