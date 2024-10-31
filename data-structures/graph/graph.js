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
    removeVertex(vertex) {
        // Method One to remove vertex
        const vert = this.adjacencyList[vertex];
        vert.map((item) => {
            this.adjacencyList[item] = this.adjacencyList[item].filter((el) => el !== vertex);
        });
        delete this.adjacencyList[vertex];
        // Method Two to remove vertex
    }
    DFSRecursive(start) {
        const result = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex)
                return;
            visitedVertices[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbour) => {
                if (!visitedVertices[neighbour])
                    return dfs(neighbour);
            });
        })(start);
        return result;
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.DFSRecursive("A"));
