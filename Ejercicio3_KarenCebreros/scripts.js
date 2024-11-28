// Datos de las tarjetas
const projects = [
    {
      title: 'E-commerce Web Design',
      category: 'Desarrollo Web',
      date: '2 de abril de 2021',
      tags: ['DUX/UI', 'React'],
      img: 'https://ideausher.com/wp-content/uploads/2022/05/Ecommerce-app-features.webp',
      grade: 94
    },
    {
      title: 'Reconocimiento Facial',
      category: 'IA',
      date: '29 de septiembre de 2023',
      tags: ['Deep Learning', 'TensorFlow'],
      img: 'https://www.aden.org/wp-content/uploads/sites/9/2018/07/Reconocimiento-facial.png',
      grade: 98
    },
    {
      title: 'Reloj inteligente para ejercicio',
      category: 'Iot',
      date: '8 de junio de 2022',
      tags: ['Arduino', 'Cloud Computing'],
      img: 'https://ae01.alicdn.com/kf/S53df3a6378534a768c1a788113d460e9w.jpg_640x640q90.jpg',
      grade: 95
    },
    {
      title: 'Aplicación Móvil de Finanzas',
      category: 'Desarrollo Web',
      date: '15 de noviembre de 2023',
      tags: ['Flutter', 'Firebase'],
      img: 'https://figmaelements.com/wp-content/uploads/2020/10/finance-app.png',
      grade: 83
    },
    {
      title: 'Sistema de Monitoreo en Tiempo Real',
      category: 'Iot',
      date: '22 de diciembre de 2023',
      tags: ['Raspberry Pi', 'MQTT'],
      img: 'https://intermedialatam.com/wp-content/uploads/2020/03/MINING-PRODUCTION-LIVE-20200311-1.png',
      grade: 80
    },
    {
      title: 'Generador de Textos con IA',
      category: 'IA',
      date: '10 de octubre de 2023',
      tags: ['NLP', 'Python'],
      img: 'https://www.aimagicx.com/wp-content/uploads/2024/06/DALL·E-2024-06-30-13.05.02-A-realistic-scene-of-an-AI-powered-robot-sitting-at-a-desk-typing-on-a-keyboard-with-a-glowing-computer-screen-in-front-of-it.-The-background-shows-a-1-1340x638.webp',
      grade: 90
    }
  ];
  
  // Dividir los proyectos
  const featuredProjects = projects.slice(0, 3);
  const moreProjects = projects.slice(3);
  
  // Función para generar el HTML de una tarjeta
  function generateCard(project) {
    return `
      <div class="col">
        <div class="card h-100">
          <img src="${project.img}" class="card-img-top" alt="Imagen del proyecto ${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.category}</p>
            <p class="card-text"><small class="text-muted">${project.date}</small></p>
            <div class="tags">
              ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <a href="#" class="btn btn-primary">Ver Proyecto</a>
            <div>
              <i class="bi bi-heart-fill text-danger"></i> ${project.grade}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Renderizar las tarjetas de acuerdo a su sección
  const featuredProjectsContainer = document.getElementById('featured-projects');
  const moreProjectsContainer = document.getElementById('more-projects');
  
  featuredProjectsContainer.innerHTML = featuredProjects.map(generateCard).join('');
  moreProjectsContainer.innerHTML = moreProjects.map(generateCard).join('');
  