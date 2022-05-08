import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  headText: {
    textTransform: 'uppercase',
  },
  flag: {
    width: '22px',
    marginRight: '10px',
  },
  txt: {
    marginRight: '6px',
  },
  list: {
    [theme.breakpoints.up('md')]: {
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
});

export function DraftClubs({ clubs, classes }) {
  return (
    <Container>
      <Box my={4}>
        <Typography className={classes.headText}>
          <Box fontWeight='fontWeightBold'>Draft selections by team</Box>
        </Typography>
        <List dense={true}>
          <Grid item xs={12} sm={6} md={4} className={classes.list}>
            {clubs.map((club) => (
              <ListItem>
                <Link
                  component={RouterLink}
                  to={'/drafts/team/' + club.club_id}
                >
                  {club.club}
                </Link>
              </ListItem>
            ))}
          </Grid>
        </List>
      </Box>
    </Container>
  );
}

export default withStyles(styles)(DraftClubs);
