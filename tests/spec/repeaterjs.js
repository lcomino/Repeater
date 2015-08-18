describe("Initializing Repeat", function(){  

  it('should Repeater is defined', function() {
    expect(window.Repeater).toBeDefined();
  });
  it('should not access bind()', function() {
    expect(window.Repeater.bind).not.toBeDefined();
  });
  it('should repeat dom item', function(){
    
  });
});