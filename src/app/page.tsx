"use client";

import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GroupIcon from "@mui/icons-material/Group";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function Home() {
  return (
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Typography variant="h2" gutterBottom>
            Divide gastos con amigos sin dolores de cabeza
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Con <strong>Mita</strong>, olvídate de calcular quién debe qué. Comparte, divide y paga justo.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Descargar en App Store
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Descargar en Google Play
            </Button>
          </Box>
        </Box>

        {/* Qué es Mita */}
        <Box py={8} textAlign="center">
          <Typography variant="h4" gutterBottom>
            ¿Qué es Mita?
          </Typography>
          <Typography variant="body1" color="textSecondary" maxWidth="md" mx="auto">
            Mita es una app pensada para grupos de amigos, parejas y familias que comparten gastos. Te ayuda a mantener todo claro, sin discusiones ni confusiones.
          </Typography>
        </Box>

        {/* Características principales */}
        <Box py={8}>
          <Typography variant="h4" align="center" gutterBottom>
            Características principales
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <SmartphoneIcon fontSize="large" color="primary" />
                  <Typography variant="h6" mt={2}>
                    Gastos compartidos fácilmente
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <CalculateIcon fontSize="large" color="primary" />
                  <Typography variant="h6" mt={2}>
                    Cálculos automáticos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <GroupIcon fontSize="large" color="primary" />
                  <Typography variant="h6" mt={2}>
                    Para cualquier grupo
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Cómo funciona */}
        <Box py={8} textAlign="center">
          <Typography variant="h4" gutterBottom>
            ¿Cómo funciona?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">1. Crea un grupo</Typography>
              <Typography variant="body2" color="textSecondary">
                Ya sea para un viaje, casa compartida o cena con amigos.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">2. Agrega los gastos</Typography>
              <Typography variant="body2" color="textSecondary">
                Registra lo que paga cada uno de manera sencilla.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">3. Mita hace los cálculos</Typography>
              <Typography variant="body2" color="textSecondary">
                Todos sabrán cuánto deben, sin discusiones.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Final */}
        <Box textAlign="center" py={10} bgcolor="#f5f5f5">
          <Typography variant="h4" gutterBottom>
            Empieza a dividir gastos de manera justa hoy
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Descargar en App Store
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Descargar en Google Play
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box py={4} textAlign="center" color="textSecondary">
          <Typography variant="body2">© 2025 Mita. Todos los derechos reservados.</Typography>
        </Box>
      </Container>
  );
}

