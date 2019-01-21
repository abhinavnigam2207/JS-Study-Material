function towerOfHanoi(source, helper, target) {
  function moveDisks(n, innerSource, innerHelper, innerTarget) {
    if (n <= 0) {
      return;
    }
    moveDisks(n - 1, innerSource, innerTarget, innerHelper);
    innerTarget.push(innerSource.pop());
    moveDisks(n - 1, innerHelper, innerSource, innerTarget);
  }
  moveDisks(source.length, source, helper, target);
};

let source= [4,3,2,1];
let target= [];
let helper= [];

towerOfHanoi(source,helper,target);