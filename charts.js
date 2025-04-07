// FPY Chart
new Chart(document.getElementById('fpyChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'First Pass Yield (%)',
      data: [82, 85, 89, 92, 96, 97],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: true, max: 100 } }
  }
});

// Scrap Chart
new Chart(document.getElementById('scrapChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Scrap Cost (€)',
      data: [140000, 130000, 120000, 110000, 100000, 95000],
      backgroundColor: 'rgba(239, 68, 68, 0.6)',
      borderColor: 'rgba(239, 68, 68, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: false } }
  }
});

// PCBA Failure Rate Chart
new Chart(document.getElementById('failureRateChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'PCBA Failure Rate (%)',
      data: [9.56, 8.8, 8.2, 7.5, 6.9, 6.5],
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      borderColor: 'rgba(16, 185, 129, 1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: false } }
  }
});
