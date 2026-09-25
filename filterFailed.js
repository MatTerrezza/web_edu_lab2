function filterFailed(data, passScore) {
  const failedStudents = [];

  for (const student of data) {
    if (student.score < passScore) {
      failedStudents.push(student.name);
    }
  }

  return failedStudents;
}

export default filterFailed;
