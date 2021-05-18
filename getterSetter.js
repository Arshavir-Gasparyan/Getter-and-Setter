const arr = {
  _name: [],
  get name() {
    return arr._name;
  },
  set name(value) {
    arr._name = value.split(",").map((val) => [val.trim(), val.length]);
  },
};
arr.name = "vrezh,Varazdat";
console.log(arr.name);
