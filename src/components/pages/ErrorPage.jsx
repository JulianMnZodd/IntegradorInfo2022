import { useRouteError } from "react-router-dom";
import Button from '@mui/material/Button';
import './ErrorPage.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/001/857/111/small/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" alt="" />
      <p>Lo siento, a ocurrido un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button color='secondary' size="small" href="/">Volver al buscador</Button>
    </div>
  );
}