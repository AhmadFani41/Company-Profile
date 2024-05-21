// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Data penduduk berdasarkan jenis kelamin (laki-laki, perempuan, total)
const populationData = {
    labels: ['Laki-laki', 'Perempuan', 'Total'],
    datasets: [{
        label: 'Jumlah Penduduk',
        data: [7000, 5500, 12500], // Misalnya, jumlah penduduk dalam contoh ini
        backgroundColor: [
        'rgba(255, 99, 132, 0.6)', // Warna latar belakang batang untuk laki-laki
        'rgba(54, 162, 235, 0.6)', // Warna latar belakang batang untuk perempuan
        'rgba(75, 192, 192, 0.6)' // Warna latar belakang batang untuk total penduduk
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)', // Warna border batang untuk laki-laki
        'rgba(54, 162, 235, 1)', // Warna border batang untuk perempuan
        'rgba(75, 192, 192, 1)' // Warna border batang untuk total penduduk
        ],
      borderWidth: 1
    }]
};
  
// Mendapatkan elemen canvas
const ctx = document.getElementById('populationChart').getContext('2d');
  
// Membuat diagram batang
const populationChart = new Chart(ctx, {
    type: 'bar',
    data: populationData,
    options: {
        responsive: true, // Membuat diagram batang menjadi responsif
        scales: {
            y: {
            beginAtZero: true // Mulai sumbu y dari 0
            }
        }
    }
  });
  