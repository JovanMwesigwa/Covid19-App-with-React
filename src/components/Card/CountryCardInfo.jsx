import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    Width: 400,
  },
  media: {
    maxheight: 10,
  },
});

export default function CountryCardInfo(props) {
  const classes = useStyles();

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://disease.sh/v2/countries")
      .then(response => {
          //const fetchCountriesData = response.data
          setCountries(response.data)
      })
      .catch(error => {
        console.log(error);  
      })
  },[])
  return (
    <div>
      {
        countries.map(country => 
        <div key={country._id}>          
          <span>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography style={{margin: '0 5px', padding: "3px" }} >
              <h6>{country.country}</h6>
              </Typography>
              <Typography >
                <div style={{ display: 'flex', justifyContent: 'space-between',margin: '0 5px', padding: "2px" }} className="country-info-data">
                    <div>
                        <h6>{country.cases}</h6>
                        <h6>CASES</h6>
                    </div>
                      <div>
                        <h6>{country.deaths}</h6>
                        <h6>DEATHS</h6>
                      </div>                      
                  </div>
                  <NavLink to="/view-country" >
                        View Country 
                  </NavLink>
                </Typography>
              </CardContent>
            </CardActionArea>          
          </Card>
          </span>         
        </div>       
      )
      }
    </div>
    
  );
}