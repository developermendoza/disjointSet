class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[1] = 0;
    }
  }
  find(element) {
    if (this.parent[element] !== element) {
      this.parent[element] = this.find(this.parent[element]);
    }
    return this.parent[element];
  }

  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);
    if (root1 !== root2) {
      if (this.rank[root1] < this.rank[root2]) {
        this.parent[root1] = root2;
      } else if (this.rank[root1] > this.rank[root2]) {
        this.parent[root2] = root2;
      } else {
        this.parent[root1] = root2;
        this.rank[root2]++;
      }
    }
  }
}

const setSize = 5;
const disjointSet = new DisjointSet(setSize);

disjointSet.union(0, 1);
disjointSet.union(2, 3);
disjointSet.union(1, 2);

console.log(
  "Are 0 and 3 in the same subset?",
  disjointSet.find(0) === disjointSet.find(3)
); // Outputs: true
console.log(
  "Are 1 and 4 in the same subset?",
  disjointSet.find(1) === disjointSet.find(4)
); // Outputs: false
