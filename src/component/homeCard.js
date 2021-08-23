import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: '29%',
    height: '27w',
    marginBottom: '1.5%'
  },
  media: {
    height: 0,
    paddingTop: '80%', // 16:9,
  },
  cardStyle :{
    width: '30%',
    height: '27vw',
    display: 'block',
    marginBottom: '1%',
}
});

export default function HomeCard({ data, key}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={key} >
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
