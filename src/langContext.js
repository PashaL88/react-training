import { createContext, useState } from "react";

export const langContext = createContext("en");

const LangContext = ({ children }) => {
  const [lang, setLang] = useState("en");
  return (
    <langContext.Provider value={{ lang, setLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;
