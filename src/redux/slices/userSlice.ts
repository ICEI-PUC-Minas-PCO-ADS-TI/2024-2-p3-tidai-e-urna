import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define o estado inicial
interface UserState {
  id: string | null;
  nomeUsuario: string | null;
  curso: string | null;
  tipoUsuarioEnum: string | null;
}

const initialState: UserState = {
  id: null,
  nomeUsuario: null,
  curso: null,
  tipoUsuarioEnum: null,
};

// Criação do slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login : (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.nomeUsuario = action.payload.nomeUsuario;
      state.curso = action.payload.curso;
      state.tipoUsuarioEnum = action.payload.tipoUsuarioEnum;
    },
    // Action para fazer logout e resetar o estado
    logout: (state) => {
      state.id = null;
      state.nomeUsuario = null;
      state.curso = null;
      state.tipoUsuarioEnum = null;
    },
  },
});

// Exporta as actions e o reducer
export const { login , logout } = userSlice.actions;
export default userSlice.reducer;
