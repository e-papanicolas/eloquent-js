class Group {
  constructor() {
    this.members = [];
  }

  add(val) {
    if (!this.has(val)) this.members.push(val);
  }

  delete(val) {
    this.members = this.members.filter((v) => v !== val);
  }

  has(val) {
    return this.members.includes(val);
  }

  static from(iterableObj) {
    let newGroup = new Group();
    for (let item of iterableObj) {
      newGroup.add(item);
    }
    return newGroup;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if ((this.position = this.group.members.length)) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}
