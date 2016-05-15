describe('list constructor', function(){
  var list;
  beforeAll(function(){
    list = new List();
  });

  it('position should be 0', function(){
    expect(list.size).toEqual(0);
  });

  it('position should be 0', function(){
    expect(list.position).toEqual(0);
  });

  it('length should be 0', function(){
    expect(list.length()).toEqual(100);
  });
});