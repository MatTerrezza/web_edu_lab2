export function findTopStudent(data) {
  if (!data.length) return 0;
  const maxScore = Math.max(...data.map(student => student.score))
  const top = data.find(student => student.score == maxScore)
  
  return top
 }
