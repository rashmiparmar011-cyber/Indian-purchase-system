document.addEventListener('DOMContentLoaded', () => {
    const budgetInput = document.getElementById('budget');
    const utilizedInput = document.getElementById('utilized');
    const availableInput = document.getElementById('available');

    function calculateAvailable() {
        if (!budgetInput || !utilizedInput || !availableInput) return;
        const budget = parseFloat(budgetInput.value) || 0;
        const utilized = parseFloat(utilizedInput.value) || 0;
        const available = budget - utilized;
        availableInput.value = available.toFixed(2);
    }

    if (budgetInput && utilizedInput) {
        budgetInput.addEventListener('input', calculateAvailable);
        utilizedInput.addEventListener('input', calculateAvailable);
    }

    // Initial dummy data for the table
    const dummyData = [
        {
            code: 'PRJ-001', name: 'ERP Implementation',
            budgetYear: '2023-2024',
            manager: 'John Doe', start: '2023-01-10', end: '2023-12-31',
            budget: '50000.00', utilized: '20000.00', available: '30000.00', status: 'Active'
        },
        {
            code: 'PRJ-002', name: 'Office Renovation',
            budgetYear: '2023-2024',
            manager: 'Jane Smith', start: '2023-05-01', end: '2023-08-15',
            budget: '15000.00', utilized: '15000.00', available: '0.00', status: 'Completed'
        }
    ];

    if (document.querySelector('#projectTable tbody')) {
        dummyData.forEach(addProjectToTable);
    }
});

function addProjectToTable(proj) {
    const tbody = document.querySelector('#projectTable tbody');
    if (!tbody) return;
    const row = document.createElement('tr');
    row.setAttribute('data-code', proj.code);
    row.innerHTML = `
        <td>${proj.code}</td>
        <td>${proj.name}</td>
        <td>${proj.budgetYear || '-'}</td>
        <td>${proj.manager}</td>
        <td>${proj.start}</td>
        <td>${proj.end}</td>
        <td>${proj.budget}</td>
        <td>${proj.utilized}</td>
        <td>${proj.available}</td>
        <td><span class="badge ${proj.status.toLowerCase()}">${proj.status}</span></td>
        <td>
            <div class="action-icons">
                <i class="fas fa-edit icon-edit" title="Edit"></i>
            </div>
        </td>
    `;
    tbody.appendChild(row);
}

function saveProject() {
    const form = document.getElementById('projectForm');
    if (!form) return;
    
    // Simple validation
    if (!form.projectCode.value || !form.projectName.value) {
        alert("Project Code and Name are required!");
        return;
    }

    const proj = {
        code: form.projectCode.value,
        name: form.projectName.value,
        budgetYear: form.budgetYear ? form.budgetYear.value : '',
        manager: form.projectManager.value,
        start: form.startDate.value,
        end: form.endDate.value,
        budget: parseFloat(form.budget.value || 0).toFixed(2),
        utilized: parseFloat(form.utilized.value || 0).toFixed(2),
        available: parseFloat(form.available.value || 0).toFixed(2),
        status: form.status.value
    };

    addProjectToTable(proj);
    form.reset();
    const availableEl = document.getElementById('available');
    if (availableEl) availableEl.value = '';
    alert("Project saved successfully!");
}
