//Escribe un comentario explicando para qué sirve http
import http from 'http';
// http nos sirve para generar un servidor http, al cual ya se podria agregar
// funcionalidades, tales como las existentes en cualquier backend
//Escribe un comentario explicando para qué sirve fs
import fs from 'fs';
// Este modulo nos permite trabajar con archivos o con directorios en el sistema
// lo que nos lleva a una gran variedad de posibilidades

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500
           // 500 es el codigo de estado que sera enviado, indicando que no se logro correctamente la bienvenida
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        // El 200 es un codigo de estado tipico en web para indicar que todo se ejecuto correctamente
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
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
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      // Nos permite convertir el contenido del json a un string para poder enviarlo al front, de lo contrario
      // tendriamos errores.
      res.end(JSON.stringify(escuelas));
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // Enlace a escuelas
            let newData = `
              
            <a href="/donantes">
              Donantes
            </a>
            `;
            res.end(newData);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // Enlace a escuelas
            let newData = `
              
            <a href="/escuelas">
              Escuelas
            </a>
            `;
            // Creacion de la pagina donantes
            fs.writeFile('donantes.html', `${data}${newData}`, 'utf-8', (err) => {
              if (err) throw err;
            });
            res.end(newData);
            return;
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
    //Tienes que corregir varias cosas en esta sección

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

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(donantes));
    }

    function mostrarEquipo(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Definicion de contenido a mostrar
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
      // crea el archivo equipo.html para guardarlo
      fs.writeFile('equipo.html', `${myteam}`, 'utf-8', (err) => {
        if (err) throw err;
      });
      res.end(myteam);
    }

    function myopinion(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Definicion de contenido a mostrar
      const myop = `
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
                padding: 20px;
              }
            </style>
          </head>
          <body style="display: flex; flex-direction: column; align-items: center;">
          <img src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="A new image" width=200/>
            <h1>Responde con tu opinion despues de leer el <a href="https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south">articulo</a></h1>

            <div>
              <h2>¿Crees que el colonialismo digital es un riesgo para tu carrera profesional?</h2>
              <p>Profesionalmente, el hecho de que estas empresas se hayan posicionado de ta manera incluso 
              puede dar ventajas, ya que debido a la carrera que estoy estudiando, estas empresas abren una gran 
              cantidad de puestos, por lo que existen muchísimas oportunidades de trabajo.</p>
            </div>
            <div>
              <h2> ¿Para tu vida persona?</h2>
              <p>Para mi vida personal esto sí puede representar un mayor riesgo, ya que en el momento 
              en el que empresas se posicionan de tal manera. Si en algún punto surge la idea de iniciar una 
              strat-up todo se vuelve más complejo, ya que es muy complicado llegar al nivel de las grandes 
              tecnológicas, además de que existe una gran competencia.
              
              Además de confiar mis datos personales a estas empresas, que al final usualmente 
              son muy invasivas en la privacidad.
              </p>
            </div>
            <div>
              <h3>¿Qué es el freedombox?</h3>
              <p>Freedombox es un proyecto pensado para no compartir tus datos personales con estas empresas, 
              de tal manera que conviertes cualquier ordenador personal, o miniordenadores en un servidor, 
              en los cuales podrás gestionar tú mismo el tráfico o almacenamiento de tus datos, como por ejemplo 
              utilizando como tu drive personal.

              Esto termina resultando en una privacidad y control absoluto de tus datos.</p>
            </div>
          </body>
        </html>
      `;
      // crea el archivo equipo.html para guardarlo
      fs.writeFile('opinion.html', `${myop}`, 'utf-8', (err) => {
        if (err) throw err;
      });
      res.end(myop);
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('¿Te has perdido? Aquí está muy oscuro para ti...');
    }
    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      }
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      else if (url === '/opinion') {
        myopinion(req, res);
      }
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?
      // Si agrego la imagen funciona sin problemas, el caso negativo dependera de como se intente agregar o si esta mal colocado

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html