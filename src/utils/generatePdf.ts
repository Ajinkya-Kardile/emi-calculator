import { PDFDocument, rgb } from "pdf-lib";
import * as fontKit from "fontkit";
import { EmiSchedule } from "@/types/emiTypes";
import {Fontkit} from "pdf-lib/es/types/fontkit";

export const generatePDF = async (schedule: EmiSchedule[]) => {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontKit as unknown as Fontkit);

    const fontBytes = await fetch("/fonts/Roboto-Regular.ttf").then(res => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    const fontSize = 12;
    const rowHeight = 25;
    const tableWidth = 520;
    const colWidths = [70, 90, 80, 80, 90, 110];
    const headers = ["Period", "Principal (₹)", "Interest (₹)", "Total (₹)", "Balance (₹)", "Loan Paid (₹)"];

    let yPosition = 800;
    let page = pdfDoc.addPage([600, 850]);
    const { width } = page.getSize(); // Removed unused 'height'

    // 🏆 Title Section
    page.drawText("EMI Payment Schedule Report", {
        x: width / 2 - 110,
        y: yPosition,
        size: 20,
        font: customFont,
        color: rgb(0.09, 0.46, 0.82),
    });

    yPosition -= 40;

    // Function to add a new page
    const addNewPage = () => {
        page = pdfDoc.addPage([600, 850]);
        yPosition = 800;
        yPosition -= 40;
    };

    // 🏆 Draw Table Header
    const drawTableHeader = () => {
        let x = (width - tableWidth) / 2;

        page.drawRectangle({
            x: x - 5,
            y: yPosition - 5,
            width: tableWidth + 10,
            height: rowHeight,
            color: rgb(0.09, 0.46, 0.82),
        });

        headers.forEach((header, i) => {
            page.drawText(header, {
                x,
                y: yPosition,
                size: fontSize,
                font: customFont,
                color: rgb(1, 1, 1),
            });
            x += colWidths[i];
        });

        yPosition -= rowHeight;
    };

    drawTableHeader();

    // 🏆 Draw Table Rows
    schedule.forEach((row, index) => {
        if (yPosition < 50) {
            addNewPage();
            drawTableHeader();
        }

        let x = (width - tableWidth) / 2;
        const bgColor = index % 2 === 0 ? rgb(0.9, 0.9, 1) : rgb(1, 1, 1);

        page.drawRectangle({
            x: x - 5,
            y: yPosition - 5,
            width: tableWidth + 10,
            height: rowHeight,
            color: bgColor,
        });

        const rowData = [
            row.period,
            `₹${row.principal.toFixed(2)}`,
            `₹${row.interest.toFixed(2)}`,
            `₹${row.totalPayment.toFixed(2)}`,
            `₹${row.balance.toFixed(2)}`,
            `₹${row.loanPaidToDate.toFixed(2)}`,
        ];

        rowData.forEach((cell, i) => {
            page.drawText(cell, {
                x,
                y: yPosition,
                size: fontSize - 2,
                font: customFont,
                color: rgb(0, 0, 0),
            });
            x += colWidths[i];
        });

        yPosition -= rowHeight;
    });

    // 🏆 Generate PDF and trigger download
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "EMI_Payment_Schedule.pdf";
    link.click();
};
