function List() {
  this.size = 0;
  this.position = 0;
  this.length = length;
  this.dataStore = [];
  this.append = append;
  this.find = find;
}

function length() {
  return this.size;
}

function append(element) {
  this.dataStore[this.size++] = element;
}

function find(element){
  for(var i = 0; i < this.dataStore.length; ++i){
    console.log('inside ...');
    if(this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}