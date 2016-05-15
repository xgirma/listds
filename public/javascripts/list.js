function List() {
  this.size = 0;
  this.position = 0;
  this.length = length;
  this.dataStore = [];
  this.append = append;
  this.find = find;
  this.clear = clear;
  this.contains = contains;
  this.insert = insert;
}

function length() {
  return this.size;
}

function append(element) {
  this.dataStore[this.size++] = element;
}

function find(element){
  for(var i = 0; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.size = this.position = 0;
}

function contains(element) {
  for(var i = 0; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return true;
    }
  }
  return false;
}

function insert(after, element){
  var insertPosition = this.find(after);
  if(insertPosition > -1){
    this.dataStore.splice((insertPosition + 1), 0, element);
    ++this.size;
    return true;
  }
  return false;
}