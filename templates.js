const templates = {
    // Template 1: Modern Professional
    1: {
        name: 'Modern Professional',
        style: `
            .resume-modern {
                font-family: 'Roboto', sans-serif;
                color: #2c3e50;
                line-height: 1.6;
            }
            .modern-header {
                display: flex;
                align-items: center;
                gap: 30px;
                margin-bottom: 30px;
                border-bottom: 2px solid #3498db;
                padding-bottom: 20px;
            }
            .modern-photo {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                border: 3px solid #3498db;
                overflow: hidden;
            }
            .modern-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .modern-title {
                flex: 1;
            }
            .modern-name {
                font-size: 2.5em;
                color: #2c3e50;
                margin-bottom: 5px;
            }
            .modern-contact {
                color: #7f8c8d;
                font-size: 0.9em;
            }
            .modern-section {
                margin-bottom: 25px;
            }
            .modern-section-title {
                color: #3498db;
                font-size: 1.3em;
                margin-bottom: 15px;
                border-bottom: 1px solid #e0e0e0;
                padding-bottom: 5px;
            }
        `,
        render: (data) => `
            <div class="resume-modern">
                <div class="modern-header">
                    <div class="modern-photo">
                        <img src="${data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo">
                    </div>
                    <div class="modern-title">
                        <h1 class="modern-name">${data.name || ''}</h1>
                        <div class="modern-contact">
                            <p>${data.email || ''}</p>
                            <p>${data.phone || ''}</p>
                        </div>
                    </div>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Key Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>
                <div class="modern-section">
                    <h2 class="modern-section-title">Declaration</h2>
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 50px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 2: Classic Elegant
    2: {
        name: 'Classic Elegant',
        style: `
            .template-2 {
                font-family: 'Georgia', serif;
            }
            .template-2 .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 1px solid #000;
            }
            .template-2 .name {
                font-size: 2.8em;
                color: #000;
                margin-bottom: 10px;
                letter-spacing: 2px;
            }
            .template-2 .contact-info {
                color: #666;
                font-size: 1.1em;
            }
            .template-2 .section {
                margin-bottom: 30px;
            }
            .template-2 .section-title {
                color: #000;
                font-size: 1.4em;
                margin-bottom: 15px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .template-2 .education-item {
                margin-bottom: 20px;
            }
            .template-2 .education-item h3 {
                color: #000;
                margin-bottom: 5px;
            }
            .template-2 .skills-list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .template-2 .skill-item {
                padding: 5px 0;
            }
            .template-2 .declaration {
                margin-top: 40px;
                font-style: italic;
            }
        `,
        render: (data) => `
            <div class="template-2">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Expertise</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Information</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Interests</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `
                            <div class="skill-item">• ${hobby}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 50px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 3: Minimalist
    3: {
        name: 'Minimalist',
        style: `
            .template-3 {
                font-family: 'Arial', sans-serif;
            }
            .template-3 .header {
                margin-bottom: 30px;
            }
            .template-3 .name {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 10px;
            }
            .template-3 .contact-info {
                color: #666;
                font-size: 0.9em;
            }
            .template-3 .section {
                margin-bottom: 25px;
            }
            .template-3 .section-title {
                color: #333;
                font-size: 1.1em;
                margin-bottom: 10px;
                font-weight: bold;
            }
            .template-3 .education-item {
                margin-bottom: 15px;
            }
            .template-3 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .template-3 .skill-tag {
                background-color: #f0f0f0;
                padding: 4px 8px;
                border-radius: 3px;
                font-size: 0.9em;
            }
            .template-3 .declaration {
                margin-top: 30px;
                font-style: italic;
            }
        `,
        render: (data) => `
            <div class="template-3">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <p><strong>${edu.school}</strong> | ${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>DOB: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 4: Creative
    4: {
        name: 'Creative',
        style: `
            .template-4 {
                font-family: 'Helvetica Neue', sans-serif;
            }
            .template-4 .header {
                background-color: #2c3e50;
                color: white;
                padding: 30px;
                margin-bottom: 30px;
                border-radius: 5px;
            }
            .template-4 .name {
                font-size: 2.5em;
                margin-bottom: 15px;
            }
            .template-4 .contact-info {
                font-size: 1.1em;
                opacity: 0.9;
            }
            .template-4 .section {
                margin-bottom: 25px;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 5px;
            }
            .template-4 .section-title {
                color: #2c3e50;
                font-size: 1.3em;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 2px solid #2c3e50;
            }
            .template-4 .education-item {
                margin-bottom: 15px;
                padding: 10px;
                background-color: white;
                border-radius: 3px;
            }
            .template-4 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .template-4 .skill-tag {
                background-color: #2c3e50;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.9em;
            }
            .template-4 .declaration {
                margin-top: 30px;
                font-style: italic;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 5px;
            }
        `,
        render: (data) => `
            <div class="template-4">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 5: Professional Dark
    5: {
        name: 'Professional Dark',
        style: `
            .template-5 {
                font-family: 'Roboto', sans-serif;
                background-color: #1a1a1a;
                color: #fff;
            }
            .template-5 .header {
                background-color: #2c3e50;
                padding: 30px;
                margin-bottom: 30px;
            }
            .template-5 .name {
                font-size: 2.5em;
                margin-bottom: 15px;
                color: #3498db;
            }
            .template-5 .contact-info {
                color: #bdc3c7;
            }
            .template-5 .section {
                margin-bottom: 25px;
                padding: 20px;
                background-color: #2c3e50;
                border-radius: 5px;
            }
            .template-5 .section-title {
                color: #3498db;
                font-size: 1.3em;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 2px solid #3498db;
            }
            .template-5 .education-item {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #34495e;
                border-radius: 3px;
            }
            .template-5 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .template-5 .skill-tag {
                background-color: #3498db;
                color: white;
                padding: 5px 15px;
                border-radius: 15px;
                font-size: 0.9em;
            }
            .template-5 .declaration {
                margin-top: 30px;
                font-style: italic;
                padding: 20px;
                background-color: #2c3e50;
                border-radius: 5px;
            }
        `,
        render: (data) => `
            <div class="template-5">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 6: Clean and Simple
    6: {
        name: 'Clean and Simple',
        style: `
            .template-6 {
                font-family: 'Open Sans', sans-serif;
            }
            .template-6 .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 2px solid #eee;
            }
            .template-6 .name {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 10px;
            }
            .template-6 .contact-info {
                color: #666;
            }
            .template-6 .section {
                margin-bottom: 25px;
            }
            .template-6 .section-title {
                color: #333;
                font-size: 1.2em;
                margin-bottom: 15px;
                font-weight: 600;
            }
            .template-6 .education-item {
                margin-bottom: 15px;
            }
            .template-6 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .template-6 .skill-tag {
                background-color: #f5f5f5;
                padding: 4px 12px;
                border-radius: 3px;
                font-size: 0.9em;
                color: #333;
            }
            .template-6 .declaration {
                margin-top: 30px;
                font-style: italic;
            }
        `,
        render: (data) => `
            <div class="template-6">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <p><strong>${edu.school}</strong> | ${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 7: Modern Minimal
    7: {
        name: 'Modern Minimal',
        style: `
            .template-7 {
                font-family: 'Poppins', sans-serif;
            }
            .template-7 .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
            }
            .template-7 .name {
                font-size: 2.4em;
                color: #2c3e50;
                margin-bottom: 10px;
            }
            .template-7 .contact-info {
                text-align: right;
                color: #666;
            }
            .template-7 .section {
                margin-bottom: 30px;
            }
            .template-7 .section-title {
                color: #2c3e50;
                font-size: 1.2em;
                margin-bottom: 15px;
                font-weight: 500;
            }
            .template-7 .education-item {
                margin-bottom: 15px;
                padding-left: 20px;
                border-left: 2px solid #eee;
            }
            .template-7 .skills-list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .template-7 .skill-item {
                padding: 5px 0;
            }
            .template-7 .declaration {
                margin-top: 40px;
                font-style: italic;
            }
        `,
        render: (data) => `
            <div class="template-7">
                <div class="header">
                    <div>
                        <h1 class="name">${data.name || 'Your Name'}</h1>
                    </div>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'}</p>
                        <p>${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `
                            <div class="skill-item">• ${hobby}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 8: Professional Light
    8: {
        name: 'Professional Light',
        style: `
            .template-8 {
                font-family: 'Roboto', sans-serif;
            }
            .template-8 .header {
                background-color: #f8f9fa;
                padding: 30px;
                margin-bottom: 30px;
                border-radius: 5px;
            }
            .template-8 .name {
                font-size: 2.3em;
                color: #2c3e50;
                margin-bottom: 15px;
            }
            .template-8 .contact-info {
                color: #666;
            }
            .template-8 .section {
                margin-bottom: 25px;
            }
            .template-8 .section-title {
                color: #2c3e50;
                font-size: 1.2em;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 1px solid #eee;
            }
            .template-8 .education-item {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f8f9fa;
                border-radius: 3px;
            }
            .template-8 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .template-8 .skill-tag {
                background-color: #e9ecef;
                padding: 4px 12px;
                border-radius: 3px;
                font-size: 0.9em;
                color: #495057;
            }
            .template-8 .declaration {
                margin-top: 30px;
                font-style: italic;
            }
        `,
        render: (data) => `
            <div class="template-8">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 9: Elegant Dark
    9: {
        name: 'Elegant Dark',
        style: `
            .template-9 {
                font-family: 'Playfair Display', serif;
                background-color: #1a1a1a;
                color: #fff;
            }
            .template-9 .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 1px solid #333;
            }
            .template-9 .name {
                font-size: 2.8em;
                color: #fff;
                margin-bottom: 15px;
                letter-spacing: 2px;
            }
            .template-9 .contact-info {
                color: #bdc3c7;
                font-size: 1.1em;
            }
            .template-9 .section {
                margin-bottom: 30px;
            }
            .template-9 .section-title {
                color: #fff;
                font-size: 1.4em;
                margin-bottom: 15px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .template-9 .education-item {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #2c2c2c;
                border-radius: 3px;
            }
            .template-9 .skills-list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .template-9 .skill-item {
                padding: 8px 0;
                color: #bdc3c7;
            }
            .template-9 .declaration {
                margin-top: 40px;
                font-style: italic;
                color: #bdc3c7;
            }
        `,
        render: (data) => `
            <div class="template-9">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `
                            <div class="skill-item">• ${skill}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `
                            <div class="skill-item">• ${hobby}</div>
                        `).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 10: Modern Colorful
    10: {
        name: 'Modern Colorful',
        style: `
            .template-10 {
                font-family: 'Quicksand', sans-serif;
            }
            .template-10 .header {
                background: linear-gradient(135deg, #6c5ce7, #a8a4e6);
                color: white;
                padding: 30px;
                margin-bottom: 30px;
                border-radius: 10px;
            }
            .template-10 .name {
                font-size: 2.5em;
                margin-bottom: 15px;
            }
            .template-10 .contact-info {
                opacity: 0.9;
            }
            .template-10 .section {
                margin-bottom: 25px;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .template-10 .section-title {
                color: #6c5ce7;
                font-size: 1.3em;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 2px solid #6c5ce7;
            }
            .template-10 .education-item {
                margin-bottom: 15px;
                padding: 15px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .template-10 .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .template-10 .skill-tag {
                background: linear-gradient(135deg, #6c5ce7, #a8a4e6);
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.9em;
            }
            .template-10 .declaration {
                margin-top: 30px;
                font-style: italic;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
        `,
        render: (data) => `
            <div class="template-10">
                <div class="header">
                    <h1 class="name">${data.name || 'Your Name'}</h1>
                    <div class="contact-info">
                        <p>${data.email || 'email@example.com'} | ${data.phone || 'Phone Number'}</p>
                        <p>${data.address || 'Full Address'}</p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <p>${data.objective || 'Your career objective goes here.'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${(data.education || []).map(edu => `
                        <div class="education-item">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} | ${edu.marks} | ${edu.year}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${(data.keySkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-list">
                        ${(data.technicalSkills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Personal Details</h2>
                    <p>Date of Birth: ${data.dob || 'Not specified'}</p>
                    <p>Nationality: ${data.nationality || 'Not specified'}</p>
                    <p>Languages: ${data.languages || 'Not specified'}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">Hobbies</h2>
                    <div class="skills-list">
                        ${(data.hobbies || []).map(hobby => `<span class="skill-tag">${hobby}</span>`).join('')}
                    </div>
                </div>

                <div class="declaration">
                    <p>${data.declaration || 'I hereby declare that all the information provided above is true to the best of my knowledge.'}</p>
                    <div style="margin-top: 30px;">
                        <p>${data.signature || 'Your Signature'}</p>
                        <p>Date: ${data.date || new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Export the templates
if (typeof module !== 'undefined' && module.exports) {
    module.exports = templates;
} 