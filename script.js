let a = [0, 0];
window.onmousemove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    if (a[0] + 100 <= mouseX || a[1] + 100 < mouseY ||a[0] - 100 >= mouseX || a[1] - 100 > mouseY ) {
        let dot = document.createElement('i');
        let dot1 = document.createElement('i');
        a[0]=mouseX;
        a[1]=mouseY;
        dot.style.position = 'absolute';
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.color = getRandomColor();
        dot.style.zIndex = '99999'

        dot1.style.position = 'absolute';
        dot1.style.width = '5px';
        dot1.style.height = '5px';
        dot1.style.color = getRandomColor();
        dot1.style.zIndex = '99998'

        dot1.style.left = mouseX + 7 + 'px';
        dot1.style.top = mouseY + 'px';
        dot1.classList.add('fa-solid', 'fa-star', 'fa-bounce', "fall");

        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
        dot.classList.add('fa-solid', 'fa-star', "fa-xs", "fall");


        document.body.appendChild(dot);
        setTimeout(() => {
            dot.remove();
        }, 2000);
        document.body.appendChild(dot1);
        setTimeout(() => {
            dot1.remove();
        }, 2000);
    }
};




let ctx = document.getElementById('myPieChart').getContext('2d');
// localStorage.setItem('data', [12, 19, 3, 5, 2, 3])
console.log(typeof localStorage.getItem('data'));
let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
        datasets: [{
            data: JSON.parse(localStorage.getItem('data')),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});


let ctx1 = document.getElementById('myLineChart').getContext('2d');

let myLineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
        datasets: [{
            label: 'My Dataset',
            data: JSON.parse(localStorage.getItem('data')),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let ctx2 = document.getElementById('myBarChart').getContext('2d');

let myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
        datasets: [{
            label: 'My Dataset',
            data: JSON.parse(localStorage.getItem('data')),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let ctx3 = document.getElementById('myRadarChart').getContext('2d');

let radarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
        datasets: [{
            label: 'My Dataset',
            data: JSON.parse(localStorage.getItem('data')),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});

function s() {
    let a = document.querySelector("#datas").value;
    localStorage.setItem('data', [a]);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}