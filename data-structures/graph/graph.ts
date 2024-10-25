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
}

const graph = new Graph();

graph.addVertex("Dhaka");
graph.addVertex("Raj");
graph.addVertex("Delhi");

graph.addEdge("Dhaka", "Delhi");
graph.addEdge("Dhaka", "Raj");
console.log(graph);
