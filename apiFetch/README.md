<h1 align="center"> Programación sincrónica y asincrónica </h1>

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif">

<h2 align="center"> ¿Qué es un Call Back? </h2>

Los callbacks en JavaScript son funciones que se pasan como parámetro y que se ejecutan luego de que se haya completado alguna operación, los usamos todo el tiempo. Por ejemplo, cada vez que usamos métodos de arrays como forEach() o map(), debemos pasarle como parámetro un callback. Esa función callback se ejecutará por cada elemento del array al que le aplicamos el método:

`const arr = ['A', 'B', 'C'];`

`arr.forEach((letter) => console.log(letter + 'Z'));`

`// --> 'AZ', 'BZ', 'CZ'`

<h2 align="center"> Programas sincrónicos/secuenciales</h2>

Hasta ahora, vimos que para pasar de una tarea a otra en nuestros programas, el intérprete debe terminar de realizar la tarea que está haciendo en un momento dado, para poder pasar a la siguiente, ya que su motor **está diseñado para realizar una tarea a la vez**:

    function suma(a: number, b: number) {
        console.log(2);
        const resultado = a + b;
        console.log(3);
        return resultado;
    }

    console.log(1);
    const resultado = suma(3, 9);
    console.log(4);

`// --> 1, 2, 3, 4`

<h2 align="center"> Programas asincrónicos/no-secuenciales</h2>

![Async programming](https://miro.medium.com/v2/resize:fit:4800/1*a3OgwgyZfqbYd9AZBZwU7g.gif)

<h3 align="center"> ¿Son lo más frecuente de ver las situaciones sincrónicas? </h3>

En la vida diaria, en la mayoría de las situaciones, nos enfrentamos a las asincronías. Cuando pedimos comida en un restaurant, cuando cocinamos, cuando realizamos distintas tareas, casi todo lo encaramos de forma asíncrona ¿O no?¿O a caso el mozo se queda esperando a que el cocinero termine el primer pedido que le encargaron para recién atender al próximo cliente? Claramente, no.

Ahora bien **¿Cómo se refleja esto en el ámbito de la programación?**

Una herramienta que nos permite trabajar con la asincronía es la función setTimeout(callback: Function, milisencods: number), la cual llamamos pasándole dos argumentos:

- callback: Una función cualquiera que se ejecuta luego de transcurrido el tiempo pasado como argumento.
- milisecons: Tiempo en milisegundos que tiene que transcurrir para que se ejecute el callback.

Así, derivamos la tarea de ejecutar el callback a un ayudante que tienen los entornos de ejecución de **JavaScript**, las APIs de los navegadores o **BROWSER APIs** en el caso de ejecutar JS en un navegador, y las **APIs de C++** en el caso de **NodeJS**, que están ocultas para los desarrolladores, pero que nos permiten ejecutar tareas en segundo plano.

    function suma(a: number, b: number) {
        console.log(2);
        const resultado = a + b;
        console.log(3);

        setTimeout(() => console.log(resultado), 3000);

        return '¿Terminé?';
    }

    console.log(1);

    const resultado = suma(3, 9);

    console.log(4);
    console.log(resultado);

Con este pequeño cambio al código anterior, podremos ver el resultado de la suma luego de transcurridos 3 segundos... **¿Qué está pasando realmente?** La función **setTimeout()** pone la ejecución del callback en espera, hasta que la pila de ejecución del motor de **JavaScript** quede liberada, y luego de transcurridos los 3000 ms, se completa la función.

<h3 align="center"> ¿Qué cosa es la pila de ejecución? </h3>

<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Kn5tSJEm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif">
</p>

La **pila de ejecución** de **JavaScript** o **Call stack** es como un **mapa** que usan los motores de **JavaScript** a la hora de ejecutar un programa. Les sirve para saber **por cuál función están pasando**, y por **cuáles pasaron hasta llegar al punto donde se encuentren**. A este mapa se lo conoce como pila de ejecución o **L.I.F.O.**, **L**ast **I**n **F**irst **O**ut, el último en entrar es el primero en salir.

Es una pila de registros que guarda toda la información relacionada al conexto de ejecución de las funciones llamadas. Cuando accidentalmente damos a luz un loop infinito, lo que estamos haciendo es **volar la pila de ejecución**, o dicho de otra forma, alcanzar el límite máximo de entradas permitido que establecen los motores de **JavaScript**.

Retomando el tema del título anterior, el que la función **setimeout()** ponga un callback en espera, significa que lo envía a la cola de tareas, la cuál tiene por objetivo enviarlo al callstack **luego de que este esté vacío**.

Un concepto interesante y muy útil a la hora de analizar un programa en detalle para encontrar errores, es el de Stack Trace: la pila de ejecución al momento de una excepción (o error).

La **Dev Tools** de Google Chrome y de otros navegadores, así como el **Runtime Debugger** de VSCode, nos permiten analizar línea por línea el callstack y el scope del programa que estamos ejecutando.

En el apartado **Sources** de la sección **Dev Tools**, existe un área que nos permite crear, ejecutar y probar archivos JavaScript para su análisis. Allí podremos ver el contenido del Callstack y del Scope de las funciones a cada momento.

Recordar que el Scope de una función es el contexto actual de ejecución, el cual está determinado por el conjunto de variables y funciones que se pueden acceder desde esa función cuando se está ejecutando.

<h2 align="center"> DESAFÍO </h2>

- ¿Te animás a usar la API de Fetch para solicitar datos de alguna API que te guste?

Te propongo que busques alguna API que te llame la atención, consumas sus datos y los muestres por la terminal.

<h2 align="center"> LINKS </h2>

- [Best way to write utilities in TypeScript](https://olegvaraksin.medium.com/what-is-the-best-way-to-write-utilities-in-typescript-e3cae916fe30)

- [¿Qué es el Call Stack?](https://www.youtube.com/watch?v=ygA5U7Wgsg8&list=PLfWyZ8S-XzecAttp3QU-gBBXvMqEZTQXB&index=5)

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [Fetch API en NodeJS](https://www.npmjs.com/package/node-fetch)
