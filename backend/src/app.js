import express from "express";
import cors from "cors";
import categoriasRoutes from './routes/categorias.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import correosRoutes from './routes/correos.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';
import empleadosUbicacionesRoutes from './routes/empleados.ubicaciones.js';
import facturaDetalleRoutes from './routes/factura.detalle.routes.js';
import facturaRoutes from './routes/facturas.routes.js';
import productosRoutes from './routes/productos.routes.js';
import proveedoresRoutes from './routes/proveedores.routes.js';
import regionesRoutes from './routes/regiones.routes.js';
import ubicacionesRoutes from './routes/ubicaciones.routes.js';


const app = express();
app.use(cors());
app.set('port', 7001);


//Rutas
app.use('/api/categorias', categoriasRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/correos', correosRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/empleadosubicaciones', empleadosUbicacionesRoutes);
app.use('/api/facturadetalle', facturaDetalleRoutes);
app.use('/api/facturas', facturaRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/regiones', regionesRoutes);
app.use('/api/ubicaciones', ubicacionesRoutes);


export default app;