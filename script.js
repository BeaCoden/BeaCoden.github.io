// Importiere die Chart.js-Bibliothek, wenn du sie nicht bereits eingebunden hast

// Daten für das Diagramm
const skillsData = {
  labels: ['HTML', 'CSS', 'JavaScript', 'npm', 'Figma', 'Vue.js'],
  datasets: [{
      data: [80, 70, 90, 60, 50, 75], // Hier sind die Fähigkeitswerte
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0']
  }]
};

// Optionen für das Diagramm
const chartOptions = {
  cutoutPercentage: 70, // Steuert die Dicke des Donuts
  responsive: true,
  maintainAspectRatio: false
};

// Das Diagramm erstellen
const donutChartCanvas = document.getElementById('donut-chart').getContext('2d');
new Chart(donutChartCanvas, {
  type: 'doughnut',
  data: skillsData,
  options: chartOptions
});


// const skillsChart = document.getElementById('skillsChart').getContext('2d');

// const skillData = {
//   labels: ['HTML', 'CSS', 'JavaScript', 'Figma', 'LOREM', 'LOREM'],
//   datasets: [{
//     data: [30, 25, 20, 15, 5, 5], // Prozentuale Verteilung für jedes Segment
//     backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e'],
//     hoverBackgroundColor: ['#2980b9', '#c0392b', '#27ae60', '#f1c40f', '#8e44ad', '#2c3e50'],
//     hoverBorderColor: '#fff',
//     hoverBorderWidth: 2,
//   }],
// };

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// new Chart(skillsChart, {
//   type: 'pie',
//   data: skillData,
//   options: chartOptions,
// });
