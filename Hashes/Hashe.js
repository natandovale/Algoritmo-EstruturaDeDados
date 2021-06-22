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




function HashTable(){
  var table = []

   var ValuePair = function(key, value){
      this.key = key
      this.value = value
      this.toString = function(){
        return '['+ this.key + ' - ' + this.value + ']'  
      }
    }

    this.put = function(key, value){
      var position = loseloseHashCode(key)

      if(table[position] == undefined){
        table[position] = new LinkedList()
      }
      table[position].append(new ValuePair(key, value))
    }

  //this.put = function(key, value){
    //var position = loseloseHashCode(key)
    //console.log(position + ' ' + key)
    //table[position] = value
  //}

  this.remove = function(key){
    var position = loseloseHashCode(key)

    if(table[position] !== undefined){
      var current = table[position].getHead()

      while(current.next){
        if(current.element.key === key){
          table[position].remove(current.element)
            if(table[position].isEmpty()){
              table[position] = undefined
            }
            return true
        }
        current = current.next
      }
      if(current.element.key === key){
        table[position].remove(current.element)
        if(table[position].isEmpty()){
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }

  //this.remove = function(key){
  //  table[loseloseHashCode (key)] = undefined
  //}
  this.get = function(key){
    var position = loseloseHashCode(key)

    if(table[position] !== undefined){
      var current = table[position].getHead()
    
      while(current.next){
        if(current.element.key === key){
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key){
        return current.element.value
      }
    }
    return undefined
  }

  //this.get = function(key){
    //return table[loseloseHashCode(Key)]
  //}

  var loseloseHashCode = function(key){
    var hash = 0

    for(var i = 0; i < key.length; i++){
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  this.print = function(){
    for(var i = 0; i < table.length; i++){
      if(table[i] !== undefined){
        console.log(i + ' : ' + table[i])
      }
    }
  }
}

var hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John','john@email.com')
hash.put('Tyrion','tyrion@email.com')
hash.put('Aaron','Aaron@email.com')
hash.put('Donnie','donnie@email.com')
hash.put('Ana','ana@email.com')
hash.put('Jamie','jamie@email.com')
hash.put('Mindy','mindy@email.com')
console.log('.')
hash.print()