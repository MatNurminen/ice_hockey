import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
//import { makeStyles } from '@material-ui/core/styles';

//import axios from 'axios';

import { getPlayers } from '../../store/actions/playersActions';
import { Button } from '@material-ui/core';

/* // IT'S WORKING!
const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

export default function GetLeagues() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await axios('/leagues');
      setData(result.data);
    };
    GetData();
    //console.log(data);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Short Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((league) => (
            <TableRow key={league.league_id}>
              <TableCell>{league.name}</TableCell>
              <TableCell>{league.s_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */

export class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const { players } = this.props;

    if (!players) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Pos</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.player_id}>
                  <TableCell>{player.num}</TableCell>
                  <TableCell>{player.pos}</TableCell>
                  <TableCell
                    component={Link}
                    to={'/players/' + player.player_id}
                  >
                    {player.first_name} {player.last_name}
                  </TableCell>
                  <TableCell>
                    <Button variant='contained'>Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained' color='secondary'>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playersReducer.players,
});

export default connect(mapStateToProps, { getPlayers })(Players);
