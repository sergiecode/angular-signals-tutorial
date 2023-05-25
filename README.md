# Angular 16 Signals
![Angular 16 SIGNALS TUTORIAL](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%281%29.png)

![¿Qué son las señales en Angular 16?](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%282%29.png)

![Set y computed en signals](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%283%29.png)

![Update en Signals](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%284%29.png)

![Mutate en signals](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%285%29.png)

![Effects en signals](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%286%29.png)

![Función de limpieza en los efectos de signals](https://raw.githubusercontent.com/sergiecode/angular-signals-tutorial/master/tutorial-images/Angular%20Signals%20%287%29.png)

Ha llegado a Angular la nueva característica Signals y en este tutorial te explico que es y cómo se puede utilizar para gestionar los cambios de estado en las aplicaciones. En Angular 16, las Signals son funciones que se pueden actualizar y dependen de otras Signals, creando un gráfico reactivo que se actualiza automáticamente. Al aprovechar los observables RxJS, las Signals permiten flujos de datos declarativos y potentes.

En comparación con el mecanismo tradicional de detección de cambios en Angular, las Signals permiten la detección de cambios solo en los componentes afectados, mejorando el rendimiento y reduciendo la complejidad. Las Signals también hacen que el código sea más fácil de entender y brindan un mayor control sobre los cambios de valores.

## Aquí ejemplos para aprender a usar Signals:

### Set y Computed

    const x = signal(5); // asigna el valor inicial de x como 5
    const y = signal(3);
    const z = computed(() => x() + y()); // las Signals se invocan con () paréntesis porque actúan como funciones que devuelven el valor de la Signal
    console.log(z()); // Salida: 8 (z es un valor calculado que no se puede reasignar; siempre estará escuchando el cálculo)
    
    x.set(10);
    console.log(z()); // Salida: 13 (z sigue escuchando los cambios, por lo que llamarlo después de cambiar x actualizará su valor)

### Update

    const contador = signal<number>(0); // especifica el tipo de dato dentro de los corchetes <> 
    
    contador.update(valor => valor + 1);
    
    console.log('El valor de contador es: ' + contador()); // Salida: "El valor de contador es: 1" (el nuevo valor se obtiene invocando la Signal con paréntesis)

### Mutate

    const usuarios = signal([{ nombre: 'Sergie Code', tecnologia: 'Angular' }]); // un array de objetos (con un solo objeto)
    usuarios.mutate(usuario => { // mutate se utiliza para modificar valor(es) específico(s) dentro de una Signal
      usuario[0].tecnologia = 'Angular con Signals'; // solo se modifica el valor de la clave 'tecnologia' en el índice 0 del array
    });
    console.log(usuarios()[0]); // Nota: los paréntesis se colocan antes que los corchetes porque la Signal devuelve el array

### Effects

    const currentUser = signal({ nombre: 'Sergie Code' });
    
    effect((onCleanup) => { // la función de limpieza se pasa como parámetro
      const usuario = currentUser(); // Usando effect para escuchar cualquier cambio en las Signals internas y realizar acciones inmediatas al cambio; en este caso, escucha currentUser() y ejecuta el effect nuevamente cuando cambia
    
      const temporizador = setTimeout(() => {
        console.log(`Hace un segundo, el usuario era ${usuario.nombre}`);
      }, 1000);
    
      onCleanup(() => {
        clearTimeout(temporizador); // Los Effects pueden iniciar operaciones de larga duración que deben cancelarse si el Effect se destruye o se vuelve a ejecutar antes de que finalice la primera operación
      });
    });

## Conclusión

La característica de Signals en Angular 16 proporciona una nueva forma de gestionar los cambios de estado en las aplicaciones, ofreciendo un mejor rendimiento y una menor complejidad en comparación con los mecanismos tradicionales de detección de cambios. Con Signals, los desarrolladores pueden crear gráficos reactivos utilizando funciones que se actualizan automáticamente, aprovechando el poder de los observables RxJS. Al utilizar Signals, los desarrolladores tienen un mayor control sobre los cambios de valores y pueden escribir un código más fácil de entender y mantener.

Para obtener más información, consulta la documentación oficial de Angular y la documentación de Signals.
