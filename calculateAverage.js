function calculateAverage(data) {
    if (!data || data.length === 0) return 0;
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}

module.exports = calculateAverage;
