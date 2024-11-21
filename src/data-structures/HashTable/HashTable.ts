export type HTNodeOrNull = HTNode | null;

class HTNode {
  value: number = 0;
  key: string;
  next: HTNodeOrNull = null;
  constructor(key: string, value: number) {
    this.value = value;
    this.key = key;
  }
}

export class HashTable {
  size = 7;
  dataMap: HTNode[] = [];

  printHashTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      let temp: HTNodeOrNull = this.dataMap[i];
      while (temp != null) {
        console.log("i :  { " + temp.key + " : " + temp.value + " } ");
        temp = temp.next;
      }
    }
  }

  hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.size;
    }
    return hash;
  }

  set(key: string, value: number) {
    let index = this.hash(key);
    let node = new HTNode(key, value);
    if (this.dataMap[index] === null) {
      this.dataMap[index] = node;
    } else {
      let temp = this.dataMap[index];
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  get(key: string) {
    let index = this.hash(key);
    let temp: HTNodeOrNull = this.dataMap[index];
    while (temp !== null) {
      if (temp.key === key) return temp.value;
      temp = temp.next;
    }
    return 0;
  }

  keys() {
    let keysList = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      let temp: HTNodeOrNull = this.dataMap[i];
      while (temp !== null) {
        keysList.push(temp.key);
        temp = temp.next;
      }
    }
    return keysList;
  }
}
