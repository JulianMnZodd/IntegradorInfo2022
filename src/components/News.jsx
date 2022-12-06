import * as React from "react";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DateTime } from "luxon";

function News({ noticias }) {
  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          gap: "5px",
          border: "1px solid grey",
          maxHeight: "200px",
        }}
      >
        <CardActionArea href={noticias.url} target="_blank">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "5px",
            }}
          >
            <Typography component="div" variant="h5">
              {noticias.title}
            </Typography>
            <Typography
              variant="subtitle3"
              color="text.secondary"
              component="div"
            >
              Fuente: {noticias.source.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {noticias.description}
            </Typography>
            <Typography
              variant="subtitle3"
              color="text.secondary"
              component="div"
            >
              {`Publicado el: ${DateTime.fromISO(noticias.publishedAt)
                .toFormat("f")
                .split(",")
                .join(" a las")
                .split("/")
                .join("-")} hs.`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: 150,
            borderRadius: 2,
            padding: 0.5,
            margin: 1,
            maxHeight: 170,
          }}
          image={noticias.urlToImage}
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
}

export default News;
