import { useState } from "react";

function usePhoneFilter(startingDescription, startingModel) {
  const [showDescription, setShowDescription] = useState(startingDescription);
  const [model, setModel] = useState(startingModel);
  const [searchQuery, setSearchQuery] = useState("");
  const IPHONE_MODELS = [
    "All Models",
    "IPHONE 6",
    "IPHONE 6Plus",
    "IPHONE 6s",
    "IPHONE 6sPlus",
    "IPHONE 7",
    "IPHONE 7Plus",
    "IPHONE 8",
    "IPHONE 8Plus",
    "IPHONE SE2",
    "IPHONE X",
    "IPHONE Xs",
    "IPHONE Xr",
    "IPHONE XsMax",
    "IPHONE 11",
    "IPHONE 11Pro",
    "IPHONE 11ProMax",
    "IPHONE 12",
    "IPHONE 12Mini",
    "IPHONE 12Pro",
    "IPHONE 12ProMax",
    "IPHONE 13",
    "IPHONE 13Mini",
    "IPHONE 13Pro",
    "IPHONE 13ProMax",
    "IPHONE 14",
    "IPHONE 14Plus",
    "IPHONE 14Pro",
    "IPHONE 14ProMax",
    "IPHONE 15",
    "IPHONE 15Plus",
    "IPHONE 15Pro",
    "IPHONE 15ProMax",
  ];
  return {
    showDescription,
    setShowDescription,
    model,
    setModel,
    searchQuery,
    setSearchQuery,
    IPHONE_MODELS,
  };
}

export default usePhoneFilter;
