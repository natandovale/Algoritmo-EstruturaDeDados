function LinkedList(){
  var Node = function(element){
    this.element = element//Joao
    this.next = null//null
  }

  var length = 0//
  var head = null//
  //adiciona um element no final da lista
  this.append = function(element){//
    var node = new Node(element), current //

    if(head === null){
      head = node// 
    }else{
      current = head

      while(current.next){
        current = current.next
      }
      current.next = node
    }
    length++
  }

  //adiciona um elemento em uma posicao especifica
  this.insert = function(position, element){
    if(position >= 0 && position <= length){
      var node= new Node(element),
      current = head,
      previous,
      index = 0

      if(position === 0){
        node.next = current
        head = node
      }else{
        while(index++ < position){
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }   
      length++
    return true
    }else{
      return false
    } 
  }

  //remove o elemento de uma posicao especifica
  this.removeAt = function(position){//2
    if(position > -1 && position < length){
      var current = head,
      previous, 
      index = 0 

      if(position === 0){
        head = current.next
      }else{
        while(index++ < position){
          previous = current
          current = current.next
        }
        previous.next = current.next 
      }
      length--
    return current.element    
    }else{
      return null
    }
  }

  this.getHead = function(){
    return head
  }

  //remove o elemento element
  this.remove = function(element){
    var index = this.indexOf(element)
    return this.removeAt(indexOf)
  }

  //retorna a posicao do elemento
  this.indexOf = function(element){
    var current = head,
    index = 0

    while(current){
      if(element === current.element){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  //retorna se esta vazia ou não a instancia
  this.isEmpty = function(element){
    return length === 0
  }

  //Retorna o tamanho da instacia
  this.size = function(element){
    return length
  }

  //converte em string
  this.toString = function(element){
    var current = head,
    string = ''

    while(current){
      string += current.element + ' '
      current = current.next

    }
    return string
  }

  this.print = function(){
    console.log(this.toString())
  }
 
}

var ll = new LinkedList()
ll.append('João')
ll.append('José')
ll.append('Maria')
ll.removeAt(2)
ll.insert(1,'Natan')
ll.print()
console.log(ll.indexOf('Natan'))