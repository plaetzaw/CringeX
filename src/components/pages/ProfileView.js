import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import ProfileModal from "../ProfileModal";
import { getProfileFeed } from "../../redux/actions/actions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: "15rem",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: "100%",
  },
  cardContent: {
    flexShrink: 0,
  },
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
    width: 60,
    margin: "0 auto 7px auto",
  },
  fullLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "50%",
    marginBottom: 10,
  },
  profile: {
    flexShrink: "0",
    height: "10rem",
    width: "10rem",
    borderRadius: "50%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "1rem",
  },
  makeCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Album(props) {
  useEffect(() => {
    props.getProfileFeed();
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Container className={classes.heroContent} maxWidth="sm">
            <CardMedia
              className={classes.profile}
              image="http://placecorgi.com/250"
              title="Image title"
            />
            <Container className={classes.makeCol}>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                @USERNAME
              </Typography>
              <Typography
                variant="p"
                align="center"
                color="textSecondary"
                paragraph
              >
                Biography this is my biography blah blah blah blah
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Follow
                    </Button>
                  </Grid>
                  <Grid item>
                    <ProfileModal />
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <hr />
          <br />

          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={6} sm={4} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  getProfileFeed: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileFeed: () => {
    dispatch(getProfileFeed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
