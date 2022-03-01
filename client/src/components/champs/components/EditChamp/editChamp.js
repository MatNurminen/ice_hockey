import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}
function union(a, b) {
  return [...a, ...not(b, a)];
}

export const EditChampionship = (props) => {
  const {
    classes,
    seasons,
    leagues,
    clubs,
    validclubs,
    getSeasons,
    getLeagues,
    getValidClubs,
    getClubsBySeasonAndLeague,
  } = props;
  const [season, setSeason] = useState(2020);
  const [league, setLeague] = useState(14);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    getSeasons();
    getLeagues();
    getValidClubs(league);
    getClubsBySeasonAndLeague(season, league);
  }, [
    getSeasons,
    getLeagues,
    getValidClubs,
    getClubsBySeasonAndLeague,
    season,
    league,
  ]);

  const seasonChange = useCallback(
    (e) => {
      setSeason(e.target.value);
      getClubsBySeasonAndLeague(e.target.value, league);
    },
    [getClubsBySeasonAndLeague, league]
  );

  const leagueChange = useCallback(
    (e) => {
      setLeague(e.target.value);
      getClubsBySeasonAndLeague(season, e.target.value);
      getValidClubs(e.target.value);
    },
    [getClubsBySeasonAndLeague, getValidClubs, season]
  );

  if (!seasons) {
    return <h1>WAIT!</h1>;
  }
  if (!leagues) {
    return <h1>WAIT!</h1>;
  }
  if (!clubs) {
    return <h1>WAIT!</h1>;
  }
  if (!validclubs) {
    return <h1>WAIT!</h1>;
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  //   const numberOfChecked = (items) => intersection(checked, items).length;

  //   const handleToggleAll = (items) => () => {
  //     if (numberOfChecked(items) === items.length) {
  //       setChecked(not(checked, items));
  //     } else {
  //       setChecked(union(checked, items));
  //     }
  //   };

  const customListLeft = (title, leagues) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            //onClick={handleToggleAll(items)}
            // checked={
            //   numberOfChecked(items) === items.length && items.length !== 0
            // }
            // indeterminate={
            //   numberOfChecked(items) !== items.length &&
            //   numberOfChecked(items) !== 0
            // }
            disabled={leagues.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        //subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component='div' role='list'>
        {validclubs.map((validclub) => {
          const labelId = `transfer-list-all-item-${validclub.club}-label`;
          return (
            <ListItem
              key={validclub.club_id}
              role='listitem'
              button
              //onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(validclub.club_id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={validclub.club} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  const customListRight = (title, clubs) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            //onClick={handleToggleAll(items)}
            // checked={
            //   numberOfChecked(items) === items.length && items.length !== 0
            // }
            // indeterminate={
            //   numberOfChecked(items) !== items.length &&
            //   numberOfChecked(items) !== 0
            // }
            disabled={clubs.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        //subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component='div' role='list'>
        {clubs.map((club) => {
          const labelId = `transfer-list-all-item-${club.club_id}-label`;

          return (
            <ListItem
              key={club.club_id}
              role='listitem'
              button
              //onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(club.club_id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={club.club} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Container>
      <Typography variant='h4'>Edit Championship</Typography>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <Grid item className={classes.clubsLeftLabel} xs={6}>
              <Typography variant='body2'>
                Clubs: {validclubs.length}
              </Typography>
            </Grid>
            {customListLeft('Choices', validclubs)}
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id='season-label'>Season</InputLabel>
              <Select
                labelId='season-label'
                defaultValue={2020}
                value={season}
                onChange={seasonChange}
              >
                {seasons.map((season, id) => (
                  <MenuItem key={id} value={season.year}>
                    {season.season}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id='league-label'>League</InputLabel>
              <Select
                labelId='league-label'
                defaultValue={1}
                value={league}
                onChange={leagueChange}
              >
                {leagues.map((league, id) => (
                  <MenuItem key={id} value={league.league_id}>
                    {league.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Grid item className={classes.clubsRightLabel} xs={6}>
              <Typography variant='body2'>Clubs: {clubs.length}</Typography>
            </Grid>
            {customListRight('Choices', clubs)}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default styles(EditChampionship);
