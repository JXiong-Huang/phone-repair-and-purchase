import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [localData, setLocalData] = useState(initialData); //to store updated newRecords immediately in case that
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING); //previous update would be override by the folloing update
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        // throw "";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = localData.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });
    setLocalData(newRecords);

    async function delayFunction() {
      try {
        setData(newRecords);
        // throw "";
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
      } catch (e) {
        console.log("error thrown in delayFunction", e);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = localData.filter((rec) => {
      return rec.id != record.id;
    });
    setLocalData(newRecords);

    async function delayFunction() {
      try {
        setData(newRecords);
        // throw "";
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
      } catch (e) {
        console.log("error thrown in delayFunction", e);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = [record, ...localData];
    setLocalData(newRecords);

    async function delayFunction() {
      try {
        setData(newRecords);
        // throw "";
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
      } catch (e) {
        console.log("error thrown in delayFunction", e);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
}

export default useRequestDelay;
