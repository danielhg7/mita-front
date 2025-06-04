import { Expense } from "@/interfaces/Expense";
import { Box, Typography, Paper, Divider } from "@mui/material";

interface ParsedResultProps {
    items: Expense[]
}

export default function ParsedResult({items} : ParsedResultProps) {
  console.log(items);
  return (
    <Paper elevation={3} sx={{ p: 3, my: 20 }}>
        <Typography variant="h6" gutterBottom>
        Resultados del análisis:
        </Typography>

        {items.length === 0 ? (
        <Typography color="textSecondary">No se encontraron gastos.</Typography>
        ) : (
            items.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1"><strong>Descripción:</strong> {item.description.mentionText}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
                <strong>Monto:</strong> ${item.amount.mentionText.toLocaleString()}
            </Typography>
            {index < items.length - 1 && <Divider sx={{ my: 1 }} />}
            </Box>
        ))
        )}
    </Paper>
  );
}