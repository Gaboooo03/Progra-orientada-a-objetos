# Progra orientada a objetos

Estamos viendo orientacion basada en objetos

estamos viendo las diferentes formas de texto -ceil -float -entre otros

# Los Arrays en Programación

Un array es una estructura de datos que permite almacenar una colección ordenada de elementos del mismo tipo. Imagina un array como una lista numerada donde cada elemento tiene una posición específica, llamada índice.
Aunque las fuentes proporcionadas no definen explícitamente qué es un array, el capítulo 10 del libro "Aprende JavaScript con p5.js" menciona el uso de arrays en programación. Este capítulo se centra en cómo utilizar arrays en el contexto de la biblioteca p5.js, pero no proporciona una definición general de un array.
Para entender mejor el concepto, podemos usar información externa a las fuentes:
● Los arrays son fundamentales en programación porque permiten manipular grandes cantidades de datos de manera eficiente.
● Puedes acceder a elementos individuales dentro del array usando su índice, modificarlos, agregar nuevos elementos o eliminar existentes.
● Muchos lenguajes de programación, incluyendo JavaScript, ofrecen funciones y métodos específicos para trabajar con arrays.
Te recomiendo consultar recursos adicionales como tutoriales o documentación de JavaScript para profundizar en el tema de los arrays.

## Declaración de Arrays en JavaScript

Las fuentes proporcionadas se centran en el uso de arrays en el contexto de p5.js y no abordan directamente cómo declararlos en JavaScript. Sin embargo, basándonos en nuestra conversación anterior y en información externa, podemos explicar cómo se declaran los arrays.

**En JavaScript, puedes declarar un array utilizando corchetes `[]`**:

- **Ejemplo 1:** Declarar un array vacío:

  ```javascript
  let miArray = [];
  ```

- **Ejemplo 2:** Declarar un array con elementos iniciales:
  ```javascript
  let colores = ["rojo", "verde", "azul"];
  ```

**Puntos importantes**:

- La palabra clave `let` se usa para declarar una variable que almacenará el array.
- Los elementos del array se separan por comas.
- Los elementos de un array pueden ser de diferentes tipos de datos (números, strings, booleanos, etc.), aunque generalmente se recomienda que sean del mismo tipo para facilitar su manejo.

**Información adicional (no presente en las fuentes):**

También puedes declarar un array usando el constructor `Array()`:

```javascript
let miArray = new Array();
```

Este método es menos común, pero puede ser útil en ciertos casos.

Recuerda que esta información adicional no proviene de las fuentes que proporcionaste, por lo que te sugiero que la verifiques de forma independiente en la documentación de JavaScript o en tutoriales confiables.

## Agregar Elementos al Final de un Array en JavaScript

Si bien las fuentes proporcionadas se centran en el uso de arrays con p5.js y no explican directamente cómo agregar elementos al final de un array en JavaScript, basándonos en nuestra conversación anterior y en información externa, podemos explicarlo.

**En JavaScript, puedes usar el método `push()` para agregar uno o más elementos al final de un array.**

- **Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];
colores.push("amarillo");
console.log(colores); // Output: ["rojo", "verde", "azul", "amarillo"]
```

**Explicación:**

1.  Declaramos un array llamado `colores` con tres elementos iniciales.
2.  Usamos el método `push("amarillo")` para agregar el elemento "amarillo" al final del array.
3.  Al imprimir el array `colores`, vemos que el elemento "amarillo" se ha agregado correctamente al final.

**Información adicional (no presente en las fuentes):**

El método `push()` modifica el array original, agregando los elementos al final.

**Te sugiero que verifiques esta información adicional de forma independiente en la documentación de JavaScript o en tutoriales confiables, ya que no proviene de las fuentes que proporcionaste.**

## Los Loops en Programación

Un **loop** (bucle en español) es una estructura de control en programación que permite **repetir un bloque de código** un número determinado de veces o hasta que se cumpla una condición específica.

Las fuentes proporcionan información sobre los loops en el **Capítulo 7: Loops** del libro "Aprende JavaScript con p5.js". Este capítulo introduce el concepto de loops y explica cómo usar un tipo particular de loop llamado **"for loop"**.

**Características de los loops:**

- **Eficiencia:** Permiten automatizar tareas repetitivas, evitando escribir el mismo código varias veces.
- **Control:** Puedes determinar cuántas veces se repetirá el bloque de código o establecer una condición para detener el loop.
- **Flexibilidad:** Puedes usar variables y expresiones dentro del loop para modificar su comportamiento en cada iteración.

**Ejemplo de un 'for loop' (no de las fuentes):**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración número: " + i);
}
```

**Explicación del ejemplo:**

1. **Inicialización:** La variable `i` se inicializa con el valor 0.
2. **Condición:** Se verifica si `i` es menor que 5. Si es verdadero, se ejecuta el código dentro del loop.
3. **Incremento:** Después de cada iteración, el valor de `i` se incrementa en 1.
4. **Repetición:** El loop continúa hasta que la condición (`i < 5`) sea falsa.

**Información adicional (no presente en las fuentes):**

Existen otros tipos de loops en programación, como el **"while loop"** y el **"do-while loop"**. Estos loops funcionan de manera similar al "for loop", pero con diferentes mecanismos de control. Te recomiendo consultar la documentación de JavaScript o tutoriales para aprender más sobre estos otros tipos de loops.

Recuerda que esta información adicional no proviene de las fuentes que proporcionaste, por lo que te sugiero que la verifiques de forma independiente.
