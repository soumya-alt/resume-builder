// Resume Builder Application
class ResumeBuilder {
    constructor() {
        this.form = document.getElementById('resumeForm');
        this.preview = document.getElementById('resumePreview');
        this.templateSelect = document.getElementById('templateSelect');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.currentTemplate = 1;
        this.resumeData = this.loadResumeData();

        this.initializeEventListeners();
        this.updatePreview();
    }

    initializeEventListeners() {
        // Form input changes
        this.form.addEventListener('input', () => this.handleFormInput());

        // Template selection
        this.templateSelect.addEventListener('change', (e) => {
            this.currentTemplate = parseInt(e.target.value);
            this.updatePreview();
        });

        // Download button
        this.downloadBtn.addEventListener('click', () => this.downloadPDF());

        // Add/Remove buttons for dynamic sections
        document.getElementById('addSkillBtn').addEventListener('click', () => this.addSkillItem('keySkillsContainer'));
        document.getElementById('addEducationBtn').addEventListener('click', () => this.addEducationItem());
        document.getElementById('addTechnicalSkillBtn').addEventListener('click', () => this.addSkillItem('technicalSkillsContainer'));
        document.getElementById('addHobbyBtn').addEventListener('click', () => this.addSkillItem('hobbiesContainer'));

        // Photo upload
        document.getElementById('photo').addEventListener('change', (e) => this.handlePhotoUpload(e));
    }

