# Component Count Algorithm

A JavaScript implementation to count the number of connected components in an undirected graph using **Depth-First Search (DFS)**. Includes automated testing with **Jest** for correctness.

---

## 🚀 Features

- Count connected components in any undirected graph  
- Handles isolated nodes and multiple connected components  
- DFS-based traversal  
- Automated tests for sample graphs  

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yapisango/component-count-algorithm.git

const graph = {
    0: [1],
    1: [0, 2],
    2: [1]
};
console.log(connectedComponentCount(graph)); // 1


const graph = {
    0: [1],
    1: [0],
    2: [3],
    3: [2]
};
console.log(connectedComponentCount(graph)); // 2


const graph = {
    0: [],
    1: [],
    2: []
};
console.log(connectedComponentCount(graph)); // 3

