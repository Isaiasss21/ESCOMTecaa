const content = [
    //PRIMER SEMESTRE
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Cálculo', link: 'Material/1/CalculoETS.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Análisis vectorial', link: 'Material/1/VectorialETS.pdf' },
    { title: 'Libro', description: 'Análisis vectorial', type: 'Examen', semester: '1', subject: 'Análisis vectorial', link: 'Material/1/Analisis vectorial.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Matemáticas discretas', link: 'Material/1/DiscretasETS.pdf' },
    { title: 'Guía de ejercicios', description: 'Ejercicios resueltos', type: 'Libro', semester: '1', subject: 'Matemáticas discretas', link: 'Material/1/lista-15-grafos-siete-ejrcicios-resueltos.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '1', subject: 'Comunicación oral y escrita', link: 'Material/1/ensayo-20-parcial-jesus-vargas.pdf' },
    { title: 'Libro', description: 'Algoritmos, estructura de datos y objetos', type: 'Libro', semester: '1', subject: 'Fundamentos de programación', link: 'Material/1/ProgramacionLibro1.pdf' },
    { title: 'Libro', description: 'Programación en C, C++, Java y UML', type: 'Libro', semester: '1', subject: 'Fundamentos de programación', link: 'Material/1/ProgramacionLibro2.pdf' },
    //SEGUNDO SEMESTRE
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '2', subject: 'Álgebra lineal', link: 'Material/2/LinealETS.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '2', subject: 'Cálculo aplicado', link: 'Material/2/CalculoAplicadoETS.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '2', subject: 'Mecánica y electrómagnetismo', link: 'Material/2/MecanicaETS.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '2', subject: 'Ingeniería, ética y sociedad', link: 'Material/2/cuadro-comparativo-de-las-cuatro-revoluciones-industriales.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '2', subject: 'Fundamentos económicos', link: 'Material/2/campos-economia-apuntes-donde-se-explican-los-actores-la-micro-y-macro-ecomia.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '2', subject: 'Algoritsmo y estructura de datos', link: 'Material/2/listado-uno-de-problemas-algoritmos-y-estructura-de-datos.pdf' },
    //TERCER SEMESTRE  
    { title: 'Libro', description: 'Ecuaciones diferenciales aplicadas', type: 'Examen', semester: '3', subject: 'Ecuaciones diferenciales', link: 'Material/3/EcuacionesLibro2.pdf' },
    { title: 'Libro', description: 'Ecuaciones diferenciales con aplicaciones de modelado', type: 'Examen', semester: '3', subject: 'Ecuaciones diferenciales', link: 'Material/3/EcuacionesLibro1.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '3', subject: 'Ecuaciones diferenciales', link: 'Material/3/DiferencialesETS.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Circuitos eléctricos', link: 'Material/3/ejercicios-circuitos-inductores-resistivos-paralelo.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Fundamentos de diseño digital', link: 'Material/3/practica-2-ulises-juarez.pdf' },
    //{ title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Bases de datos', link: 'Material/3/practica-2-ulises-juarez.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Fundamentos de diseño digital', link: 'Material/3/practica-2-ulises-juarez.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Finanzas empresariales', link: 'Material/3/Finanzas empresariales.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Paradigmas de programación', link: 'Material/3/guia2paradig-paradigmas-de-programacion.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '3', subject: 'Análisis y diseño de algoritmos', link: 'Material/3/66problemas-resueltos-de-analisis-ydiseno-algoritmos-rarruabarrena-jbermudez-2004-0202.pdf' },
    //CUARTO SEMESTRE  
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '4', subject: 'Probabilidad y estadística', link: 'Material/4/ProbabilidadETS.pdf' },
    { title: 'Libro', description: 'Advanced engineering mathematics', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro1.pdf' },
    { title: 'Libro', description: 'A first course in complex analysis with applications', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro2.pdf' },
    { title: 'Libro', description: 'Variable compleja y aplicaciones', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro3.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasETS.pdf' },
    { title: 'Libro', description: 'Amplificadores operacionales y circuitos integrados linelaes', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro1.pdf' },
    { title: 'Libro', description: 'Dispositivos electrónicos', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro2.pdf' },
    { title: 'Libro', description: 'Electrónica analógica para ingenieros', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro3.pdf' },
    { title: 'Libro', description: 'Electrónica: Teoría de circuitos y dispositivos electrónicos', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro4.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '4', subject: 'Diseño de sistemas digitales', link: 'Material/4/tipo-de-memorias-dsd-tarea-final.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '4', subject: 'Tecnologías para el desarrollo de aplicaciones web', link: 'Material/4/tdaw-tarea-31-4cm1-ejercicio-desarrollado-en-clase.pdf' },
    { title: 'Libro', description: 'Sistemas operativos: diseño e implementación', type: 'Examen', semester: '4', subject: 'Sistemas operativos', link: 'Material/4/OperativosLibro1.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '4', subject: 'Teoría de la computación', link: 'Material/4/ejercicios-de-practica.pdf' },
    //QUINTO SEMESTRE Material/5/.pdf
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Procesamiento digital de señales', link: 'Material/5/apuntes-todos-los-temas.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Instrumentación y control', link: 'Material/5/381079688-practica-6-controlador-de-dos-pasos.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Arquitectura de computadoras', link: 'Material/5/sistema-windows-y-linux.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Análisis y diseño de sistemas', link: 'Material/5/analisis-y-diseno-de-sitemas-semana-3.pdf' },
    { title: 'Libro', description: 'El emprendedor de éxito', type: 'Examen', semester: '5', subject: 'Formulación y evaluación de proyectos informáticos', link: 'Material/5/FepiLibro1.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Compiladores', link: 'Material/5/primerosiguiente-apuntes-first-y-follow.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '5', subject: 'Redes de computadoras', link: 'Material/5/redes-de-computadoras-s2.pdf' },
    //SEXTO SEMESTRE
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '6', subject: 'Sistemas en chip', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '6', subject: 'Métodos cuantitativos para la toma de decisiones', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '6', subject: 'Ingeniería de software', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '6', subject: 'Inteligencia artificial', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '6', subject: 'Aplicaciones para comunicaciones en red', link: 'Examen3.pdf' },

    { title: 'Libro', description: 'Diseño avanzado de sistemas digitales con SoC FPGAs', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Advanced Digital System Design using SoC FPGAs. An Integrated Hardware-Software Approach - Ross K. Snider.pdf' },
    { title: 'Libro', description: 'Desarrollo de software sostenible', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Building Green Software. A Sustainable Approach to Software Development and Operations - Anne Currie, Sarah Hsu, Sara Bergman.pdf' },
    { title: 'Libro', description: 'Buenas prácticas para C++20', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Clean C++20. Sustainable Software Development Patterns and Best Practices - Stephan Roth.pdf' },
    { title: 'Libro', description: 'Mejorando la calidad del código', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Clean Code Cookbook. Recipes to Improve the Design and Quality of your Code - Maximiliano Contieri.pdf' },
    { title: 'Libro', description: 'Guía completa de automatización de pruebas', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Complete Guide to Test Automation. Techniques, Practices, and Patterns for Building and Maintaining Effective Software Projects - Arnon Axelrod.pdf' },
    { title: 'Libro', description: 'Mejorando habilidades de programación con Python', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Good Habits for Great Coding. Improving Programming Skills with Examples in Python - Michael Stueben.pdf' },
    { title: 'Libro', description: 'Ingeniería de software con Python', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Hands-On Software Engineering with Python - Brian Allbee.pdf' },
    { title: 'Libro', description: 'Guía visual y práctica para aprender Git', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Learning Git. A Hands-On and Visual Guide to the Basics of Git - Anna Skoulikari.pdf' },
    { title: 'Libro', description: 'Diseño práctico con microcontroladores PIC', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Microcontroladores PIC. Diseño Práctico de Aplicaciones Tomo 1 - José María Angulo Usategui, Ignacio Angulo Martínez, Aritza Etxebarria Ruiz.pdf' },
    { title: 'Libro', description: 'Mejorando la calidad del software moderno', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Modern Software Engineering. Doing What Works to Build Better Software Faster - David Farley.pdf' },
    { title: 'Libro', description: 'Guía completa sobre puertos serie', type: 'Libro', semester: '6', subject: '', link: 'Material/6/Serial Port Complete. COM Ports, USB Virtual COM Ports, and Ports for Embedded Systems - Jan Axelson.pdf' },
    { title: 'Libro', description: 'Diseño físico de SoC', type: 'Libro', semester: '6', subject: '', link: 'Material/6/SoC Physical Design. A Comprehensive Guide - Veena S. Chakravarthi, Shivananda R. Koteshwar.pdf' },
    { title: 'Libro', description: 'Proyectos embebidos paso a paso', type: 'Libro', semester: '6', subject: '', link: 'Material/6/The Embedded Project Cookbook. A Step-by-Step Guide for Microcontroller Projects - John T. Taylor, Wayne T. Taylor.pdf' },
    { title: 'Libro', description: 'Guía para Scrum Master (PSM I)', type: 'Libro', semester: '6', subject: '', link: 'Material/6/The Professional Scrum Master (PSM I) Guide - Fred Heath.pdf' },
    { title: 'Libro', description: 'Consejos para la carrera de un desarrollador de software', type: 'Libro', semester: '6', subject: '', link: 'Material/6/The Software Developer\'s Career Handbook - Michael Lopp.pdf' },



    //SEPTIMO SEMESTRE
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '7', subject: 'Desarrollo de aplicaciones nativas moviles', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '7', subject: 'Sistemas distribuidos', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '7', subject: 'Administració de servicios de red', link: 'Examen3.pdf' },


    { title: 'Libro', description: 'Programación concurrente en Android', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Android Concurrency - G. Blake Meike.pdf' },
    { title: 'Libro', description: 'Arquitectura en la nube y decisiones de diseño', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Architecting the Cloud. Design Decisions for Cloud Computing Service Models - Michael J. Kavis.pdf' },
    { title: 'Libro', description: 'Sistemas distribuidos y principios básicos', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Distributed Systems - Maarten van Steen, Andrew S. Tanenbaum.pdf' },
    { title: 'Libro', description: 'Android avanzado y técnicas avanzadas', type: 'Libro', semester: '7', subject: '', link: 'Material/7/El Gran Libro de Android Avanzado - Jesús Tomás, Gonzalo Puga, David Santamaría, Jorge Barroso.pdf' },
    { title: 'Libro', description: 'Aprende Java para desarrollo Android', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Learn Java for Android Development - Peter Späth, Jeff Friesen.pdf' },
    { title: 'Libro', description: 'Domina Firebase para desarrollo Android', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Mastering Firebase for Android Development.  Build Real-Time, Scalable, and Cloud-Enabled Android Apps with Firebase - Ashok Kumar S.pdf' },
    { title: 'Libro', description: 'Patrones para sistemas distribuidos', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Patterns of Distributed Systems - Unmesh Joshi.pdf' },
    { title: 'Libro', description: 'Aplicaciones móviles con Processing', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Processing for Android. Create Mobile, Sensor-Aware, and XR Applications Using Processing - Andrés Colubri.pdf' },
    { title: 'Libro', description: 'Programación Android con Kotlin', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Programming Android with Kotlin - Pierre-Olivier Laurence, Amanda Hinchman-Dominguez, G. Blake Meike, Mike Dunn.pdf' },
    { title: 'Libro', description: 'Fundamentos de sistemas distribuidos', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Sistemas Distribuidos - Francisco de Asís López Fuentes.pdf' },
    { title: 'Libro', description: 'Conceptos y diseño de sistemas distribuidos', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Sistemas Distribuidos. Conceptos y Diseño - George Coulouris, Jean Dollimore, Tim Kindberg.pdf' },
    { title: 'Libro', description: 'Arquitectura de software con Kotlin', type: 'Libro', semester: '7', subject: '', link: 'Material/7/Software Architecture with Kotlin. Combine various Architectural Styles to Create Sustainable and Scalable Software Solutions - Jason (Tsz Shun) Chow.pdf' },
    { title: 'Libro', description: 'Guía definitiva de Firebase para Android', type: 'Libro', semester: '7', subject: '', link: 'Material/7/The Definitive Guide to Firebase. Build Android Apps on Google\'s Mobile Platform - Laurence Moroney.pdf' },
    { title: 'Libro', description: 'Explorando Kotlin a fondo', type: 'Libro', semester: '7', subject: '', link: 'Material/7/The Joy of Kotlin - Pierre-Yves Saumont.pdf' },


    //OCTAVO SEMESTRE
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '8', subject: 'Desarrollo de habilidades sociales para la dirección', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '8', subject: 'Gestión empresarial', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Examen anterior', type: 'Examen', semester: '8', subject: 'Liderazgo personal', link: 'Examen3.pdf' },



    { title: 'Libro', description: 'Prácticas clave para mujeres en liderazgo', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Arrive and Thrive. Seven Impactful Practices for Women Navigating Leadership - Susan Mackenty Brady, Janet Foutty, Lynn Perry Wooten.pdf' },
    { title: 'Libro', description: 'Trabajo en equipos virtuales y confianza', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Building Virtual Teams. Trust, Culture, and Remote Working - Catalina Dumitru.pdf' },
    { title: 'Libro', description: 'Casos de éxito y consejos en liderazgo', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Casos de Éxito en Liderazgo. Guia de Acciones, Motivaciones y Tips Gerenciales - BusinessWeek.pdf' },
    { title: 'Libro', description: 'Comunicación oral y escrita efectiva', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Comunicación Oral y Escrita - María del Socorro Fonseca Yerena, Alicia Correa Pérez, María Ignacia Pineda Ramírez, Francisco Lemus Hernández.pdf' },
    { title: 'Libro', description: 'Desarrollo de habilidades directivas', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Desarrollo de Habilidades Directivas - David A. Whetten, Kim S. Cameron.pdf' },
    { title: 'Libro', description: 'Plan de carrera para desarrolladores', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Developer Career Masterplan - Heather VanCura, Bruno Souza.pdf' },
    { title: 'Libro', description: 'Mejorando habilidades directivas', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Habilidades Directivas - Berta E. Madrigal Torres.pdf' },
    { title: 'Libro', description: 'Liderazgo en altos niveles', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Liderazgo Al Más Alto Nivel - Ken Blanchard.pdf' },
    { title: 'Libro', description: 'Liderazgo inspirador y motivación', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Liderazgo Inspiracional - Carlos Miguel Barber Kuri, Carlos Clúa de la Torre.pdf' },
    { title: 'Libro', description: 'El poder de la inteligencia emocional', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Liderazgo. El Poder de la Inteligencia Emocional - Daniel Goleman.pdf' },
    { title: 'Libro', description: 'Liderazgo de alto impacto', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Líderes de Alto Impacto - Dr. Roberto Rabouin.pdf' },
    { title: 'Libro', description: 'Habilidades clave para gerentes', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Manager’s Handbook. The 17 Skills Leaders Need to Stand Out - Harvard Business Review.pdf' },
    { title: 'Libro', description: 'Comunicación efectiva en el trabajo', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Simply Said. Communicating Better at Work and Beyond - Jay Sullivan.pdf' },
    { title: 'Libro', description: 'Habilidades para desarrolladores', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Soft Skills to Advance Your Developer Career. Actionable Steps to Help Maximize Your Potential - Zsolt Nagy.pdf' },
    { title: 'Libro', description: 'Lecciones de liderazgo de Steve Jobs', type: 'Libro', semester: '8', subject: '', link: 'Material/8/Steve Jobs. Lecciones de Liderazgo - Walter Isaacson.pdf' },
    { title: 'Libro', description: 'El arte del liderazgo', type: 'Libro', semester: '8', subject: '', link: 'Material/8/The Art of Leadership. Small Things, Done Well - Michael Lopp.pdf' },
    { title: 'Libro', description: 'Liderazgo técnico y gestión', type: 'Libro', semester: '8', subject: '', link: 'Material/8/The Engineering Executive\'s Primer. Impactful Technical Leadership - Will Larson.pdf' },
    { title: 'Libro', description: 'Estrategias para escalar equipos', type: 'Libro', semester: '8', subject: '', link: 'Material/8/The Engineering Leader. Strategies for Scaling Teams and Yourself - Cate Huston.pdf' },
    { title: 'Libro', description: 'Crecimiento y cambios en liderazgo', type: 'Libro', semester: '8', subject: '', link: 'Material/8/The Manager’s Path. A Guide for Tech Leaders Navigating Growth and Change - Camille Fournier.pdf' },
    { title: 'Libro', description: 'Productividad en trabajo remoto', type: 'Libro', semester: '8', subject: '', link: 'Material/8/The Power of Virtual Distance. A Guide to Productivity and Happiness in the Age of Remote Work - Karen Sobel Lojeski, Richard R. Reilly.pdf' }

];

document.addEventListener('DOMContentLoaded', () => {
    loadContent(content);
});

function loadContent(items) {
    const contentGrid = document.getElementById('content-grid').querySelector('.row');
    contentGrid.innerHTML = ''; // Limpiar contenido existente

    items.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'col-lg-3', 'mb-4'); // 4 columnas en pantallas medianas, 3 en grandes

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-item');
        
        const title = document.createElement('h5');
        title.innerText = item.title;
        
        const subject = document.createElement('p');
        subject.innerText = item.subject;
        subject.style.fontWeight = 'bold'; // Estilo para diferenciar
        
        const description = document.createElement('p');
        description.innerText = item.description;
        
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');
        
        const previewBtn = document.createElement('button');
        previewBtn.classList.add('preview-btn');
        previewBtn.innerText = 'Preview';
        previewBtn.onclick = () => previewFile(item.link);
        
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('download-btn');
        downloadBtn.innerText = 'Download';
        downloadBtn.onclick = () => downloadFile(item.link);
        
        buttonGroup.appendChild(previewBtn);
        buttonGroup.appendChild(downloadBtn);
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(subject); // Añade la materia aquí
        contentDiv.appendChild(description);
        contentDiv.appendChild(buttonGroup);

        colDiv.appendChild(contentDiv);
        contentGrid.appendChild(colDiv);
    });
}

function filterContent() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const semesterFilter = document.getElementById('semester-filter').value;
    
    const filteredContent = content.filter(item => 
        (item.title.toLowerCase().includes(searchQuery) || 
        item.description.toLowerCase().includes(searchQuery)) &&
        (semesterFilter === '' || item.semester === semesterFilter)
    );

    loadContent(filteredContent);
}

function previewFile(link) {
    window.open(link, '_blank');
}

function downloadFile(link) {
    const a = document.createElement('a');
    a.href = link;
    a.download = link;
    a.click();
}
