const url = "http://localhost:7001/api/categorias";


export async function getCategorias(){
    try {
        const extract = await fetch(url);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
