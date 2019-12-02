Object.assign(Array.prototype, {
  async asyncForeach(cb) {
    const result = [];
    for (let index = 0; index < this.length; index += 1) {
      result.push(cb(this[index], index, this));
    }
    await Promise.all(result);
  },
  async asyncMap(cb) {
    await Promise.all(
      this.map(async (obj, index) => {
        await cb(obj, index, this);
      }),
    );
  },
});
