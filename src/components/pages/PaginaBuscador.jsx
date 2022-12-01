import {useEffect,useState} from 'react'
import SearchAppBar from "../SearchAppBar";
import Container from '@mui/material/Container';
import NewsList from "../NewsList"
//import {NewService} from ".../Services/NewService"

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function PaginaBuscador() {
  const [searchParams] = useSearchParams();
  const [news, setNews] = useState([]);

  const [contexto, setContexto] = useState(
    searchParams.get("search") || "argentina"
  );

  const onSearch = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?country=ar&q=${contexto}&apiKey=48daa31b215045c5abd4714a438f4347`
      //`http://www.omdbapi.com/?s=${contexto}&page=${pagActual}&apikey=NewService`
    );
    const news = await resp.json();
    setNews(news.articles);
    console.log(news.articles)
    //setCantidadPaginas(Math.ceil(parseInt(news.totalResults) / 10));
  };
  

  useEffect(() => {
    onSearch();
  }, []);


  return (
    <Container>
      <SearchAppBar />
      <NewsList news={news}></NewsList>
    </Container>
  );
}

export default PaginaBuscador;