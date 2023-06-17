
# Analizador de texto

## Índice

* [1. Descripción general](#1-descripcións-general)
* [2. Proyecto text analyzer](#2-proyecto-text-analyzer)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Organización del proyecto](#4-organización-del-proyecto)
* [5. Criterios de aceptación mínimos del proyecto](#5-planeación-de-trabajo)

***

## 1. Descripción general
Un analizador de texto es una herramienta que sirve para analizar un texto a partir de diferentes métricas que miden parámetros e identifican patrones, relaciones, sentimientos, entre otros datos. El análisis de textos conduce a la administración, la categorización y la búsqueda eficientes de documentos. 

Los analizadores de texto funcionan con técnicas como el procesamiento del lenguaje natural (NLP), el aprendizaje automático (ML) y el análisis estadístico. Asimismo, existen diversos tipos de técnicas comunes que emplean los analizadores de texto, como: clasificación de texto, extracción de texto, modelado de temas y redacción de información de identificación personal.

## 2. Proyecto text analyzer
Este proyecto consiste en un analizador de texto, donde la usuaria puede introducir un texto en un cuadro de texto y al hacerlo, de forma automática, se actualizan métricas que arrojan datos sobre el texto introducido. Al terminar con este texto la usuaria puede presionar un botón que limpiará la caja de texto y, por lo tanto, también las métricas y introducir un nuevo texto las veces que desee. Adicional a esto, la página incluye un encabezado con el nombre del proyecto y un footer con los datos de la desarrolladora.

## 3. Funcionalidades
El listado de funcionalidades es el siguiente:

La aplicación permite a la usuaria ingresar un texto escribiéndolo en un cuadro de texto.

La aplicación calcula las siguientes métricas y actualiza el resultado en tiempo real a medida que la usuaria escribe su texto:

-**Recuento de palabras**: la aplicación cuenta el número de palabras en el texto de entrada y muestra este recuento a la usuaria.

-**Recuento de caracteres**: la aplicación contabiliza y muestra el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación.

-**Recuento de caracteres excluyendo espacios y signos de puntuación**: la aplicación cuenta y muestra el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación.

-**Recuento de números**: la aplicación cuenta y muestra cúantos números hay en el texto de entrada.

-**Suma total de números**: la aplicación suma y muestra todos los números que hay en el texto de entrada.


-**Longitud media de las palabras**: la aplicación calcula y muestra la longitud media de las palabras en el texto de entrada.

La aplicación permite limpiar el contenido de la caja de texto haciendo clic en un botón.

## 4. Organización del proyecto
Dentro de una carpeta src se incluyen cuatro archivos: `index.html`, `styles.css`, `analyzer.js` y `index.js`, dentro de los cuales hay diferentes partes que permiten que el analizador de texto tenga estructura, funcionalidad y estilo.

-**`index.html`**: archivo que es el punto de partida de la aplicación, el cual contiene el HTML del proyecto. Aquí se encuentran el `<header>` con el título Analizador de texto; el `<body>` que incluye un `<textarea>` para que la usuaria introduzca su texto, un `<ul>` que tienen 6 hijos `<li>` que muestran las métricas y un `<button>` con el valor de reset-button; y un `<footer>` que tiene un hijo <p> que muestra el nombre de la desarrolladora de la aplicación. Con un `<script>` se enlaza este archivo con los archivos de Javascript y CSS. 

-**`styles.css`**: archivo con las reglas de estilo de la aplicación. Aquí se utilizan selectores de tipo, atributo, clase y ID para darle estilo a los elementos del archivo `index.html` con propiedades como las del modelo de la caja.

-**`analyzer.js`**: archivo de JavaScript con un objeto `analyzer`, el cual cuenta con seis métodos correspondientes a cada una de las métricas. Cada métrica incluye una función que retorna un conteo de las palabras, carácteres o números del parámetro `text` dentro de un `string`. 

-**analyzer.getWordCount(text)**: Este primer método utiliza `trim` para eliminar los espacios en blanco al inicio o al final, así como `split` para dividir la cadena en palabras. Al final retorna el conteo de las palabras con el método `length` y en caso de no haber palabras retorna 0. 

-**analyzer.getCharacterCount(text)**: Esta función retorna `text.length`, donde `length` se usa para obtener el número de caracteres totales. 

-**analyzer.getCharacterCountExcludingSpaces(text)**: Esta función retorna `text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length`, donde `replace` reemplaza las expresiones regulares por una cadena vacía y `trim` elimina cualquier espacio en blanco al inicio o al final. 

-**analyzer.getNumberCount(text)**: Esta función devuelve todas las ocurrencias de números a través del uso de `text.match(reg)`, donde reg representa las expresiones regulares /\b\d+(\.\d+)?\b/g. Al final retorna el `length` del conteo de ocurrencias.

-**analyzer.getNumberSum(text)**: Esta función parte del método usado en la función anterior para hallar las ocurrencias y retorna la suma de éstas con un bucle `for`.

-**analyzer.getAverageWordLength(text)**: Esta última función divide el texto en palabras con `split` y después usa un bucle `for` que suma la longitug de las palabras para luego dividirla entre la cantidad de palabras. Al final usa  `Math.round` para retornar el resultado total con dos decimales.

-**`index.js`**: este último archivo registra un `Event Listener` para escuchar el evento `keyup` del `<textarea>` para actualizar las métricas cuando se escriba en el cuadro de texto y otro para escuchar el evento `click` del `<button>` que limpia el contenido de la caja de texto. Dentro de estas funciones se utiliza el selector del DOM `querySelector` y el atributo de manipulación dinámica del DOM `innerHTML` para acceder a los elementos del archivo `index.html` .


## 5. Planeación y diseño del trabajo 
Para la realización de este proyecto se usó HTML, CSS y JavaScript. El tiempo estimado en el que se ejecutó fue de dos sprints, donde primero se revisó las características y requerimientos, luego se llevó a cabo un prototipo de la página, después se diseñó la parte de HTML y se le dió estilo con CSS de acuerdo al prototipo, posteriormente se dio funcionalidad a las métricas de palabras, carácteres, números y longitud, así como al botón que limpiaría el texto y las métricas. Por último, se corrieron una serie de test con los que se garantizó que la aplicación quedó libre de errores y que cumple con los requisitos y las funcionalidades establecidas. 

El protitpo se hizo en paint con una elección de colores fuertes, los cuales en el producto final tuvieron modificaciones en las tonalidades. 

![Prototipo](/untitled.jpg)
Protipo

![Producto final](/productofinal.png)
Producto final