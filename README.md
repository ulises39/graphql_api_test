# prueba_tecnica_backend

El projecto está hecho con NodeJs

Lo primero que hay que ejecutar es 

### `npm install`

Esto instalará las dependencias de node

Lo siguiente es ejecutar 

### `cp .env.example .env`

Al hacerlo obtendremos el archivo .env que hay que configurar para
la conexión a base de datos. Este archivo ya se encuentra configurado para 
conectarse a la base de datos provista, sin embargo, si se desea hacer una conexión local
hay que configurar las siguientes variables de entorno: 

```
    NODE_ENV = local
    DB_HOST= host_bd
    DB_PORT= puerto_bd
    DB_DATABASE= nombre_bd
    DB_USERNAME= usuario_bd
    DB_PASSWORD= password_bd
    
```

Una variable que hay que configurar es el puerto en el que se estará corriendo el proyecto, eso es en:

```
    DB_PORT = local
    
```

Finalmente, para ejecutar el proyecto corremos:

### `npm run start`