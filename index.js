// index.js

const connectedComponentCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count++;
        }
    }

    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbour of graph[current]) {
        explore(graph, neighbour, visited);
    }

    return true;
};

// Export the function for testing
module.exports = { connectedComponentCount };

// Optional: run normally
if (require.main === module) {
    const graph = {
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2]
    };

    console.log("Connected Components:", connectedComponentCount(graph));
}


