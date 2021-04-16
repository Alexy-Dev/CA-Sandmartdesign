'use strict';

try {                       //данная связка позволяет обрабатывать возможные ошибки без остановки дальнейшего кода
    console.log('Normal');
    console.log(a);         //ошибка, не объявлена переменная
    console.log('result');  //это уже не выполняется, поскольку весь блок try отключается
// } catch(e) {
//     console.log('error');   //если происходит ошибка, она фиксируется, а код продолжает работать дальше
} catch(error) {
    console.log(error.name);   //имеет три сущности
    console.log(error.message); 
    console.log(error.stack); 
} finally {                     //финализирует все процессы

}

console.log('Hello');