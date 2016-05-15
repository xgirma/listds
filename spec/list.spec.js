var list;

describe('List constructor', function(){
  beforeAll(function(){
    list = new List();
  });

  it('Size should be 0', function(){
    expect(list.size).toEqual(0);
  });

  it('Position should be 0', function(){
    expect(list.position).toEqual(0);
  });

  it('Length should be 0', function(){
    expect(list.length()).toEqual(0);
  });

  it('Should have no element', function(){
    expect(list.dataStore.length).toEqual(0);
  });
});

describe('Appending data', function(){
  beforeAll(function(){
    list = new List();
    list.append('Seattle, WA');
  });

  it('Length should be 1', function(){
    expect(list.length()).toEqual(1);
  });
});

describe('Find element', function(){
  beforeAll(function(){
    list = new List();
    list.append('Seattle, WA');
    list.append('Durham, NC');
  });

  it('Find an element', function(){
    expect(list.find('Durham, NC')).toEqual(1);
  });

  it('Return error, if element do not exist', function(){
    expect(list.find('Bellevue, WA')).toEqual(-1);
  });
});