module.exports = function inherit(cls, prot) {
  for (let key in prot) {
    if (prot[key] instanceof Function) {
      cls.prototype[key] = prot[key];
    }
  };
};