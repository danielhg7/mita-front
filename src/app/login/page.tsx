'use client'

import {
    Container,
    Box,
    TextField,
    Button,
    Paper
  } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
  
  export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const { token } = await res.json();
            localStorage.setItem('token', token);
            router.push('/dashboard');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
      <Container maxWidth="sm">
        <Box component={Paper} elevation={10}
        sx={{
          mt: 16, // margen superior (espaciado)
          p: 4, // padding interno
          backgroundColor: "#0DB8AE", // fondo más oscuro
          color: "#fff", // texto blanco
          borderRadius: 2,
        }}
        >   <form onSubmit={handleSubmit}>
                <TextField
                fullWidth
                label="Usuario o correo"
                variant="filled"
                margin="normal"
                InputProps={{ disableUnderline: true }}
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <TextField
                fullWidth
                label="Contraseña"
                type="password"
                variant="filled"
                margin="normal"
                InputProps={{ disableUnderline: true }}
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "#093029de", mt: 3 }}
                type="submit"
                >
                Iniciar sesión
                </Button>
            </form>
        </Box>
      </Container>
    );
  }