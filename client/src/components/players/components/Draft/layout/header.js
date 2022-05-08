import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Header = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant='h4'>NHL Entry Draft</Typography>
      </Box>
      <hr />
    </Container>
  );
};

export default Header;
