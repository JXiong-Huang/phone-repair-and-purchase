import Phone from "./Phone";
import { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { PhoneContext } from "../contexts/PhoneContext";
import { PhoneFilterContext } from "../contexts/PhoneFilterContext";
import { useContext } from "react";

function PhonesList() {
  const {
    phones,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useContext(PhoneContext);

  const { model, searchQuery } = useContext(PhoneFilterContext);
  const filteredPhoneData =
    model === "All Models"
      ? phones.filter(function (phone) {
          return phone.id !== null;
        })
      : phones.filter(function (phone) {
          return phone.id === model.split(" ")[1];
        });

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-dangeer">
        Error:<b>Loading failed</b>
      </div>
    );
  }

  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {filteredPhoneData
          .filter(function (phone) {
            return (
              phone.first.toLowerCase().includes(searchQuery) ||
              phone.last.toLowerCase().includes(searchQuery)
            );
          })
          .map(function (phone) {
            return (
              <Phone
                key={phone.id}
                phone={phone}
                updateRecord={updateRecord}
                insertRecord={insertRecord}
                deleteRecord={deleteRecord}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PhonesList;
