//import React, { Component, useState, useEffect } from 'react';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
//import CircularProgress from '@material-ui/core/CircularProgress';
//import axios from 'axios';
import { getLeagues } from '../../store/actions/leagueActions';

// // IT'S WORKING!
// const useStyles = makeStyles((theme) => ({
//   root: { margin: theme.spacing(2), textAlign: 'center' },
//   progress: { margin: theme.spacing(2) },
//   search: { marginLeft: theme.spacing(2) },
// }));

// function MaybeLoading({ loading }) {
//   const classes = useStyles();
//   return loading ? <CircularProgress className={classes.progress} /> : null;
// }

// export default function GetLeagues() {
//   const classes = useStyles();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const GetData = async () => {
//       const result = await axios('/api/leagues');
//       setData(result.data);
//       setLoading(false);
//     };
//     //setTimeout(() => GetData(), 1000);
//     GetData();
//     //console.log(data);
//   }, []);

//   return (
//     <Container>
//       <Paper className={classes.root}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Short Name</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((league) => (
//               <TableRow key={league.league_id}>
//                 <TableCell>{league.name}</TableCell>
//                 <TableCell>{league.s_name}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <MaybeLoading loading={loading} />
//       </Paper>
//     </Container>
//   );
// }

const styles = (theme) => ({
  logo: {
    width: '20%',
  },
});

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: [],
    };
  }

  componentDidMount() {
    this.props.getLeagues();
  }

  render() {
    const { classes, leagues } = this.props;

    if (!leagues) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Typography variant='h4'>Leagues</Typography>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' width='30%'>
                  Logo
                </TableCell>
                <TableCell width='30%'>Name</TableCell>
                <TableCell width='30%'>Short Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leagues.map((league) => (
                <TableRow key={league.league_id}>
                  <TableCell align='center'>
                    <img className={classes.logo} alt='' src={league.logo} />
                  </TableCell>
                  <TableCell>
                    <Link
                      component={RouterLink}
                      to={'leagues/' + league.league_id}
                    >
                      {league.name}
                    </Link>
                  </TableCell>
                  <TableCell>{league.s_name}</TableCell>
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
  leagues: state.leagueReducer.leagues,
});

export default connect(mapStateToProps, { getLeagues })(
  withStyles(styles)(Leagues)
);
