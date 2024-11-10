import { RefObject } from 'react';
import jsPDF from "jspdf";
//import html2canvas from "html2canvas";


export const handleDownloadPDF = async (curriculumRef: RefObject<HTMLDivElement>, event?: React.MouseEvent<HTMLButtonElement>) => {
  if (event) {
    event.preventDefault();
  }
  if (curriculumRef.current) {
    const element = curriculumRef.current;

    // Adding the component dynamically to avoid SSR
    const html2canvas = (await import("html2canvas")).default;
    // Usa html2canvas para capturar el contenido como imagen
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    // Crea un PDF con jsPDF
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // Anchura de la imagen en el PDF (en mm)
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Agrega la imagen al PDF y ajusta la paginación si es necesario
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("mern-cv2024-dan_chanivet.pdf");
  }
};