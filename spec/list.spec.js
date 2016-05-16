var movie;

describe('List constructor', function(){
  beforeAll(function(){
    movie = new List();
  });

  it('Size should be 0', function(){
    expect(movie.size).toEqual(0);
  });

  it('Position should be 0', function(){
    expect(movie.position).toEqual(0);
  });

  it('Length should be 0', function(){
    expect(movie.length()).toEqual(0);
  });

  it('Should have no element', function(){
    expect(movie.dataStore.length).toEqual(0);
  });
});

describe('Appending data', function(){
  beforeAll(function(){
    movie = new List();
    movie.append('City of God');
  });

  it('Length should be 1', function(){
    expect(movie.length()).toEqual(1);
  });
});

describe('Find element', function(){
  beforeAll(function(){
    movie = new List();
    movie.append('Forrest Gump');
    movie.append('The Matrix');
  });

  it('Find an existing element', function(){
    expect(movie.find('The Matrix')).toEqual(1);
  });

  it('Return error, if element do not exist', function(){
    expect(movie.find('Star Wars')).toEqual(-1);
  });
});

describe('Clear list', function(){
  beforeAll(function(){
    movie = new List();
    movie.append('Fight Club');
    movie.append('12 Angry Men');
  });

  it('Have 2 elements', function(){
    expect(movie.size).toEqual(2);
  });

  describe('Clear', function(){
    beforeAll(function(){
      movie.clear();
    });

    it('No element', function(){
      expect(movie.dataStore.length).toBe(0);
      expect(movie.size).toBe(0);
      expect(movie.position).toBe(0);
    });
  });
});

describe('Contains element', function(){
  beforeAll(function(){
    movie = new List();
    movie.append('Inception');
    movie.append('Goodfellas');
  });

  it('Verify if element exist', function(){
    expect(movie.contains('Inception')).toBe(true);
  });

  it('Return error, if element do not exist', function(){
    expect(movie.contains('Schindler’s Lis')).toBe(false);
  });
});

describe('Insert element', function(){
  beforeEach(function(){
    movie = new List();
    movie.append('Pulp Fiction');
    movie.append('The Dark Knight');
  });

  it('Before insert', function(){
    expect(movie.size).toEqual(2);
  });

  it('After insert', function(){
    movie.insert('Pulp Fiction', 'The Godfather');
    expect(movie.size).toEqual(3);
  });

  it('Find inserted element', function(){
    movie.insert('Pulp Fiction', 'The Godfather');
    expect(movie.dataStore[1]).toEqual('The Godfather');
  });

  it('Find moved element', function(){
    movie.insert('Pulp Fiction', 'The Godfather');
    expect(movie.dataStore[2]).toEqual('The Dark Knight');
  });
});

describe('Traversal', function(){
  beforeEach(function(){
    movie = new List();
    movie.append('The Dark Knight');
    movie.append('Forrest Gump');
  });
  
  it('Front should move position to first element', function(){
    movie.front();
    expect(movie.position).toEqual(0);
  });

  it('End should move position to last element', function(){
    movie.end();
    expect(movie.position).toEqual(1);
  });

  it('Give previous position', function(){
    movie.end();
    movie.previous();
    expect(movie.position).toEqual(0);
  });

  it('Give next position', function(){
    movie.next();
    expect(movie.position).toEqual(1);
  });

  it('Return current position', function(){
    expect(movie.currentPosition()).toEqual(0);
    movie.end();
    expect(movie.currentPosition()).toEqual(1);
    movie.previous();
    expect(movie.currentPosition()).toEqual(0);
  });

  it('Move position', function(){
    movie.append('Fight Club');
    movie.append('Goodfellas');
    movie.moveTo(2);
    expect(movie.position).toEqual(2);
    movie.moveTo(0);
    expect(movie.position).toEqual(0);
    movie.moveTo(100);
    expect(movie.position).toEqual(0);
  });

  it('Get element', function(){
    movie.clear();
    expect(movie.getElement()).toEqual(undefined);
    movie.append('The Shawshank Redemption');
    movie.append('Inception');
    movie.append('Seven Samurai');
    movie.append('City of God');
    movie.end();
    expect(movie.getElement()).toEqual('City of God');
    movie.front();
    expect(movie.getElement()).toEqual('The Shawshank Redemption');
    movie.next();
    expect(movie.getElement()).toEqual('Inception');
    movie.previous();
    expect(movie.getElement()).toEqual('The Shawshank Redemption');
    movie.moveTo(2);
    expect(movie.getElement()).toEqual('Seven Samurai');
  });
});

describe('Iterating', function(){
  var cities = ['Seven Samurai', 'Forrest Gump', 'The Matrix',
    'City of God', 'Inception', 'Goodfellas'];
  beforeAll(function(){
    movie = new List();
    movie.append('Seven Samurai');
    movie.append('Forrest Gump');
    movie.append('The Matrix');
    movie.append('City of God');
    movie.append('Inception');
    movie.append('Goodfellas');
  });

  it('Should iterate', function(){
    for(movie.front(); movie.currentPosition() < movie.length(); movie.next()){
      expect(movie.getElement()).toEqual(cities[movie.currentPosition()]);
    }
  });
});