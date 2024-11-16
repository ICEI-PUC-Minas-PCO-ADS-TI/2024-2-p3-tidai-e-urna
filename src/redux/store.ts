import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';


// Configuração da Store
export const store = configureStore({
  reducer: {
    user: userSlice, // Adicione os reducers aqui
  },
});

// Tipos para o uso do Redux com TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
