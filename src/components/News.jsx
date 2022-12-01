import * as React from "react";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { CardActionArea } from "@mui/material";

function News({ noticias }) {
  return (
    <Container style={{}}>
      <Card sx={{ display: "flex",gap:'5px',border:'1px solid grey',justifyContent:'space-between',maxHeight:'200px'}}>
        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {noticias.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {noticias.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 150,borderRadius:2,padding:0.5,marginRight:1,maxHeight:150}}
          image={noticias.urlToImage}
          alt="Live from space album cover"
        />
      </Card>
     
    </Container>
  );
}

export default News;
