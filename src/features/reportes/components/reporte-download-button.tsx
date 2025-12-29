import { Button } from "@/shared/components/ui/button";
import { FileSpreadsheet } from "lucide-react";
import { useState } from "react";

interface ReporteDownloadButtonProps {
  codProy: string;
  downloadFn: (codProy: string) => Promise<Blob>;
  fileNamePrefix: string;
}

export function ReporteDownloadButton({
  codProy,
  downloadFn,
  fileNamePrefix,
}: ReporteDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const blob = await downloadFn(codProy);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileNamePrefix}-${codProy}-${new Date().toISOString().split("T")[0]}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading excel:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      variant="secundario"
      disabled={!codProy || isDownloading}
      onClick={handleDownload}
      className="gap-2"
    >
      <FileSpreadsheet className="h-4 w-4" />
      {isDownloading ? "Descargando..." : "Descargar Excel"}
    </Button>
  );
}
