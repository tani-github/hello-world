import { Grid, Paper, Box, makeStyles } from "@material-ui/core"
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: 3,
    borderRadius: 3,
    borderColor: 'primary.main',
  },
  inner: {
    width: "240px",
    minHeight: "200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default function layout_test() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} style={{ border: 3 }}>
      <Grid item xs={4} >
        要素1aa
      </Grid>
      <Grid item xs={4} >
        要素2
        <Paper color="primary.main">
        Hooks でクラススタイルが書きやすくなったよ
        </Paper>
        <Box bgcolor="primary.main">こんにちわわ</Box>
        <Box color="text.primary">こんばんわああ</Box>
      </Grid>
      <Grid item xs={4} >
        要素3
      </Grid>

      <BottomNavigation className={classes.root}>
  <BottomNavigationAction label="Recents" value="recents" />
  <BottomNavigationAction label="Favorites" value="favorites" />
  <BottomNavigationAction label="Nearby" value="nearby" />
  <BottomNavigationAction label="Folder" value="folder" />
</BottomNavigation>
    </Grid>
  );
}
