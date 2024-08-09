import { PhoneFilterProvider } from "../contexts/PhoneFilterContext";
import PhonesList from "./PhonesList";
import PhonesToolbar from "./PhonesToolbar";

function Products() {
  return (
    <PhoneFilterProvider>
      <PhonesToolbar />
      <PhonesList />
    </PhoneFilterProvider>
  );
}

export default Products;
