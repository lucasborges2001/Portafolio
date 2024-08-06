function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const selectedSection = document.getElementById(sectionId);

    sections.forEach(section => {
        if (section !== selectedSection) {
            section.style.display = 'none';
        }
    });

    if (selectedSection.style.display === 'block') {
        selectedSection.style.display = 'none';
    } else {
        selectedSection.style.display = 'block';
    }
}

