describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      // var spy1 = sinon.spy(blinkyDancer, "step");
      // debugger;
      expect(blinkyDancer.blinkCount).to.be.equal(0);
      // expect(spy1.callCount).to.be.equal(0);
      //blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      // debugger;
      expect(blinkyDancer.blinkCount).to.be.equal(1);
      // expect(spy1.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.blinkCount).to.be.equal(2);

      // expect(blinkyDancer.blinkCount).to.be.equal(0);



    });
  });
});
