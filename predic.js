// Function to predict plant growth after a specific number of weeks
function predictPlantGrowth(weeks) {
    let plantHeight = 10; // Initial plant height in centimeters
    let growthRate = 2; // Growth rate in centimeters per week
  
    for (let i = 1; i <= weeks; i++) {
      plantHeight += growthRate;
    }
  
    return plantHeight;
  }
  
  // Example usage
  const weeks = 5; // Number of weeks to predict growth
  const predictedHeight = predictPlantGrowth(weeks);
  
  console.log('The plant is predicted to grow to a height of ${predictedHeight} centimeters after ${weeks} weeks.');