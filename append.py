with open('shared_data.js', 'a', encoding='utf-8') as f:
    f.write('''\n// Global PO Preview Modal Injector
document.addEventListener('DOMContentLoaded', () => {
    const modalHtml = `
    <!-- PO Preview Modal -->
    <div class="modal-overlay" id="poPreviewModal">
        <div class="modal-box" style="max-width: 800px; width: 90%;">
            <div class="modal-header">
                <h3><i class="fas fa-file-invoice"></i> Purchase Order — <span id="poModalTitle"></span></h3>
                <button class="modal-close-btn" onclick="closePoModal()">&times;</button>
            </div>
            <div class="modal-body" id="poModalContent" style="text-align: center;">
                <p>Previewing Purchase Order details...</p>
                <div style="border: 1px solid #ccc; padding: 20px; margin-top: 10px; min-height: 400px; display: flex; align-items: center; justify-content: center; background-color: #f9fafb;">
                    <div>
                        <i class="fas fa-file-pdf" style="font-size: 48px; color: #e11d48; margin-bottom: 10px;"></i>
                        <h4>PO Document</h4>
                        <p style="color: #64748b;">(Generated PO Preview would appear here)</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-export" onclick="alert('Downloading PO PDF...')">
                    <i class="fas fa-download"></i> Download PO
                </button>
                <button type="button" class="btn btn-secondary" onclick="closePoModal()">Close</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
});

window.viewPO = function(poNo) {
    document.getElementById('poModalTitle').textContent = poNo;
    document.getElementById('poPreviewModal').classList.add('active');
};

window.closePoModal = function() {
    document.getElementById('poPreviewModal').classList.remove('active');
};
''')
