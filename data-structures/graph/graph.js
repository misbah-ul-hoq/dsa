"use strict";
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2);
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1);
    }
}
const graph = new Graph();
graph.addVertex("Dhaka");
graph.addVertex("Raj");
graph.addVertex("Delhi");
graph.addEdge("Dhaka", "Delhi");
graph.addEdge("Dhaka", "Raj");
graph.removeEdge("Dhaka", "Raj");
console.log(graph);
