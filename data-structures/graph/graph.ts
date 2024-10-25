class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: any, vertex2: any) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: any, vertex2: any) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item: any) => item !== vertex2
      );
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item: any) => item !== vertex1
      );
  }

  removeVertex(vertex: any) {
    // Method One to remove vertex
    const vert = this.adjacencyList[vertex];
    vert.map((item: any) => {
      this.adjacencyList[item] = this.adjacencyList[item].filter(
        (el: any) => el !== vertex
      );
    });
    delete this.adjacencyList[vertex];

    // Method Two to remove vertex
  }
}

const graph = new Graph();

graph.addVertex("Dhaka");
graph.addVertex("Raj");
graph.addVertex("Delhi");
graph.addVertex("Mumbai");
graph.addVertex("Chennai");

graph.addEdge("Dhaka", "Delhi");
graph.addEdge("Dhaka", "Mumbai");
graph.addEdge("Raj", "Dhaka");
graph.addEdge("Delhi", "Chennai");
graph.addEdge("Mumbai", "Delhi");
graph.addEdge("Delhi", "Raj");

console.log(graph);
graph.removeVertex("Delhi");
console.log(graph);
