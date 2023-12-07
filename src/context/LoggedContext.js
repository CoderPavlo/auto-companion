import React, { createContext, useContext, useState } from 'react';

// Створюємо контекст для доступу до стану і функцій
const LoggedContext = createContext();

// Створюємо власний хук для отримання доступу до стану і функцій
export const useLogged = () => {
  const context = useContext(LoggedContext);
  if (!context) {
    throw new Error('useLogged має бути викликано всередині LoggedProvider');
  }
  return context;
};

// Компонент, який надає контекст для всіх дочірніх компонентів
export const LoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  // Додайте інші функції, які вам потрібні для роботи з isLogged

  const login = () => {
    setIsLogged(true);
    // Додайте інші дії, які вам потрібні при вході
  };

  const logout = () => {
    setIsLogged(false);
    // Додайте інші дії, які вам потрібні при виході
  };

  // Задаємо значення, яке буде доступне всім дочірнім компонентам
  const contextValue = {
    isLogged,
    setIsLogged,
    login,
    logout,
    // Додайте інші функції або стани за необхідності
  };

  return (
    <LoggedContext.Provider value={contextValue}>
      {children}
    </LoggedContext.Provider>
  );
};
