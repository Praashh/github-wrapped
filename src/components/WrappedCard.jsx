import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterShare from './TwitterShare'
import { useRecoilValue } from 'recoil';
import { inputState } from '../atoms/Input';

export default function WrappedCard() {
 
    const inputText =  useRecoilValue(inputState);

  return (
    <Card  style={{background:'rgb(125 125 125)', boxShadow: '#454343 10px 5px 16px', width:'400px', height:'200px'}}>
      <CardContent>
        <Typography color={"white"} variant='h5' gutterBottom>
          Wrapped-1 for {inputText}
        </Typography>
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' style={{background:"#242424"}}>
        <TwitterShare url='www.google.com' text='f'/>
        </Button>
      </CardActions>
    </Card>
  );
}