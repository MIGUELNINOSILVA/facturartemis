const urlGetAllCategorias = "http://localhost:7001/api/categorias";


export const obtainCategories = async (req, res) => {
    try {
        const response = await fetch(urlGetAllCategorias);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const nuevaCategoria = async (categoria) => {
  
};


export const deleteCategory = async (id) => {
  
};



export const obtenerCategory = async (id) => {
 
};



export const editarCategory = async (category) => {
 
};





