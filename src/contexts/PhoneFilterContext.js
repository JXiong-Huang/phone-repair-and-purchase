import React, { createContext } from "react";
import usePhoneFilter from "../hooks/usePhoneFilter";

const PhoneFilterContext = createContext();

function PhoneFilterProvider({
  children,
  startingDescription = true,
  startingModel = "All Models",
}) {
  const {
    showDescription,
    setShowDescription,
    model,
    setModel,
    searchQuery,
    setSearchQuery,
    IPHONE_MODELS,
  } = usePhoneFilter(startingDescription, startingModel);
  return (
    <PhoneFilterContext.Provider
      value={{
        showDescription,
        setShowDescription,
        model,
        setModel,
        searchQuery,
        setSearchQuery,
        IPHONE_MODELS,
      }}
    >
      {children}
    </PhoneFilterContext.Provider>
  );
}

export { PhoneFilterContext, PhoneFilterProvider };
