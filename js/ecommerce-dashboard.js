// ecommerce-dashboard.js  

// Sample KPI data for MapleGlow    
const labels = ["January", "February", "March", "April", "May"];
const visitorsData = [15000, 18000, 17000, 21000, 24000];
const salesData = [300, 400, 380, 500, 600];
const conversionData = [2.0, 2.2, 2.3, 2.4, 2.5];
const roasData = [2.5, 3.1, 3.0, 3.3, 3.4];

// Visitors Chart   
new Chart(document.getElementById("visitorsChart"), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: "Monthly Visitors",
      data: visitorsData,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    }],
  },
});

// Sales Chart  
new Chart(document.getElementById("salesChart"), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: "Monthly Sales",
      data: salesData,
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    }],
  },
});  

// Conversion Rate Chart   
new Chart(document.getElementById("conversionChart"), {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: "Conversion Rate (%)",
      data: conversionData,
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    }],
  },
});

// ROAS Chart (Return On Advertising Spend)  
new Chart(document.getElementById("roasChart"), {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: "Return on Ad Spend (ROAS)",
      data: roasData,
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    }],
  },
});
