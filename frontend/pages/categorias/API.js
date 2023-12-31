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

export async function insertCategorias(data) {
    try {
        await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method : 'POST',
            body: JSON.stringify(data)
        });
        window.location = "categorias.html";
    } catch (error) {
        console.log(error);
    }
}
export async function getCategoria(id){
    try {
        const extract = await fetch(`${url}/${id}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCategoria(data, id) {
    try {
        const connection = await fetch(`${url}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        });
        window.location = 'categorias.html';
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCategorias(id) {
    try {
        await fetch(`${url}/${id}`,
        {
            method: 'DELETE'
        });
        window.location = "categorias.html";
    } catch (error) {
        console.log();
    }
}