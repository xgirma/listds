var city;

describe('List constructor', function(){
  beforeAll(function(){
    city = new List();
  });

  it('Size should be 0', function(){
    expect(city.size).toEqual(0);
  });

  it('Position should be 0', function(){
    expect(city.position).toEqual(0);
  });

  it('Length should be 0', function(){
    expect(city.length()).toEqual(0);
  });

  it('Should have no element', function(){
    expect(city.dataStore.length).toEqual(0);
  });
});

describe('Appending data', function(){
  beforeAll(function(){
    city = new List();
    city.append('Seattle, WA');
  });

  it('Length should be 1', function(){
    expect(city.length()).toEqual(1);
  });
});

describe('Find element', function(){
  beforeAll(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
  });

  it('Find an existing element', function(){
    expect(city.find('Durham, NC')).toEqual(1);
  });

  it('Return error, if element do not exist', function(){
    expect(city.find('Bellevue, WA')).toEqual(-1);
  });
});

describe('Clear list', function(){
  beforeAll(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
  });

  it('Have 2 elements', function(){
    expect(city.size).toEqual(2);
  });

  describe('Clear', function(){
    beforeAll(function(){
      city.clear();
    });

    it('No element', function(){
      expect(city.dataStore.length).toBe(0);
      expect(city.size).toBe(0);
      expect(city.position).toBe(0);
    });
  });
});

describe('Contains element', function(){
  beforeAll(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
  });

  it('Verify if element exist', function(){
    expect(city.contains('Durham, NC')).toBe(true);
  });

  it('Return error, if element do not exist', function(){
    expect(city.contains('Bellevue, WA')).toBe(false);
  });
});

describe('Insert element', function(){
  beforeEach(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
  });

  it('Before insert', function(){
    expect(city.size).toEqual(2);
  });

  it('After insert', function(){
    city.insert('Seattle, WA', 'Bellevue, WA');
    expect(city.size).toEqual(3);
  });

  it('Find inserted element', function(){
    city.insert('Seattle, WA', 'Bellevue, WA');
    expect(city.dataStore[1]).toEqual('Bellevue, WA');
  });

  it('Find moved element', function(){
    city.insert('Seattle, WA', 'Bellevue, WA');
    expect(city.dataStore[2]).toEqual('Durham, NC');
  });
});

describe('Traversal', function(){
  beforeEach(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
  });
  
  it('Front should move position to first element', function(){
    city.front();
    expect(city.position).toEqual(0);
  });

  it('End should move position to last element', function(){
    city.end();
    expect(city.position).toEqual(1);
  });

  it('Give previous position', function(){
    city.end();
    city.previous();
    expect(city.position).toEqual(0);
  });

  it('Give next position', function(){
    city.next();
    expect(city.position).toEqual(1);
  });

  it('Return current position', function(){
    expect(city.currentPosition()).toEqual(0);
    city.end();
    expect(city.currentPosition()).toEqual(1);
    city.previous();
    expect(city.currentPosition()).toEqual(0);
  });

  it('Move position', function(){
    city.append('Chapel Hill, NC');
    city.append('Cary, NC');
    city.moveTo(2);
    expect(city.position).toEqual(2);
    city.moveTo(0);
    expect(city.position).toEqual(0);
    city.moveTo(100);
    expect(city.position).toEqual(0);
  });

  it('Get element', function(){
    city.clear();
    expect(city.getElement()).toEqual(undefined);
    city.append('Seattle, WA');
    city.append('Durham, NC');
    city.append('Chapel Hill, NC');
    city.append('Cary, NC');
    city.end();
    expect(city.getElement()).toEqual('Cary, NC');
    city.front();
    expect(city.getElement()).toEqual('Seattle, WA');
    city.next();
    expect(city.getElement()).toEqual('Durham, NC');
    city.previous();
    expect(city.getElement()).toEqual('Seattle, WA');
    city.moveTo(2);
    expect(city.getElement()).toEqual('Chapel Hill, NC');
  });
});

describe('Iterating', function(){
  var cities = ['Seattle, WA', 'Durham, NC', 'Chapel Hill, NC',
    'Cary, NC', 'Bellevue, WA', 'Redmond, WA'];
  beforeAll(function(){
    city = new List();
    city.append('Seattle, WA');
    city.append('Durham, NC');
    city.append('Chapel Hill, NC');
    city.append('Cary, NC');
    city.append('Bellevue, WA');
    city.append('Redmond, WA');
  });

  it('Should iterate', function(){
    for(city.front(); city.currentPosition() < city.length(); city.next()){
      expect(city.getElement()).toEqual(cities[city.currentPosition()]);
    }
  });
});