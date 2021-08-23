import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
  },
  cardStyle :{
    width: '30%',
    height: '27vw',
    display: 'block',
    marginBottom: '1%'
}
});

export default function HomeCard({ data}) {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/Images/${data.image}`}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          {data.description.split(',').map(d =>(
            <Typography variant="body2" color="textSecondary" component="p">
             {d}
            </Typography>
          ) )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}