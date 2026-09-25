export function addLetterGrade(data) {
  data.forEach(data => {
    if (data.score >= 90) {
      data.letter = 'A'
    } else if (data.score >=75) {
      data.letter = 'B'
    } else if (data.score < 75) {
      data.letter = 'C'
    }
  })
  return data
  
}