# Demo de Ataque DoS

Este proyecto demuestra un ataque de Denegación de Servicio (DoS) simple utilizando un servidor Node.js con Express y un script Python para realizar múltiples solicitudes simultáneas.

## Estructura del Proyecto

- **`server.js`**: Servidor Node.js que sirve contenido pesado para simular una alta carga de procesamiento.
- **`attack.py`**: Script Python que realiza múltiples solicitudes concurrentes para simular un ataque DoS.
- **`Dockerfile`**: Configuración del contenedor para el servidor Node.js.
- **`docker-compose.yml`**: Configuración para desplegar el servidor sin NGINX.
- **`docker-compose-nginx.yml`**: Configuración para desplegar el servidor con NGINX como proxy inverso.
- **`nginx.conf`**: Configuración de NGINX.

## Dependencias

### Node.js
El servidor utiliza **Express** para manejar las solicitudes HTTP.

### Python
El script de ataque usa **aiohttp** para manejar solicitudes asíncronas.

### Docker
Se utiliza Docker para contenerizar la aplicación y su infraestructura de soporte.

## Instalación

### 1. Clonar el Repositorio
```bash
git clone https://github.com/marcoserod/SPA.git
```
### 2. Instalar dependencias del server
```bash
npm install
```
### 3. Instalar dependencias de Python
```bash
pip install aiohttp
```

**Nota** Para emular el ataque ejecutar el paso 4, para emularlo, con mitigacion, ejecutar el paso 5.

### 4. Ejecutar server con docker desprotegido
```bash
docker-compose up --build
```

### 5. Ejecutar server con docker protegido por nginx
```bash
docker-compose -f docker-compose-nginx.yml up --build
```

### 6.Ejecutar el ataque Python 
```bash
python attack.py
```
## Demo

### Demo DOS sin mitigacion
https://github.com/user-attachments/assets/1e37f618-63c8-45ae-91d0-c4bca77db7fe
### Demo DOS con mitigacion por proxy inverso
https://github.com/user-attachments/assets/e9c3c33f-5fdd-471d-8f2d-94fdbfc4c1bc









