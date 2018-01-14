export default class List {

  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  /**
   * Returns the position where the element was found
   * @param element
   * @return {number}
   */
  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Returns an array object
   * @return {Array}
   */
  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    const insertPos = this.find(after);

    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  remove(element) {
    const foundAt = this.find(element);

    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos < this.listSize - 1) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  length() {
    return this.listSize;
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

}

