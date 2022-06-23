import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Mountain Beside Body of Water With Aurora Borealis
                  " img="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2113566.jpg&fm=jpg"/>
      <Post title="Simply Recipes Less Stress. More Joy" img="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"/>
      <Post title="What To Do In London" img="https://images.unsplash.com/photo-1564311463704-fa4f3b19023b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGlnaHRidWxifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <Post title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Shortcut Travel Guide to Manhattan" img="https://images.unsplash.com/photo-1571145551427-35601e8bcf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <Post title="Killer Actions to Boost Your Self-Confidence" img="https://images.unsplash.com/photo-1614640384477-93219e3554a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
    </Container>
  );
};

export default Feed;