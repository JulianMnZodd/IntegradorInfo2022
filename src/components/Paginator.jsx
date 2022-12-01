import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onCambioPagina,
    pagActual
}) => {
    return <Pagination count={cantidadPaginas} color="secondary" page={pagActual}
    onChange={(e,v)=>{
        onCambioPagina(v)
        console.log(v)
    }}></Pagination>
}   

export default Paginador;