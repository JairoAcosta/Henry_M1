"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value=value;
    this.right=null;
    this.left=null;
};

BinarySearchTree.prototype.size=function(){
  if (this.value===null)return 0;
  if (this.left===null && this.right===null )return 1;
  if (this.left===null && this.right!=null ) return 1+this.right.size();
  if (this.right===null && this.left!=null) return 1+this.left.size();
  return 1 + this.right.size()+this.left.size();

};

BinarySearchTree.prototype.insert=function(value){
  //evaluando los mayores y colocandolos a la dreecha 
  if (value > this.value){
    if (this.right === null) this.right =  new BinarySearchTree(value);
    else this.right.insert(value);
  }

//evaluando los menores y conlocandolos a la izquierda

if (value < this.value){
  if (this.left === null) this.left = new BinarySearchTree(value);
  else this.left.insert(value);
}
};

BinarySearchTree.prototype.contains=function(value){
//si el valor ingresado es igual al valor del nodo retorna true
  if (value === this.value){
    return true;
  }
  //si el valor ingresado es distinto al valor del nodo evalua por la derecha 

  if (value > this.value){
    if (this.right === null ){
      return false;
    }else{
      return this.right.contains(value);
    }
  }

  //si el valor ingresado es menor al nodo  evalua por la izquierda 

  if (value < this.value){
    if (this.left === null){
      return false;
    }else{
      return this.left.contains(value);
    }
  }
};

//depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.depthFirstForEach=function(callback, order){

  if (order === 'post-order'){
    if (this.left !== null)this.left.depthFirstForEach(callback,order);

    if (this.right !== null)this.right.depthFirstForEach(callback,order);
    callback(this.value);
  }
    else if(order === 'pre-order'){
      callback(this.value);
      if (this.left !== null) this.left.depthFirstForEach(callback,order);
      if (this.right !== null) this.right.depthFirstForEach(callback,order);
    }
    else{
      if (this.left !== null) this.left.depthFirstForEach(callback, order);
      callback(this.value);
      if (this.right !== null) this.right.depthFirstForEach(callback, order);
    }
};

BinarySearchTree.prototype.breadthFirstForEach=function(callback, queue){

  if (!queue) queue=[];
  if (this.left !== null) queue.push(this.left);

  if (this.right !== null) queue.push(this.right);

  callback(this.value);

  if (queue.length > 0){
    queue.shift ().breadthFirstForEach(callback,queue);
  }
  
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
