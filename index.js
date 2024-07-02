import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

/* const app = express()
const corsOption={
    origin:'*'//'localhost:3000'
}

//configuracion del middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),routes)

app.get('/',(req,res)=>{
    console.log("Holas")
    res.send('Bienvenidos a mi API')})

const server=app.listen(process.env.PORT || 8080,()=>{
    console.log(`Servidor corriendo en puerto: ${server.address().port}`)
})

export default app */

const app = express();
const corsOption = {
    origin: '*' //'localhost:3000'
};

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use('/api', routes);

app.get('/', (req, res) => {
    console.log("Holas");
    res.send('Bienvenidos a mi API');
});

// Verifica que la variable de entorno PORT esté configurada
const PORT = process.env.PORT || 8080;
console.log(`PORT: ${PORT}`);

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${server.address().port}`);
});

export default app;