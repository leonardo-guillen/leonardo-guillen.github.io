const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1984;

// EndPoint principal que muestra la pagina de bienvenida
app.get('/', (req, res) => {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

// Se muestra la informacion en formato JSON en la pagina
app.get('/api/escuelas', (req, res) => {
    const escuelas = {
        1: {
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Ciudad de México",
        },
        2: {
            "nombre": "Tec de Monterrey GDL",
            "direccion": "Av. General Ramon Corona 2514, C.P.45138, Col. Nuevo Mexico, Zapopan, Jal.",
        }
    };
    res.status(200).json(escuelas);
});

// Pagina que muestra las escuelas (contenido de ecuelas.html)
app.get('/escuelas', (req, res) => {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

// Envio de los datos de los donantes a los clientes
app.get('/donantes', (req, res) => {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

// Enviar los datos de los donantes al cliente
app.get('/api/donantes', (req, res) => {
    const donantes = {
        1: {
            "nombre": "Pedro Benito Juárez",
            "edad": 25
        },
        2: {
            "nombre": "Andres de la Cruz Corona",
            "edad": 50
        }
    };
    res.status(200).json(donantes);
});

// Mencion a las mejores consideraciones de mi equipo individualmente
app.get('/equipo', (req, res) => {
    const myteam = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Team</title>
        <style>
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: gray;
            color: white;
            width: 60%;
            margin: 15px;
          }
        </style>
      </head>
      <body style="display: flex; flex-direction: column; align-items: center;">
        <h1>My team</h1>
        <div>
          <h2>Marcos Ramón Castañeda Ibarra</h2>
          <p>Adaptabilidad</p>
        </div>
        <div>
          <h2>Luisa Merlo García</h2>
          <p>Alegre</p>
        </div>
        <div>
          <h3>Gabriel Alejandro Palomino López</h3>
          <p>Tranquilo</p>
        </div>
        <div>
          <h3>Francisco Raziel Andalón Aguayo</h3>
          <p>Tranquilo</p>
        </div>
      </body>
    </html>
    `;
    res.status(200).send(myteam);
});

// Mi opinion
app.get('/opinion', (req, res) => {
    const myop = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Opinión</title>
        <style>
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: gray;
            color: white;
            width: 60%;
            margin: 15px;
            padding: 20px;
          }
        </style>
      </head>
      <body style="display: flex; flex-direction: column; align-items: center;">
        <img src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
             alt="A new image" width=200/>
        <h1>Responde con tu opinión después de leer el <a href="https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south">artículo</a></h1>

        <div>
          <h2>¿Crees que el colonialismo digital es un riesgo para tu carrera profesional?</h2>
          <p>Profesionalmente, puede traer ventajas debido a la carrera que estudio...</p>
        </div>
      </body>
    </html>
    `;
    res.status(200).send(myop);
});

// Manejo de rutas las rutas no encontradas, con error 404
app.use((req, res) => {
    res.status(404).send('¿Te has perdido? Aquí está muy oscuro para ti...');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en escucha en localhost:${PORT}`);
});

