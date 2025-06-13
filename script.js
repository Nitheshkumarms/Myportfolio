document.addEventListener('DOMContentLoaded', () => {
    // Quantum Loader
    const quantumLoader = document.querySelector('.quantum-loader');
    
    // Simulate loading
    setTimeout(() => {
        gsap.to(quantumLoader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                quantumLoader.style.display = 'none';
                initPortfolio();
            }
        });
    }, 3000);
    
    function initPortfolio() {
// Animate course cards
gsap.utils.toArray('.course-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// Animate skill categories
gsap.utils.toArray('.skills-category-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.2)"
    });
});

// Animate individual skill items
gsap.utils.toArray('.skill-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: i * 0.05,
        ease: "elastic.out(1, 0.5)"
    });
});
        // Initialize Particles.js
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6c5ce7"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6c5ce7",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        
        
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Section animations
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });
        
        // Timeline animations
        gsap.utils.toArray('.timeline-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: item.classList.contains('odd') ? 100 : -100,
                duration: 1
            });
        });
        
        // Project card animations
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.1
            });
        });
        
        // Skill bar animations
        gsap.utils.toArray('.skill-progress').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                width: width,
                duration: 1.5,
                ease: 'power3.out'
            });
        });
        
        // Floating nav animation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.floating-nav');
            if (window.scrollY > 100) {
                nav.style.top = '1rem';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.top = '2rem';
                nav.style.backdropFilter = 'blur(10px)';
            }
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    initSkillsCharts();
});

// Update in your script.js file
function initSkillsCharts() {
    // Skill data
    const skillData = {
        labels: ['Frontend', 'Backend', 'Machine Learning', 'Data Science', 'DevOps', 'Mobile'],
        current: [95, 85, 90, 88, 75, 70],
        goals: [100, 95, 95, 95, 85, 85]
    };
    

    // Radar Chart
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: skillData.labels,
            datasets: [{
                label: 'Current Skills',
                data: skillData.current,
                backgroundColor: 'rgba(108, 92, 231, 0.2)',
                borderColor: 'rgba(108, 92, 231, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(108, 92, 231, 1)',
                pointRadius: 5
            }, {
                label: 'Learning Goals',
                data: skillData.goals,
                backgroundColor: 'rgba(0, 206, 201, 0.2)',
                borderColor: 'rgba(0, 206, 201, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                pointBackgroundColor: 'rgba(0, 206, 201, 1)',
                pointRadius: 5
            }]
        },
        options: getChartOptions('Skill Comparison (Radar)')
    });

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: skillData.labels,
            datasets: [{
                label: 'Current Skills',
                data: skillData.current,
                backgroundColor: 'rgba(108, 92, 231, 0.7)',
                borderColor: 'rgba(108, 92, 231, 1)',
                borderWidth: 1
            }, {
                label: 'Learning Goals',
                data: skillData.goals,
                backgroundColor: 'rgba(0, 206, 201, 0.7)',
                borderColor: 'rgba(0, 206, 201, 1)',
                borderWidth: 1
            }]
        },
        options: getChartOptions('Skill Comparison (Bar)')
    });

    // Doughnut Chart (averages)
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    const doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Frontend', 'Backend', 'ML/AI', 'Data', 'DevOps', 'Mobile'],
            datasets: [{
                data: skillData.current,
                backgroundColor: [
                    'rgba(108, 92, 231, 0.7)',
                    'rgba(156, 136, 255, 0.7)',
                    'rgba(203, 191, 255, 0.7)',
                    'rgba(0, 206, 201, 0.7)',
                    'rgba(72, 219, 216, 0.7)',
                    'rgba(144, 232, 230, 0.7)'
                ],
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2
            }]
        },
        options: getChartOptions('Skills Distribution', true)
    });

    // Chart toggle functionality
    document.querySelectorAll('.chart-toggle').forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            document.querySelectorAll('.chart-toggle').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Update active chart
            const chartType = button.dataset.chart;
            document.querySelectorAll('.chart-container').forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(`${chartType}-chart-container`).classList.add('active');
        });
    });
}

function getChartOptions(title, isDoughnut = false) {
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: title,
                color: 'white',
                font: {
                    size: 16
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}%`;
                    }
                }
            }
        }
    };

    if (isDoughnut) {
        return {
            ...commonOptions,
            cutout: '70%',
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
    }

    return {
        ...commonOptions,
        scales: {
            ...(isDoughnut ? {} : {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'white',
                        beginAtZero: true,
                        max: 100
                    }
                }
            }),
            ...(!isDoughnut ? {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            } : {})
        }
    };
}

// Add to your script.js
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                    gsap.from(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Call this in your initPortfolio function
initProjectsFilter();

// Add to your script.js
function initCertificationLightbox() {
    // This would be for a proper lightbox implementation
    // You can use a library like lightbox.js or fancybox
    // Here's a simple implementation:
    
    const certificateImages = document.querySelectorAll('.certificate-img');
    
    certificateImages.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.src;
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100vw';
            lightbox.style.height = '100vh';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '1000';
            lightbox.style.cursor = 'zoom-out';
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = src;
            lightboxImg.style.maxWidth = '90vw';
            lightboxImg.style.maxHeight = '90vh';
            lightboxImg.style.objectFit = 'contain';
            
            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
        });
    });
}

// Call this in your initPortfolio function
initCertificationLightbox();

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navToggle.checked = false;
                document.querySelector('.nav-links').style.maxHeight = null;
            }
        });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-nav') && navToggle.checked) {
            navToggle.checked = false;
            document.querySelector('.nav-links').style.maxHeight = null;
        }
    });
    
    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navToggle.checked = false;
            document.querySelector('.nav-links').style.maxHeight = null;
        }
    });
});