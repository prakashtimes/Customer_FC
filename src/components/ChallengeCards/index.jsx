import styles from './index.module.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import food from "../../assets/img/food1.jpg"
import Button from '@material-ui/core/Button';
import {  Row, Col } from 'react-bootstrap';
import medal from '../../assets/img/medal.png'
require('typeface-montserrat')


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      maxHeight: 700,
      padding: '2px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
export default function ChallengeCards({data}) {
  const classes = useStyles();
  

  return (

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data?.logo}
          </Avatar>
        }
        title={<div style={{fontFamily: 'Montserrat',textAlign:'left', fontSize: '15px', fontWeight:'bold'}}>{data?.name}</div>}
        subheader={<div style={{fontFamily: 'Montserrat',textAlign:'left', fontSize: '12px', color: 'black'}}>{data?.address}</div>}
      />
      <CardMedia
        className={classes.media}
        image={food}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <div style={{fontFamily: 'Montserrat', color: 'black', textAlign:'left', fontSize:'12px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Row>
        <Col><Button variant="contained" color="primary" onClick={()=>{alert("Clicked")}}>Participate</Button></Col>
        </Row>
        <Row>
        <Col style={{paddingLeft:'60px', fontSize:'14px',fontWeight:'bold'}}><img style={{marginTop:'-2px',height:'20px', weight: '20px'}} src={medal}/> <span style={{alignItems:'center'}}>Rs 3000/-</span> </Col>    
        </Row>
      </CardActions>
      
    </Card>

  );
}