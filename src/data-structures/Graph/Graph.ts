export class Graph {
  adjList: { [x: string]: string[] } = {};

  print() {
    console.log(this.adjList);
  }

  addVertex(vertex: string) {
    if (this.adjList[vertex] === null) {
      this.adjList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1: string, vertex2: string) {
    if (this.adjList[vertex1] !== null && this.adjList[vertex2] !== null) {
      if (!this.adjList[vertex1].includes(vertex2)) {
        this.adjList[vertex1].push(vertex2);
      }
      if (!this.adjList[vertex2].includes(vertex1)) {
        this.adjList[vertex2].push(vertex1);
      }
      return true;
    }
    return false;
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjList[vertex1] !== null && this.adjList[vertex2] !== null) {
      if (this.adjList[vertex1].includes(vertex2)) {
        this.adjList[vertex1] = this.adjList[vertex1].filter(
          (i) => i !== vertex2
        );
      }
      if (this.adjList[vertex2].includes(vertex1)) {
        this.adjList[vertex2] = this.adjList[vertex2].filter(
          (i) => i !== vertex1
        );
      }
      return true;
    }
    return false;
  }

  removeVertex(vertex: string) {
    if (this.adjList[vertex] !== null) {
      this.adjList[vertex].map((otherVertex: string) => {
        this.adjList[otherVertex].filter((ver: string) => ver !== vertex);
      });
      delete this.adjList[vertex];
      return true;
    }
    return false;
  }
}
