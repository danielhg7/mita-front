'use client'

import {
    Box,
    Grid,
    Typography,
    CircularProgress
  } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ImageUploader from "@/components/ImageUploader";
import ParsedResult from "@/components/ParsedResults";
  
export default function DashboardPage() {

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);
  const router = useRouter();
  
  const [resultsLoading, setResultsLoading] = useState(false);
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
      router.replace('/login');
      } else {
        setIsDashboardLoading(false);
      }
  }, [router]);

  const handleUpload = async (file: File) => {
    setResultsLoading(true);
    setParsedData(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setParsedData(data);
    } catch (error) {
      console.error("Error al procesar la imagen:", error);
    } finally {
      setResultsLoading(false);
    }
  };

  if (isDashboardLoading) return <p>Cargando...</p>;
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Panel izquierdo: Upload */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom>
            Subir imagen de gasto
          </Typography>
          <ImageUploader onUpload={handleUpload} />
        </Grid>

        {/* Panel derecho: Resultado o loader */}
        <Grid size={{ xs: 12, md: 6 }}>
          {resultsLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : parsedData ? (
            <ParsedResult items={parsedData} />
          ) : (
            <Typography color="textSecondary">Los resultados aparecerán aquí.</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}