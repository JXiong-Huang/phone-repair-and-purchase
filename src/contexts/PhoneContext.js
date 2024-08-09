import { createContext } from "react";

const PhoneContext = createContext();

function PhoneProvider({
  children,
  phones,
  requestStatus,
  error,
  updateRecord,
  insertRecord,
  deleteRecord,
}) {
  return (
    <PhoneContext.Provider
      value={{
        phones,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
}

export { PhoneContext, PhoneProvider };
