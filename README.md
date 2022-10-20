
![01- Inicio_page-0001](https://user-images.githubusercontent.com/107259913/197054800-216ac3a2-3210-4315-a7cc-177e9ef42059.jpg)

Reduce es una aplicación orientada a la obtención de la ruta más ecológica en transporte urbano para ayudar a reducir las emisiones de CO2. Nuestro objetivo es fomentar la generación de hábitos sostenibles a través del impacto ecológico de nuestro trayecto visible en la app.

Con la demo desarrollada, tenemos la capacidad de introducir una ruta y obtener de la misma las emisiones de carbono de nuestro viaje dependiendo del trasporte que utilicemos, a saberse: tren, metro, moto, autobús o coche. 

Este proyecto ha sido llevado a cabo con la colaboración de cuatro ramas de trabajo distintas: Full Stack, Data Science, UX/UI Product Design y Ciberseguridad. A continuación, se muestra un resumen de los puntos tratados:

![07 - Version  ACTUAL_page-0001](https://user-images.githubusercontent.com/107259913/197065701-7565df4e-1fd4-48c7-9a9b-3ca26053a451.jpg)



# Full Stack

Encargados del desarrollo del proyecto: 
   * Frontend realizado con ReactJS funcional; lenguaje Javascript.
   
   * Uso de #axios → Librería que nos permite hacer peticiones HTTP a un servidor.
   
   * Debounce → Librería que permite fijar un intervalo de milisegundos para la realización de la petición de datos a la API a través del input.
   
   * Tomtom → librería y API Tomtom (Maps SDK for Web). Integración en la app de los servicios de Tomtom: mapa, routing, searching,...
   
   * Firebase → plataforma en la nube para el desarrollo de apps web y móvil. Ofrece:
   
          * Autenticación de usuarios(registro mediante mail/contraseña, así como acceso a la app utilizando perfiles de otras plataformas externas: 
          Facebook, Google, Twitter, …
          
          * Almacenamiento en la nube de la información del usuario (no relacional).
          
  * Manejo del DOM y asincronía, control de versiones con GitHub(uso de ramas).
  
  * Tailwind → framework de css de código abierto para el desarrollo de páginas web.



# UX/UI Product Design

Encargados de la visual del proyecto: 

  * Documentación de toda la investigación desde la fase de descubrimiento.
  * Benchmark.
  * Insights sobre la encuesta con preguntas abiertas realizada.
  * Estrategia y propuesta de valor.
  * Definición de problemática. 
  * Conceptualización ,arquitectura de la información.
  * Sketches.
  * Sistema de diseño ( colores / tipografía / componentes…)
  * Logo y Naming = Reduce
  
  ![R-logo-final](https://user-images.githubusercontent.com/107259913/197069081-fe72ae26-8285-4c1d-af84-da6cccd5c34c.png)



# Data Science

Encargados de la obtención de datos y tratado de la información:


    * APIs de contaminación y routing: Se realizó un estudio de diferentes APIs de interés, bien mantenidas, para hacer una agregación de datos y     devolver la contaminación en gramos/metros. Los endpoints implementados son desarrollados en Python / Flask.
    
    * Endpoints con la siguiente información:
      -emision_moto
      
      -emision_bus
      
      -emision_subway
      
      -emision_tren_electrico
      
    * Modelo ML: Agregación de APIs de rutas para encontrar la ruta más favorable:
      -Google Maps
      
    * OpenRouting basado en openStreeMap
    
      -Tom Tom



# Ciberseguridad

Encargados de la securización de la aplicación:

    * Hardening: endurecimiento del sistema con el fin de reducir y evitar las amenazas.
    
    * Sonarqube: herramienta utilizada, a través de la automatización de la misma, de un análisis continuo del código: repetición de código, presencia de       code smells y detección posibles existencias de vulnerabilidades.

    * OWASP TOP 10:  metodología de seguridad de código abierto y colaborativa. Definición de cuestiones relevantes tales como Los agentes maliciosos,        posibles vectores de ataques y análisis de los controles de seguridad que se han planteado en la etapa de diseño.

    * Sensibilidad de los datos: tratamiento, mantenimiento y almacenamiento de datos personales. Se ha seguido el cumplimiento del artículo 80 del             Reglamento de desarrollo de la Ley Orgánica de Protección de Datos de Carácter Personal (LOPD).
    
    

![logo-final](https://user-images.githubusercontent.com/107259913/197066382-20f7d4b7-f69a-4ef9-a527-8e247a348e4c.png)  2.0 

Se implementarán funcionalidades de valor a la app como la colaboración de diferentes instituciones de transporte o asociaciones, empresas implicadas en la reducción del impacto de CO2.
Para ello, se desarrollarán secciones de interés para el usuario que le den acceso a estas empresas. Asimismo, se implantará un sistema de puntos/bonificaciones que podrán ser cangeados en bonos de transporte (metro/bus/tren) para fomentar el uso de los mismos.


![07 - Version 2 0_page-0001](https://user-images.githubusercontent.com/107259913/197071245-a8c22307-baa9-47ec-8114-bba86edc04e7.jpg)



###  Full Stack

Al disponer una intraestructura preparada para la implementación de un Backend, está contemplado el desarrollo del mismo para la segunda fase del proyecto, haciendo uso de Express.js y Node.js. 


###  UX/UI Product Design

Se valorará la posibilidad de introducir alternativas de transporte no introducidas en esta primera versión. Se realizarán test de usabilidad.


### Data Science

Desarrollo de Api en Python que devuelva la ruta más favorable en kilómetros; comparando los resultados de los diferentes APIs de rutas agregadas.


### Ciberseguridad

    * WAF: para garantizar la seguridad del servidor web mediante el análisis de paquetes de petición HTTP / HTTPS y modelos de tráfico.
    * IDS/IPS: IDS es un sistema de detección de intrusos y IPS es un sistema de prevención de intrusos.
    * SIEM: sistema de monitorización es el control activo y pasivo del entorno de trabajo
    * BACKUP:  documento que contiene un primer planteamiento de la infraestructura de backups necesarios para respaldar el trabajo realizado en el         proyecto.
    * PENTESTING: prueba de pentest con una herramienta llamada OWASP ZAP. Se obtiene un informe completo donde obtendremos en más detalle los tipos de vulnerabilidad encontradas y cómo solventarlas. 
    
    


    ![R-logo-final](https://user-images.githubusercontent.com/107259913/197069081-fe72ae26-8285-4c1d-af84-da6cccd5c34c.png) <img width="32" alt="Eco_marker2x" src="https://user-images.githubusercontent.com/107259913/197071794-1be012a3-7f2c-469a-a658-4a575ce6dc1a.png">

