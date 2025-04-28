import React, { useState } from 'react';
import { TextField, Button, Grid2,Box, Typography } from '@mui/material';

export const Estoque = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
    fornecedor: '',
    data_pedido: 'date',
    Validade: '',
  });
  // Função para atualizar o estado com o valor do input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Função para simular o envio dos dados
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você pode conectar com a API para salvar os dados
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Registra Produto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              type='string'
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={13}>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              label="Fornecedor"
              variant="outlined"
              fullWidth
              type='string'
              name="fornecedor"
              value={formData.fornecedor}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              label="Data Pedido"
              variant="outlined"
              fullWidth
              type='date'
              name="data_pedido"
              value={formData.data_pedido}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              label="Validade"
              variant="outlined"
              fullWidth
              type='date'
              name="Validade"
              value={formData.Validade}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            
          </Grid2>
          <Grid2 size={12}>
            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};







