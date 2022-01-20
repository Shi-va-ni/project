import React, {useState} from 'react';
import { CircularProgress, Grid,Topography, InputLabel, FormControl, Select, Typography, MenuItem } from '@material-ui/core';

import useStyles from "./styles";

import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('resturants');
    const [rating, setRating] = useState('');

    const places =[
        {name:"FootBall Field"},
        {name:"mess"},
        {name: "common room"},
    ]
        
    return(
        <div classNmae={classes.container}>
            <Typography variant = "h5" > Resturants, Hotels and Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value = {type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="resturants">Resturants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>    
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>    
                </Select>
            </FormControl>
            <Grid container spaceing={3} classname={classes.list}>
                {places?.map((place,i) =>

                    <Grid item key={i} xs={12}> 
                        <PlaceDetails place={place}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default List;