    handleFormInput() {
        this.saveResumeData();
        this.updatePreview();
    }

    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.resumeData.photo = e.target.result;
                this.saveResumeData();
                this.updatePreview();
            };
            reader.readAsDataURL(file);
        }
    }

    addSkillItem(containerId) {
        const container = document.getElementById(containerId);
        const newItem = document.createElement('div');
        newItem.className = 'skill-item';
        newItem.innerHTML = `
            <input type="text" class="skill-input" placeholder="Add a skill">
            <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>
        `;
        container.appendChild(newItem);

        // Add remove button functionality
        newItem.querySelector('.remove-btn').addEventListener('click', () => {
            newItem.remove();
            this.handleFormInput();
        });
    }

    addEducationItem() {
        const container = document.getElementById('educationContainer');
        const newItem = document.createElement('div');
        newItem.className = 'education-item';
        newItem.innerHTML = `
            <input type="text" placeholder="School/College/University" class="edu-school">
            <input type="text" placeholder="Degree" class="edu-degree">
            <input type="text" placeholder="Marks/Percentage" class="edu-marks">
            <input type="text" placeholder="Year of Passing" class="edu-year">
            <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>
        `;
        container.appendChild(newItem);

        // Add remove button functionality
        newItem.querySelector('.remove-btn').addEventListener('click', () => {
            newItem.remove();
            this.handleFormInput();
        });
    }

    getFormData() {
        const formData = {
            photo: this.resumeData.photo,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            objective: document.getElementById('objective').value,
            keySkills: Array.from(document.querySelectorAll('#keySkillsContainer .skill-input')).map(input => input.value).filter(Boolean),
            education: Array.from(document.querySelectorAll('#educationContainer .education-item')).map(item => ({
                school: item.querySelector('.edu-school').value,
                degree: item.querySelector('.edu-degree').value,
                marks: item.querySelector('.edu-marks').value,
                year: item.querySelector('.edu-year').value
            })).filter(edu => edu.school || edu.degree || edu.marks || edu.year),
            technicalSkills: Array.from(document.querySelectorAll('#technicalSkillsContainer .skill-input')).map(input => input.value).filter(Boolean),
            hobbies: Array.from(document.querySelectorAll('#hobbiesContainer .skill-input')).map(input => input.value).filter(Boolean),
            dob: document.getElementById('dob').value,
            nationality: document.getElementById('nationality').value,
            languages: document.getElementById('languages').value,
            declaration: document.getElementById('declaration').value,
            signature: document.getElementById('signature').value,
            date: document.getElementById('date').value
        };

        return formData;
    }

    updatePreview() {
        const formData = this.getFormData();
        const template = templates[this.currentTemplate];
        
        // Create a style element for the template
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            ${template.style}
            
            /* Ensure consistent margins and spacing */
            #resumePreview {
                padding: 15mm;
                box-sizing: border-box;
            }
            
            .section {
                margin-bottom: 15px;
                page-break-inside: avoid;
            }
            
            .header {
                margin-bottom: 20px;
                page-break-inside: avoid;
            }
            
            .resume-content {
                height: 100%;
            }
        `;
        
        // Remove any existing style elements
        const existingStyles = document.querySelectorAll('style[data-template-style]');
        existingStyles.forEach(style => style.remove());
        
        // Add the new style element
        styleElement.setAttribute('data-template-style', '');
        document.head.appendChild(styleElement);
        
        // Check if formData is empty
        const isEmpty = Object.values(formData).every(value => 
            !value || (Array.isArray(value) && value.length === 0)
        );

        if (isEmpty) {
            // Show a default template with placeholder content
            this.preview.innerHTML = `
                <div class="resume-content">
                    <div class="header">
                        <div class="profile-photo">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="info">
                            <h1>Your Name</h1>
                            <p>your.email@example.com</p>
                            <p>+1234567890</p>
                        </div>
                    </div>
                    <div class="section">
                        <h2>Career Objective</h2>
                        <p>Enter your career objective here...</p>
                    </div>
                    <div class="section">
                        <h2>Key Skills</h2>
                        <ul>
                            <li>Add your skills here</li>
                            <li>Add more skills</li>
                        </ul>
                    </div>
                    <div class="section">
                        <h2>Education</h2>
                        <div class="education-item">
                            <h3>Your School/College</h3>
                            <p>Degree - Year</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Update the preview content with actual data
            this.preview.innerHTML = `<div class="resume-content">${template.render(formData)}</div>`;
        }
    }

    saveResumeData() {
        const formData = this.getFormData();
        localStorage.setItem('resumeData', JSON.stringify(formData));
        this.resumeData = formData;
    }

    loadResumeData() {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.populateForm(data);
            return data;
        }
        return {};
    }

    populateForm(data) {
        // Basic info
        document.getElementById('name').value = data.name || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('phone').value = data.phone || '';
        document.getElementById('address').value = data.address || '';
        document.getElementById('objective').value = data.objective || '';
        document.getElementById('dob').value = data.dob || '';
        document.getElementById('nationality').value = data.nationality || '';
        document.getElementById('languages').value = data.languages || '';
        document.getElementById('declaration').value = data.declaration || '';
        document.getElementById('signature').value = data.signature || '';
        document.getElementById('date').value = data.date || '';

        // Key Skills
        const keySkillsContainer = document.getElementById('keySkillsContainer');
        keySkillsContainer.innerHTML = '';
        (data.keySkills || []).forEach(skill => {
            this.addSkillItem('keySkillsContainer');
            const lastInput = keySkillsContainer.lastElementChild.querySelector('.skill-input');
            lastInput.value = skill;
        });

        // Education
        const educationContainer = document.getElementById('educationContainer');
        educationContainer.innerHTML = '';
        (data.education || []).forEach(edu => {
            this.addEducationItem();
            const lastItem = educationContainer.lastElementChild;
            lastItem.querySelector('.edu-school').value = edu.school || '';
            lastItem.querySelector('.edu-degree').value = edu.degree || '';
            lastItem.querySelector('.edu-marks').value = edu.marks || '';
            lastItem.querySelector('.edu-year').value = edu.year || '';
        });

        // Technical Skills
        const technicalSkillsContainer = document.getElementById('technicalSkillsContainer');
        technicalSkillsContainer.innerHTML = '';
        (data.technicalSkills || []).forEach(skill => {
            this.addSkillItem('technicalSkillsContainer');
            const lastInput = technicalSkillsContainer.lastElementChild.querySelector('.skill-input');
            lastInput.value = skill;
        });

        // Hobbies
        const hobbiesContainer = document.getElementById('hobbiesContainer');
        hobbiesContainer.innerHTML = '';
        (data.hobbies || []).forEach(hobby => {
            this.addSkillItem('hobbiesContainer');
            const lastInput = hobbiesContainer.lastElementChild.querySelector('.skill-input');
            lastInput.value = hobby;
        });
    }

    async downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Get the resume preview element
        const element = this.preview;
        
        // Add padding to the preview element temporarily
        element.style.padding = '20px';
        element.style.backgroundColor = 'white';

        // Get all sections for boundary detection
        const sections = Array.from(element.querySelectorAll('.section, .header'));
        const sectionPositions = [];
        
        // Calculate section positions and their complete heights
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(section);
            const marginTop = parseFloat(computedStyle.marginTop);
            const marginBottom = parseFloat(computedStyle.marginBottom);
            
            sectionPositions.push({
                element: section,
                top: rect.top - marginTop,
                bottom: rect.bottom + marginBottom,
                height: rect.height + marginTop + marginBottom
            });
        });
        
        // Create a canvas from the element
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        });

        // Reset the padding
        element.style.padding = '';

        // A4 dimensions in mm
        const pageWidth = 210;
        const pageHeight = 297;

        // Define margins (in mm)
        const margin = {
            top: 15,
            right: 15,
            bottom: 15,
            left: 15
        };

        // Calculate content dimensions
        const contentWidth = pageWidth - (margin.left + margin.right);
        const contentHeight = pageHeight - (margin.top + margin.bottom);

        // Calculate scale to fit content width while maintaining aspect ratio
        const scale = contentWidth / canvas.width;
        const scaledHeight = canvas.height * scale;

        // Function to check if a section fits on the current page
        const doesSectionFitOnPage = (sectionTop, sectionHeight, currentPageStart, contentHeight) => {
            const scaledSectionHeight = sectionHeight * scale;
            const availableHeight = contentHeight - ((sectionTop - currentPageStart) * scale);
            return scaledSectionHeight <= availableHeight;
        };

        // Function to find the next break point
        const findNextBreakPoint = (currentY) => {
            const currentPageStart = Math.floor(currentY / contentHeight) * contentHeight;
            let nextBreakPoint = currentPageStart + contentHeight;
            let movedSections = false;

            for (const section of sectionPositions) {
                const sectionTop = section.top;
                const sectionHeight = section.height;
                
                // If section starts on current page
                if (sectionTop * scale >= currentY && sectionTop * scale < nextBreakPoint) {
                    // Check if section fits completely
                    if (!doesSectionFitOnPage(sectionTop, sectionHeight, currentPageStart, contentHeight)) {
                        // Move the entire section to next page
                        nextBreakPoint = sectionTop * scale;
                        movedSections = true;
                        break;
                    }
                }
            }

            // If no sections were moved, use the regular page break
            if (!movedSections) {
                nextBreakPoint = currentPageStart + contentHeight;
            }

            return nextBreakPoint;
        };

        // Calculate page breaks based on sections
        let currentY = 0;
        const pageBreaks = [];

        while (currentY < scaledHeight) {
            const nextBreak = findNextBreakPoint(currentY);
            pageBreaks.push({
                start: currentY,
                end: nextBreak
            });
            currentY = nextBreak;
        }

        // Add each page to the PDF
        for (let i = 0; i < pageBreaks.length; i++) {
            if (i > 0) {
                doc.addPage();
            }

            const { start, end } = pageBreaks[i];
            const sourceY = start / scale;
            const sourceHeight = (end - start) / scale;

            // Create a temporary canvas for the current page
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = sourceHeight;
            const tempCtx = tempCanvas.getContext('2d');

            // Set white background
            tempCtx.fillStyle = '#ffffff';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Draw the portion of the original canvas to the temporary canvas
            tempCtx.drawImage(
                canvas,
                0,
                sourceY,
                canvas.width,
                sourceHeight,
                0,
                0,
                canvas.width,
                sourceHeight
            );

            // Add the image portion to the PDF with margins
            const imgData = tempCanvas.toDataURL('image/jpeg', 1.0);
            doc.addImage(
                imgData,
                'JPEG',
                margin.left,
                margin.top,
                contentWidth,
                Math.min(contentHeight, (sourceHeight * scale))
            );
        }

        // Save the PDF
        doc.save('resume.pdf');
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
}); 