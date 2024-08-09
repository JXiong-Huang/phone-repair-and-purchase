import { useState, useContext } from "react";
import PhoneAdd from "./PhoneAdd";
import { PhoneFilterContext } from "../contexts/PhoneFilterContext";

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}

function PhoneImage({ phone }) {
  const { id, first, last } = phone;

  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <a href={`/detail/${id}`}>
        <ImageWithFallback
          className="contain-fit"
          src={`/images/iphone${id}.webp`}
          width="220"
          height="330"
          alt={`${first} ${last}`}
        />
      </a>
    </div>
  );
}

function PhoneDescription({ description }) {
  const { showDescription } = useContext(PhoneFilterContext);
  return showDescription ? (
    <p className="card-description">{description}</p>
  ) : null;
}

function PhoneFavorite({ phone, updateRecord }) {
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    setInTransition(false);
  }
  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          updateRecord({ ...phone, favorite: !phone.favorite }, doneCallback);
        }}
      >
        <i
          className={
            phone.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function PhoneDemographics({ phone, updateRecord }) {
  const { first, last, description, company, twitterHandle } = phone;

  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <PhoneFavorite phone={phone} updateRecord={updateRecord} />
      <div>
        <div className="social d-flex flex-row mt-4 mb-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
        <PhoneDescription description={description} />
      </div>
    </div>
  );
}

function Phone({ phone, updateRecord }) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card card-height p-4 mt-4">
        <PhoneImage phone={phone} />
        <PhoneDemographics phone={phone} updateRecord={updateRecord} />
      </div>
      <PhoneAdd phone={phone} />
    </div>
  );
}

export default Phone;
