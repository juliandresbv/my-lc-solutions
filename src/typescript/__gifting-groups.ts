function dfsCountGroups(related: string[], index: number, visited: Set<number>) {
  visited.add(index);

  for (let i = 0; i < related.length; i++) {
    if (related[index][i] == '1' && !visited.has(i)) {
      dfsCountGroups(related, i, visited);
    }
  }
}

function countGroups(related: string[]): number {
  let groups = 0;

  const visited = new Set<number>();

  for (let i = 0; i < related.length; i ++) {
    if (!visited.has(i)) {
      groups++;
      dfsCountGroups(related, i, visited);
    }
  }

  return groups;
}

const related = [
  '1000001000',
  '0100010001',
  '0010100000',
  '0001000000',
  '0010100000',
  '0100010000',
  '1000001000',
  '0000000100',
  '0000000010', 
  '0100000001'
];

const related2 = [
  '1001',
  '0110',
  '0111',
  '1011'
]

console.log(countGroups(related));