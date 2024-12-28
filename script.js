const content = [
    //PRIMER SEMESTRE
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Cálculo', link: 'Material/1/CalculoETS.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Análisis vectorial', link: 'AnalisisVectorialETS.pdf' },
    { title: 'Libro', description: 'Final Examen - Computer Science', type: 'Examen', semester: '1', subject: 'Análisis vectorial', link: 'Examen1.pdf' },
    { title: 'Guía para ETS', description: 'Examenes anteriores', type: 'Libro', semester: '1', subject: 'Matemáticas discretas', link: 'Libro2.pdf' },
    { title: 'Libro', description: 'Advanced Mathematics', type: 'Libro', semester: '1', subject: 'Matemáticas discretas', link: 'Libro2.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Physics', type: 'Examen', semester: '1', subject: 'Comunicación oral y escrita', link: 'Examen2.pdf' },
    { title: 'Libro', description: 'Algoritmos, estructura de datos y objetos', type: 'Libro', semester: '1', subject: 'Fundamentos de programación', link: 'Material/1/ProgramacionLibro1.pdf' },
    { title: 'Libro', description: 'Programación en C, C++, Java y UML', type: 'Libro', semester: '1', subject: 'Fundamentos de programación', link: 'Material/1/ProgramacionLibro2.pdf' },
    //SEGUNDO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '2', subject: 'Álgebra lineal', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '2', subject: 'Cálculo aplicado', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '2', subject: 'Mecánica y electrómagnetismo', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '2', subject: 'Ingeniería, ética y sociedad', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '2', subject: 'Fundamentos económicos', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '2', subject: 'Algoritsmo y estructura de datos', link: 'Examen4.pdf' },
    //TERCER SEMESTRE
    { title: 'Libro', description: 'Ecuaciones diferenciales aplicadas', type: 'Examen', semester: '3', subject: 'Ecuaciones diferenciales', link: 'Material/3/EcuacionesLibro2.pdf' },
    { title: 'Libro', description: 'Ecuaciones diferenciales con aplicaciones de modelado', type: 'Examen', semester: '3', subject: 'Ecuaciones diferenciales', link: 'Material/3/EcuacionesLibro1.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '3', subject: 'Circuitos eléctricos', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '3', subject: 'Fundamentos de diseño digital', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '3', subject: 'Bases de datos', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '3', subject: 'Finanzas empresariales', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '3', subject: 'Paradigmas de programación', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '3', subject: 'Análisis y diseño de algoritmos', link: 'Examen4.pdf' },
    //CUARTO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '4', subject: 'Probabilidad y estadística', link: 'Examen3.pdf' },
    { title: 'Libro', description: 'Advanced engineering mathematics', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro1.pdf' },
    { title: 'Libro', description: 'A first course in complex analysis with applications', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro2.pdf' },
    { title: 'Libro', description: 'Variable compleja y aplicaciones', type: 'Examen', semester: '4', subject: 'Matemáticas avanzadas para la ingeniería', link: 'Material/4/AvanzadasLibro3.pdf' },
    { title: 'Libro', description: 'Amplificadores operacionales y circuitos integrados linelaes', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro1.pdf' },
    { title: 'Libro', description: 'Dispositivos electrónicos', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro2.pdf' },
    { title: 'Libro', description: 'Electrónica analógica para ingenieros', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro3.pdf' },
    { title: 'Libro', description: 'Electrónica: Teoría de circuitos y dispositivos electrónicos', type: 'Examen', semester: '4', subject: 'Electrónica analógica', link: 'Material/4/AnalogicaLibro4.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '4', subject: 'Diseño de sistemas digitales', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '4', subject: 'Tecnologías para el desarrollo de aplicaciones web', link: 'Examen3.pdf' },
    { title: 'Libro', description: 'Sistemas operativos: diseño e implementación', type: 'Examen', semester: '4', subject: 'Sistemas operativos', link: 'Material/4/OperativosLibro1.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '4', subject: 'Teoría de la computación', link: 'Examen4.pdf' },
    //QUINTO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '5', subject: 'Procesamiento digital de señales', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '5', subject: 'Instrumentación y control', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '5', subject: 'Arquitectura de computadoras', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '5', subject: 'Análisis y diseño de sistemas', link: 'Examen4.pdf' },
    { title: 'Libro', description: 'El emprendedor de éxito', type: 'Examen', semester: '5', subject: 'Formulación y evaluación de proyectos informáticos', link: 'Material/5/FepiLibro1.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '5', subject: 'Compiladores', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '5', subject: 'Redes de computadoras', link: 'Examen4.pdf' },
    //SEXTO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '6', subject: 'Sistemas en chip', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '6', subject: 'Métodos cuantitativos para la toma de decisiones', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '6', subject: 'Ingeniería de software', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '6', subject: 'Inteligencia artificial', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '6', subject: 'Aplicaciones para comunicaciones en red', link: 'Examen3.pdf' },
    //SEPTIMO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '7', subject: 'Desarrollo de aplicaciones nativas moviles', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '7', subject: 'Sistemas distribuidos', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '7', subject: 'Administració de servicios de red', link: 'Examen3.pdf' },
    //OCTAVO SEMESTRE
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '8', subject: 'Desarrollo de habilidades sociales para la dirección', link: 'Examen3.pdf' },
    { title: 'Examen', description: 'Midterm Examen - Biology', type: 'Examen', semester: '8', subject: 'Gestión empresarial', link: 'Examen4.pdf' },
    { title: 'Examen', description: 'Final Examen - Chemistry', type: 'Examen', semester: '8', subject: 'Liderazgo personal', link: 'Examen3.pdf' }
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
