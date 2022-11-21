import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardz() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }} style={{borderRadius:"4%"}}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.ndtv.com/tech/gadgets/ps4_sony_small.jpg?downsize=160:120"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{fontSize:"1.1rem"}}>
         Playstation 5 <span style={{float:"right",color:"grey"}}>1 day <LocalShippingIcon style={{transform:"translateY(5px)"}}/> </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body1" color="text.secondary">
        $500/month
      </Typography>
          <Button
            // className='gradientButton'
            size="small"
            variant='inherit'
     
            style={{ border: "#007991 2px solid", color: "white", margin: "1%" ,transform:"translateX(70px)"}}
          >
            <span style={{ color: "#007991" }} > Rent Now </span>
          </Button>
      </CardActions>
    </Card>
  );
}
