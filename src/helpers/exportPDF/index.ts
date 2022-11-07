import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportPDF = (
  e: any,
  ref: HTMLElement,
  nameFile: string = "print.pdf"
) => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => (button.style.opacity = "0"));

  html2canvas(ref, { logging: true, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("img/png");
    const pdf = new jsPDF("l", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

    pdf.save(nameFile);

    buttons.forEach((button) => (button.style.opacity = "1"));
  });
};
