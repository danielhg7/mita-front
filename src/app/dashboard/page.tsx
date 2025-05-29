'use client'

import {
    Container,
    Box,
    Paper
  } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
  
  export default function DashboardPage() {

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
        router.replace('/login');
        } else {
        setIsLoading(false);
        }
    }, [router]);

    if (isLoading) return <p>Cargando...</p>;
    return (
      <Container maxWidth="sm">
        <Box component={Paper} elevation={10}
        sx={{
          mt: 16, // margen superior (espaciado)
          p: 4, // padding interno
          backgroundColor: "#0DB8AE", // fondo más oscuro
          color: "#fff", // texto blanco
          borderRadius: 2,
        }}>
            <div>
                <h1>Bienvenido al dashboard</h1>
                <p>Esta ruta está protegida.</p>
            </div>
        </Box>
      </Container>
    );
  }