import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PhoneContext } from "../contexts/PhoneContext";
import PhoneAdd from "./PhoneAdd";
// import Spinner from "../Spinner";
// import PageNotFound from "../PageNotFound";

function Detail() {
  const { phones } = useContext(PhoneContext);
  const { id } = useParams();

  const phone = phones.find((i) => i.id === id);
  const { first, last, features, price } = phone;
  const { size, camera, battery, cpu } = features;

  // if (loading) return <Spinner />;
  // if (!product) return <PageNotFound />;
  // if (error) throw error;

  return (
    <>
      <div className="detail-row ml-4 mt-4 padT4 padB4 padL2">
        <div className="twentyfive-col padL-4">
          <img
            src={`/images/${first}${last}.webp`}
            alt={`${first} ${last}`}
            width={200}
            height={250}
          />
        </div>
        <div className="thirtyfive-col mt-4">
          <h3>
            {first} {last}
          </h3>
          <p className="mt-2">Price: ${price}</p>
          <p>
            <span>Financing supported for this model.</span>
            <br />
            <span>
              Click <a href="">here</a> to learn more...
            </span>
          </p>
        </div>
        <div className="twenty-col mt-4">
          <p>Size: {size}</p>
          <p>Camera: {camera}</p>
          <p>Battery: {battery}</p>
          <p>CPU: {cpu}</p>
        </div>
      </div>
      <div>
        <PhoneAdd phone={phone} />
      </div>
    </>
  );
}

export default Detail;
