describe('List constructor', function(){
  var list;
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
});