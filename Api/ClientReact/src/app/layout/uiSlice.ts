import { createSlice } from "@reduxjs/toolkit";

const getinitialThemeMode = () => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme ? JSON.parse(savedTheme) : true;
};

export const uislice = createSlice({
  name: "ui",
  initialState: { loading: false, darkMode: getinitialThemeMode() },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    }
  },
});

export const { startLoading, stopLoading , toggleDarkMode } = uislice.actions;
// export default uislice.reducer;
