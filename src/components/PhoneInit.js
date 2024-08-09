import { PhoneProvider } from "../contexts/PhoneContext";
import useRequestDelay from "../hooks/useRequestDelay";
import { data } from "../PhoneData";

function PhoneInit({ children }) {
  const {
    data: phones,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestDelay(500, data);
  return (
    <PhoneProvider
      phones={phones}
      requestStatus={requestStatus}
      error={error}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      {children}
    </PhoneProvider>
  );
}
export default PhoneInit;
