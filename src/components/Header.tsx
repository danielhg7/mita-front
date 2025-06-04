'use client'

import Image from "next/image";
import Link from "next/link";
import { Button, Box, AppBar, Toolbar, Stack } from "@mui/material";
import { useAuth } from '@/context/AuthContext';

export default function Header() {

  const { isLoggedIn, logout } = useAuth();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0DB8AE" }} style={{ paddingInline: 60 }}>
      <Toolbar>
        {/* Logo con link a Home */}
        <Link href="/" passHref>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo-white.png"
              alt="Logo Mita"
              width={100}
              height={40}
              style={{ marginRight: 8 }}
            />
          </Box>
        </Link>

        {/* Botones de la derecha */}
        <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
          { isLoggedIn ?
          (
            <>
              <Button color="primary" variant="contained" sx={{ mr: 2 }}>
                Agregar gasto
              </Button>
              <Button onClick={logout} color="secondary" variant="outlined" component={Link} href="/">
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} component={Link} href="/login">Iniciar sesión</Button>
              <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                Registrarse
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}