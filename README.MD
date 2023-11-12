# Segundo Parcial - Seminario de Actualización III
# Microservicios

## Requisitos
- Docker instalado
- Docker Compose instalado

## IMPORTANTE:
## Primero se han creado en distintas carpetas cada servicio a ofrecer, luego a partir de ello se crean las imagenes con sus respectivos archivos Dockerfile

## Paso 1: Crear la imagen de la base de datos MySQL
docker build -t mysql-image -f Dockerfile .


## Paso 2: Crear la imagen del servicio web REST
docker build -t rest-image -f Dockerfile .

## Paso 3: Crear la imagen del servicio web SOAP
docker build -t soap-image -f Dockerfile .

## Paso 4: Crear la imagen de la aplicación consumidora
docker build -t app-consumer-image -f Dockerfile .

## Paso 5: Iniciar los servicios con Docker Compose
docker-compose up -d

# Levantar servicios

## Paso 1: Iniciar  Docker Swarm
docker swarm init

## Paso 2: Desplegar los servicios a partir de las imagenes
docker stack deploy -c docker-compose.yml stack-villalba

# Comprobar funcionamiento

## ingresar a un buscador, colocar la siguiente url:
localhost:8081

