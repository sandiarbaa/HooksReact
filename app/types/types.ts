// State formData
export interface FormDataState {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface FormDataContextValue {
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
}

export interface StateContextProviderProps {
  children: React.ReactNode;
}

// State isDarkMode
export interface DarkModeState {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Gabungkan semua state ke dalam satu interface
export interface AppStateContextValue {
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
