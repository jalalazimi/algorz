export default class List {

  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  /**
   * Clears all elements from list
   */
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

  /**
   * Inserts new element after existing element
   * @param element
   * @param after
   * @return {boolean}
   */
  insert(element, after) {
    const insertPos = this.find(after);

    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  /**
   * Adds new element to end of list
   * @param element
   */
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  /**
   * Removes element from list
   * @param element
   * @return {boolean}
   */
  remove(element) {
    const foundAt = this.find(element);

    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  /**
   * Sets current position to first element of list
   */
  front() {
    this.pos = 0;
  }

  /**
   * Sets current position to last element of list
   */
  end() {
    this.pos = this.listSize - 1;
  }

  /**
   * Moves current position back one element
   */
  prev() {
    if (this.pos < this.listSize - 1) {
      --this.pos;
    }
  }

  /**
   * Moves current position forward one element
   */
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  /**
   * Returns the current position in list
   * @return {number|*}
   */
  currPos() {
    return this.pos;
  }

  /**
   * Moves the current position to specified position
   * @param position
   */
  moveTo(position) {
    this.pos = position;
  }

  /**
   * Returns element at current position
   * @return {*}
   */
  getElement() {
    return this.dataStore[this.pos];
  }

  /**
   * Returns the number of elements in list
   * @return {number|*}
   */
  length() {
    return this.listSize;
  }

  /**
   * Determining if a Given Value Is in a List
   * @param element
   * @return {boolean}
   */
  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

}

