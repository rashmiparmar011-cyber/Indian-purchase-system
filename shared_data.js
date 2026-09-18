/**
 * India Purchase System - Shared Data Layer
 * Models:
 *  - Level 1: Purchase Order (PO)
 *  - Level 2: Line Items
 *  - Level 3: Goods Receive / Batches
 */

const STORAGE_KEY = 'indiaPurchaseSystem_v2_data';

const DEFAULT_PURCHASE_DATA = [
    {
        poNo: "PO01",
        poDate: "2026-09-11",
        prNo: "PR-501",
        requestedBy: "Rashmi Parmar",
        supplierName: "Vimal Enterprises",
        supplierCode: "SUP-101",
        department: "Information Technology",
        projectCode: "PRJ-001",
        projectName: "Enterprise Systems Upgrade",
        totalCost: 30000,
        status: "Partial", // New, Partial, Complete
        paymentStatus: "Partially Paid", // Pending, Partially Paid, Fully Paid
        paymentTerm: "50% Payment",
        amountPaid: 15000,
        dueDate: "2026-09-30",
        lineItems: [
            {
                itemKey: "Item001",
                itemName: "MacBook Air M2",
                reqQty: 10,
                recQty: 10,
                uom: "Piece",
                cost: 10000,
                balance: 0,
                status: "Full", // New, Partial, Full
                userAcceptanceStatus: "Accepted", // Pending, Accepted, Rejected
                userAcceptedQty: 10,
                acceptanceRemarks: "All 10 units verified and accepted.",
                batches: [
                    {
                        batchNo: "B001",
                        recDate: "2026-09-13",
                        recQty: 5,
                        expiryDate: "2027-09-13",
                        invoiceNo: "Inv001",
                        attachment: "inv001_macbook_b1.pdf"
                    },
                    {
                        batchNo: "B002",
                        recDate: "2026-09-16",
                        recQty: 5,
                        expiryDate: "2027-09-13",
                        invoiceNo: "Inv002",
                        attachment: "inv002_macbook_b2.pdf"
                    }
                ]
            },
            {
                itemKey: "Item002",
                itemName: "Dell Latitude Laptop",
                reqQty: 20,
                recQty: 5,
                uom: "Piece",
                cost: 20000,
                balance: 15,
                status: "Partial",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting physical delivery at desk.",
                batches: [
                    {
                        batchNo: "B003",
                        recDate: "2026-09-13",
                        recQty: 5,
                        expiryDate: "2028-09-13",
                        invoiceNo: "Inv001",
                        attachment: "inv001_dell.pdf"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO02",
        poDate: "2026-09-14",
        prNo: "PR-502",
        requestedBy: "Vimal Kumar",
        supplierName: "Rashmi Tech Corp",
        supplierCode: "SUP-102",
        department: "Network & Infrastructure",
        projectCode: "PRJ-002",
        projectName: "Data Center Modernization",
        totalCost: 100000,
        status: "Complete",
        paymentStatus: "Fully Paid",
        paymentTerm: "Full Payment",
        amountPaid: 100000,
        dueDate: "2026-10-15",
        lineItems: [
            {
                itemKey: "Item003",
                itemName: "Server Rack 42U Enclosure",
                reqQty: 2,
                recQty: 2,
                uom: "Piece",
                cost: 60000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Accepted",
                userAcceptedQty: 2,
                acceptanceRemarks: "Server rack assembled and tested.",
                batches: [
                    {
                        batchNo: "B004",
                        recDate: "2026-09-15",
                        recQty: 2,
                        expiryDate: "N/A",
                        invoiceNo: "Inv003",
                        attachment: "inv003_server_rack.pdf"
                    }
                ]
            },
            {
                itemKey: "Item004",
                itemName: "Cisco 48-Port Managed Switch",
                reqQty: 4,
                recQty: 4,
                uom: "Piece",
                cost: 40000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Accepted",
                userAcceptedQty: 4,
                acceptanceRemarks: "Configured and racked in DC.",
                batches: [
                    {
                        batchNo: "B005",
                        recDate: "2026-09-15",
                        recQty: 4,
                        expiryDate: "N/A",
                        invoiceNo: "Inv003",
                        attachment: "inv003_cisco_switch.pdf"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO03",
        poDate: "2026-09-15",
        prNo: "PR-503",
        requestedBy: "Priya Sharma",
        supplierName: "TechnoSource Pvt Ltd",
        supplierCode: "SUP-103",
        department: "IT Infrastructure",
        projectCode: "PRJ-003",
        projectName: "LAN Cabling Overhaul",
        totalCost: 45000,
        status: "New",
        paymentStatus: "Pending",
        paymentTerm: "Full Payment",
        amountPaid: 0,
        dueDate: "2026-10-05",
        lineItems: [
            {
                itemKey: "Item005",
                itemName: "Cat6 UTP Cable Roll 305m",
                reqQty: 15,
                recQty: 0,
                uom: "Roll",
                cost: 30000,
                balance: 15,
                status: "New",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting shipment arrival.",
                batches: []
            },
            {
                itemKey: "Item006",
                itemName: "RJ45 Connectors (Pack of 100)",
                reqQty: 30,
                recQty: 0,
                uom: "Pack",
                cost: 15000,
                balance: 30,
                status: "New",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting shipment arrival.",
                batches: []
            }
        ]
    },
    {
        poNo: "PO04",
        poDate: "2026-09-16",
        prNo: "PR-504",
        requestedBy: "John Doe",
        supplierName: "Global Infotech Solutions",
        supplierCode: "SUP-104",
        department: "Administration",
        projectCode: "PRJ-004",
        projectName: "HQ Ergonomic Furniture",
        totalCost: 25000,
        status: "Partial",
        paymentStatus: "Pending",
        paymentTerm: "Partial Payment",
        amountPaid: 0,
        dueDate: "2026-09-25",
        lineItems: [
            {
                itemKey: "Item007",
                itemName: "Ergonomic High-Back Mesh Chair",
                reqQty: 5,
                recQty: 2,
                uom: "Piece",
                cost: 25000,
                balance: 3,
                status: "Partial",
                userAcceptanceStatus: "Rejected",
                userAcceptedQty: 0,
                acceptanceRemarks: "Quality defect / failed on testing — Defective armrest mechanism and torn lumbar cushion.",
                batches: [
                    {
                        batchNo: "B006",
                        recDate: "2026-09-16",
                        recQty: 2,
                        expiryDate: "N/A",
                        invoiceNo: "Inv004",
                        attachment: "inv004_chairs.pdf"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO05",
        poDate: "2026-09-17",
        prNo: "PR-505",
        requestedBy: "Anish Patel",
        supplierName: "Apex Hardware Systems",
        supplierCode: "SUP-105",
        department: "Operations & Safety",
        projectCode: "PRJ-005",
        projectName: "Facility Calibration & Tooling",
        totalCost: 18000,
        status: "Complete",
        paymentStatus: "Pending",
        paymentTerm: "Full Payment",
        amountPaid: 0,
        dueDate: "2026-10-10",
        lineItems: [
            {
                itemKey: "Item008",
                itemName: "Industrial Digital Calipers (Set of 6)",
                reqQty: 6,
                recQty: 6,
                uom: "Set",
                cost: 18000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Rejected",
                userAcceptedQty: 0,
                acceptanceRemarks: "Quality defect / failed on testing — Calibration certificate expired and sensor display flickering.",
                batches: [
                    {
                        batchNo: "B007",
                        recDate: "2026-09-17",
                        recQty: 6,
                        expiryDate: "2028-09-17",
                        invoiceNo: "Inv005",
                        attachment: "inv005_calipers.pdf"
                    }
                ]
            }
        ]
    }
];

class PurchaseDataManager {
    constructor() {
        this.data = this.loadData();
    }

    loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    let needsSave = false;
                    // Migrate: ensure Item007 is rejected with reason
                    parsed.forEach(po => {
                        if (po.lineItems) {
                            po.lineItems.forEach(li => {
                                if (li.itemKey === 'Item007' && (!li.userAcceptanceStatus || li.userAcceptanceStatus !== 'Rejected')) {
                                    li.userAcceptanceStatus = 'Rejected';
                                    li.acceptanceRemarks = 'Quality defect / failed on testing — Defective armrest mechanism and torn lumbar cushion.';
                                    needsSave = true;
                                }
                            });
                        }
                    });

                    // Migrate: ensure PO05 exists so Rejected tab has rich sample records
                    const hasPo5 = parsed.some(p => p.poNo === 'PO05');
                    if (!hasPo5) {
                        const po5Default = DEFAULT_PURCHASE_DATA.find(p => p.poNo === 'PO05');
                        if (po5Default) {
                            parsed.push(JSON.parse(JSON.stringify(po5Default)));
                            needsSave = true;
                        }
                    }

                    if (needsSave) {
                        this.saveData(parsed);
                    }
                    return parsed;
                }
            }
        } catch (e) {
            console.warn("Could not read localStorage, using default data", e);
        }
        this.saveData(DEFAULT_PURCHASE_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_PURCHASE_DATA));
    }

    saveData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error("Failed to save to localStorage", e);
        }
        this.data = data;
    }

    resetToDefault() {
        localStorage.removeItem(STORAGE_KEY);
        this.data = JSON.parse(JSON.stringify(DEFAULT_PURCHASE_DATA));
        this.saveData(this.data);
        return this.data;
    }

    getAllPOs() {
        return this.data;
    }

    getPO(poNo) {
        return this.data.find(p => p.poNo.toLowerCase() === poNo.toLowerCase());
    }

    // Goods-In: flatten to line items
    getGoodsInLineItems() {
        const items = [];
        this.data.forEach(po => {
            po.lineItems.forEach(li => {
                items.push({
                    poNo: po.poNo,
                    poDate: po.poDate,
                    supplierName: po.supplierName,
                    requestedBy: po.requestedBy,
                    totalCost: po.totalCost,
                    poStatus: po.status,
                    itemKey: li.itemKey,
                    itemName: li.itemName,
                    reqQty: li.reqQty,
                    recQty: li.recQty,
                    balance: li.balance,
                    uom: li.uom,
                    cost: li.cost,
                    status: li.status,
                    userAcceptanceStatus: li.userAcceptanceStatus || 'Pending',
                    acceptanceRemarks: li.acceptanceRemarks || '',
                    rejectionReason: li.acceptanceRemarks || '',
                    userAcceptedQty: li.userAcceptedQty || 0,
                    batches: li.batches || []
                });
            });
        });
        return items;
    }

    // User Acceptance: line items from requester perspective
    getUserAcceptanceItems() {
        const items = [];
        this.data.forEach(po => {
            po.lineItems.forEach(li => {
                items.push({
                    poNo: po.poNo,
                    poDate: po.poDate,
                    prNo: po.prNo,
                    supplierName: po.supplierName,
                    requestedBy: po.requestedBy,
                    itemKey: li.itemKey,
                    itemName: li.itemName,
                    reqQty: li.reqQty,
                    recQty: li.recQty,
                    userAcceptedQty: li.userAcceptedQty || 0,
                    uom: li.uom,
                    userAcceptanceStatus: li.userAcceptanceStatus || 'Pending',
                    acceptanceRemarks: li.acceptanceRemarks || '',
                    batches: li.batches || []
                });
            });
        });
        return items;
    }

    // Add batch to a line item in Goods-In
    addBatch(poNo, itemKey, batchData) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: 'PO not found' };

        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem) return { success: false, message: 'Line item not found' };

        const qty = Number(batchData.recQty) || 0;
        if (qty <= 0) return { success: false, message: 'Received quantity must be greater than 0' };

        if (!lineItem.batches) lineItem.batches = [];
        lineItem.batches.push({
            batchNo: batchData.batchNo || `B-${Date.now().toString().slice(-4)}`,
            recDate: batchData.recDate || new Date().toISOString().split('T')[0],
            recQty: qty,
            expiryDate: batchData.expiryDate || 'N/A',
            invoiceNo: batchData.invoiceNo || 'N/A',
            attachment: batchData.attachment || 'attachment.pdf'
        });

        // Recalculate line item received qty and balance
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        // Recalculate parent PO status
        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);

        if (allItemsFull) {
            po.status = 'Complete';
        } else if (anyItemReceived) {
            po.status = 'Partial';
        } else {
            po.status = 'New';
        }

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Update an existing batch
    updateBatch(poNo, itemKey, batchIndex, updatedBatchData) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: 'PO not found' };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem || !lineItem.batches || !lineItem.batches[batchIndex]) return { success: false, message: 'Batch not found' };

        const newQty = Number(updatedBatchData.recQty);
        if (!newQty || newQty <= 0) {
            return {
                success: false,
                message: 'Received quantity must be greater than 0.'
            };
        }

        lineItem.batches[batchIndex] = {
            ...lineItem.batches[batchIndex],
            recDate: updatedBatchData.recDate || lineItem.batches[batchIndex].recDate,
            recQty: newQty,
            batchNo: updatedBatchData.batchNo || lineItem.batches[batchIndex].batchNo,
            expiryDate: updatedBatchData.expiryDate || lineItem.batches[batchIndex].expiryDate,
            invoiceNo: updatedBatchData.invoiceNo || lineItem.batches[batchIndex].invoiceNo,
            attachment: updatedBatchData.attachment || lineItem.batches[batchIndex].attachment
        };

        // Recalculate
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0 && lineItem.recQty > 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);
        po.status = allItemsFull ? 'Complete' : (anyItemReceived ? 'Partial' : 'New');

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Delete a batch
    deleteBatch(poNo, itemKey, batchIndex) {
        const po = this.getPO(poNo);
        if (!po) return { success: false };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem || !lineItem.batches || !lineItem.batches[batchIndex]) return { success: false };

        lineItem.batches.splice(batchIndex, 1);
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0 && lineItem.recQty > 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);
        po.status = allItemsFull ? 'Complete' : (anyItemReceived ? 'Partial' : 'New');

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // User acceptance update
    updateUserAcceptance(poNo, itemKey, status, remarks = '', acceptedQty = null) {
        const po = this.getPO(poNo);
        if (!po) return { success: false };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem) return { success: false };

        lineItem.userAcceptanceStatus = status;
        lineItem.acceptanceRemarks = remarks;
        if (status === 'Accepted') {
            lineItem.userAcceptedQty = acceptedQty !== null ? acceptedQty : lineItem.recQty;
        } else if (status === 'Rejected') {
            lineItem.userAcceptedQty = 0;
        }

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Finance payment recording
    recordPayment(poNo, amount, paymentTerm, referenceNo = '') {
        const po = this.getPO(poNo);
        if (!po) return { success: false };

        po.amountPaid = (po.amountPaid || 0) + Number(amount);
        if (po.amountPaid >= po.totalCost) {
            po.paymentStatus = 'Fully Paid';
            po.amountPaid = po.totalCost;
        } else if (po.amountPaid > 0) {
            po.paymentStatus = 'Partially Paid';
        } else {
            po.paymentStatus = 'Pending';
        }

        if (paymentTerm) po.paymentTerm = paymentTerm;

        this.saveData(this.data);
        return { success: true, po };
    }
}

// Global instance
window.PurchaseData = new PurchaseDataManager();
