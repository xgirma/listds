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

  it('Find an existing element', function(){
    expect(list.find('Durham, NC')).toEqual(1);
  });

  it('Return error, if element do not exist', function(){
    expect(list.find('Bellevue, WA')).toEqual(-1);
  });
});

describe('Clear list', function(){
  beforeAll(function(){
    list = new List();
    list.append('Seattle, WA');
    list.append('Durham, NC');
  });

  it('Have 2 elements', function(){
    expect(list.size).toEqual(2);
  });

  describe('Clear', function(){
    beforeAll(function(){
      list.clear();
    });

    it('No element', function(){
      expect(list.dataStore.length).toBe(0);
      expect(list.size).toBe(0);
      expect(list.position).toBe(0);
    });
  });
});

describe('Contains element', function(){
  beforeAll(function(){
    list = new List();
    list.append('Seattle, WA');
    list.append('Durham, NC');
  });

  it('Verify if element exist', function(){
    expect(list.contains('Durham, NC')).toBe(true);
  });

  it('Return error, if element do not exist', function(){
    expect(list.contains('Bellevue, WA')).toBe(false);
  });
});

describe('Insert element', function(){
  beforeAll(function(){
    list = new List();
    list.append('Seattle, WA');
    list.append('Durham, NC');
  });

  it('Before insert', function(){
    expect(list.size).toEqual(2);
  });

  it('After insert', function(){
    list.insert('Seattle, WA', 'Bellevue, WA');
    expect(list.size).toEqual(3);
  });

  it('Find inserted element', function(){
    expect(list.dataStore[1]).toEqual('Bellevue, WA');
  });

  it('Find moved element', function(){
    expect(list.dataStore[2]).toEqual('Durham, NC');
  });
});