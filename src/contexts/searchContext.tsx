import { createContext, useContext, useState } from "react";

interface SearchContextData {
  search: string;
  setSearch: (inputValue: string) => void;
}

interface SearchContextProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

//temos que envolver o <App /> com esse contexto global <SearchProvider>.
export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [search, setSearch] = useState(''); //variável começa com uma string vazia e vai alterando conforme o valor é pesquisado.

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchContext() {
  return useContext(SearchContext);
}