class Graph {
  adjList: Map<string, string[]>;

  constructor() {
    this.adjList = new Map<string, string[]>();
  }

  addVertex(vertex: string) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(fromVertex: string, toVertex: string) {
    if (!this.adjList.has(fromVertex)) {
      this.addVertex(fromVertex);
    }
    if (!this.adjList.has(toVertex)) {
      this.addVertex(toVertex);
    }

    this.adjList.get(fromVertex)?.push(toVertex);
    this.adjList.get(toVertex)?.push(fromVertex);
  }

  getVertexes() {
    return Array.from(this.adjList.keys());
  }

  getAdjacencyList() {
    return this.adjList;
  }

  queueBfsTraverse(startVertex: string) {
    const queue: string[] = [];
    const visited = new Set<string>();

    queue.push(startVertex);
    visited.add(startVertex);

    while (queue.length > 0) {
      const currVertex = queue.shift() as string;
      
      console.log(currVertex);

      const neighbors = this.adjList.get(currVertex) as string[];

      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
    }
  }

  stackDfsTraverse(startVertex: string) {
    const stack: string[] = [];
    const visited = new Set<string>();

    stack.push(startVertex);

    while (stack.length > 0) {
      const currVertex = stack.pop() as string;

      visited.add(currVertex);

      console.log(currVertex);

      const neighbors = this.adjList.get(currVertex) as string[];

      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  dfsExistsPathBetweenVertexes(start: string, end: string) {
    const visited = new Set<string>();
    const stack: string[] = [];

    stack.push(start);

    while (stack.length > 0) {
      const currVertex = stack.pop();
        
      visited.add(currVertex!);

      if (currVertex == end) {
          return true;
      }

      const neighbors = this.adjList.get(currVertex!) || [];

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }

    return false;
  }

  bfsExistsPathBetweenVertexes(start: string, end: string) {
    const visited = new Set<string>();
    const queue: string[] = [];

    visited.add(start);
    queue.push(start);

    while (queue.length > 0) {
      const currVertex = queue.shift();
        
      if (currVertex == end) {
        return true;
      }
      
      const neighbors = this.adjList.get(currVertex!) || [];
      
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(currVertex!);
          queue.push(neighbor);
        }
      }
    }

    return false;
  }

  recursiveDfsTraverse(startVertex: string) {
    const visited = new Set<string>();
  
    this.dfsRecursion(startVertex, visited);
  }
  
  private dfsRecursion(vertex: string, visited: Set<string>) {
    visited.add(vertex);
  
    console.log(vertex);
    
    const neighbors = this.adjList.get(vertex) as string[];
  
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsRecursion(neighbor, visited);
        }
      }
    }
  }  
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("D", "E");

// console.log(g.getVertexes());
console.log(g.getAdjacencyList());

// g.recursiveDfsTraverse('a');
// g.stackDfsTraverse('a');

// g.queueBfsTraverse('2');

console.log(g.dfsExistsPathBetweenVertexes('B', 'C'))
console.log(g.bfsExistsPathBetweenVertexes('B', 'C'))

