
import React, { useState } from 'react';
import { TextField, Button, Grid2, Box, Typography } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';

export const Editar = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    id:'',
    unidade_medida: '',
    nome: '',
    Valor: '',
    Fornecedor: '',
    Data_Pedido: '',
    Validade: '',
    Refrigerado: '',
    Embalagem: '',
    Perecivel: '',
    Tipo: '',
  });

  // Estado para controlar se a pessoa é menor de idade
  // const [isMenorIdade, setIsMenorIdade] = useState(false);

  // Função para atualizar o estado com o valor do input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // // Função para verificar se a pessoa é menor de idade
  // const handleIdadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const idade = e.target.value;
  //   setFormData({ ...formData, idade });
  //   setIsMenorIdade(parseInt(idade) < 18); // Verifica se é menor de idade
  // };

  // Função para simular o envio dos dados
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você pode conectar com a API para salvar os dados
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Editar Produto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
         

          <Grid2 size={12}>
            <TextField
              label="ID"
              variant="outlined"
              fullWidth
              type='string'
              margin="normal" 
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </Grid2>


         
          <Grid2 size={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              type='string'
              name="nome"
              margin="normal" 
              value={formData.nome}
              onChange={handleChange}
            />
            </Grid2>
          
          
          <Grid2 size={12}>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              type="number"
              name="Valor"
              value={formData.Valor}
              onChange={handleChange}
              margin="normal" 
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
              name="Fornecedor"
              margin="normal"
              type='string'
              value={formData.Fornecedor}
              onChange={handleChange}
            />
          </Grid2>


          <Grid2 size={12}>
            <TextField
              label="Data do Pedido"
              variant="outlined"
              fullWidth
              type='date'
              margin="normal"
              name="Data_Pedido"
              value={formData.Data_Pedido}
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
              margin="normal"
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
            <TextField
              label="Embalagem"
              variant="outlined"
              fullWidth
              type='string'
              margin="normal"
              name="Embalagem"
              value={formData.Embalagem}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField
            label="Unidadne de Medída"
            variant='outlined'
            fullWidth
            type='string'
            margin='normal'
            name='Unidade de médida'
            value={formData.unidade_medida}
            onChange={handleChange}/>
            </Grid2>


            <Grid2 size={12}>
  <FormControl component="fieldset">
    <FormLabel component="legend">Temperatura</FormLabel>
    <RadioGroup
      row
      name="produtoAtivo"
      value={formData.Tipo}
      onChange={handleChange}
    >
      <FormControlLabel value="Perecível" control={<Radio />} label="Perecível" />
      <FormControlLabel value="Resfriado" control={<Radio />} label="Resfriado" />
      <FormControlLabel value="Termossensível" control={<Radio />} label="Termossensível" />
    </RadioGroup>
  </FormControl>
</Grid2>


            {/* <Grid2 size={12}>
            <TextField
              label="Tipo"
              variant="outlined"
              fullWidth
              type="number"
              name="Tipo"
              value={formData.Tipo}
              onChange={handleChange}
              margin="normal" 
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid2> */}


          {/* Campo de nome do responsável aparece apenas se a pessoa for menor de idade */}
          {/* {isMenorIdade && (
            <Grid2 size={12}>
              <TextField
                label="Nome do Responsável"
                variant="outlined"
                fullWidth
                name="nomeResponsavel"
                value={formData.nomeResponsavel}
                onChange={handleChange}
              />
            </Grid2>
          )} */}

          <Grid2 size={12}>
            <Button variant="contained" color="primary" type="submit">
              Editar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};































