# Frontend QA Automation

Este repositorio contiene la aplicación frontend para el proyecto de QA Automation. La aplicación está construida con React y está configurada para funcionar con Docker. Este README proporciona instrucciones para configurar y ejecutar la aplicación en un entorno local.

## Estructura del Repositorio

- **Dockerfile**: Contiene las instrucciones para construir la imagen Docker de la aplicación frontend.
- **docker-compose.yml**: Configuración de Docker Compose para levantar los servicios de frontend.
- **src/**: Código fuente de la aplicación React.
- **public/**: Archivos públicos y estáticos.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) (>= 27.0.3)
- [Docker Compose](https://docs.docker.com/compose/install/) (>= 2.29.1)

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/gonzabgarcia/frontend-qa-automation.git
    cd frontend-qa-automation
    ```

2. **Construye y levanta los contenedores:**

    ```bash
    docker-compose -f docker-compose.yml up -d
    ```

3. **Accede a la aplicación:**

    La aplicación frontend estará disponible en `http://localhost:3000`.

4. **Para detener los contenedores:**

    ```bash
    docker-compose down
    ```

## Desarrollo

Si necesitas realizar cambios en el código, sigue estos pasos:

1. **Realiza cambios en el directorio `src/`.**
2. **Reconstruye la imagen Docker y reinicia los contenedores:**

    ```bash
    docker-compose -f docker-compose.yml up -d --build
    ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
