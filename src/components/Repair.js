function Repair() {
  return (
    <form action="/confirm" method="GET">
      <div name="book" className="m-4">
        <h2> {`> > Let's book your fix now`}</h2>
      </div>
      <div name="title" className="m-4">
        <p>
          <span className="m-2">Title : </span>
          <label className="m-2">
            <input type="radio" name="title" value="Mr" /> Mr
          </label>
          <label className="m-2">
            <input type="radio" name="title" value="Mrs" /> Mrs
          </label>
          <label className="m-2">
            <input type="radio" name="title" value="Miss" /> Miss
          </label>
          <label className="m-2">
            <input type="radio" name="title" value="other" /> Other
          </label>
        </p>
      </div>
      <div name="name" className="detail-row">
        <div name="firstname" className="ml-4 twenty-col">
          <p>
            <label className="m-2" for="firstName">
              <span>Frist name : </span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              maxlength="20"
              required
            />
          </p>
        </div>
        <div name="lastname" className="ml-4 twenty-col">
          <p>
            <label className="m-2" for="lastName">
              <span>Last name : </span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              maxlength="20"
              required
            />
          </p>
        </div>
      </div>
      <div name="email" className="m-4 ">
        <p>
          <label className="m-2" for="email">
            <span>Email address : </span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="@gmail.com"
          />
        </p>
      </div>
      <div name="mobilephone" className="m-4 ">
        <p>
          <label className="m-2" for="mobilephone">
            <span>Mobile phone : </span>
          </label>
          <input
            type="tel"
            name="mobilephone"
            id="mobilephone"
            // pattern="\(\+61\) \d{3}-\d{3}-\d{3}"
            placeholder="(+61) 123-456-789"
            required
          />
        </p>
      </div>
      <br />
      <div name="fix" className="m-4 ">
        <h3>{`> > Where and when do you prefer to get your device fixed`}</h3>
      </div>
      <div name="address" className="detail-row ">
        <div className="m-2 ml-4 twentyfive-col">
          <p>
            <label className="m-2" for="street">
              <span>Street address : </span>
            </label>
            <input type="text" name="street" id="street" required />
          </p>
        </div>
        <div className="m-2 ml-4 twenty-col">
          <p>
            <label className="m-2" for="suburb">
              <span>Suburb : </span>
            </label>
            <input type="text" name="suburb" id="suburb" required />
          </p>
        </div>
        <div className="m-2 ml-4 ten-col">
          <p>
            <label className="m-2" for="state">
              <span>State : </span>
            </label>
            <select id="state" name="state">
              <option value="state">State</option>
              <option value="act">ACT</option>
              <option value="nsw">NSW</option>
              <option value="nt">NT</option>
              <option value="qld">QLD</option>
              <option value="sa">SA</option>
              <option value="tas">TAS</option>
              <option value="vic">VIC</option>
              <option value="wa">WA</option>
            </select>
          </p>
        </div>
        <div className="m-2 ml-4 twenty-col">
          <p>
            <label className="m-2" for="postcode">
              <span>Postcode : </span>
            </label>
            <input type="text" name="postcode" id="postcode" required />
          </p>
        </div>
      </div>
      <div name="schdule" className="detail-row">
        <div className="m-2 ml-4 ten-col">
          <p>
            <label className="m-2" for="time">
              <span>Time : </span>
            </label>
            <input type="time" name="time" id="time" required />
          </p>
        </div>
        <div className="m-2 ml-4 twentyfive-col">
          <p>
            <label className="m-2" for="date">
              <span>Date : </span>
            </label>
            <input type="date" name="date" id="date" required />
          </p>
        </div>
      </div>
      <br />
      <div name="issue" className="m-4">
        <h3>{`> > Describe the issue of your device below`}</h3>
      </div>
      <div name="model" className="m-4 ">
        <p>
          <label className="m-2" for="model">
            <span>Device model : </span>
          </label>
          <input type="text" name="model" id="model" required />
        </p>
      </div>
      <div name="problem" className="m-4 ">
        <p>
          <label className="m-2" for="problem">
            <span>Failure part : </span>
          </label>
          <input type="text" name="problem" id="problem" required />
        </p>
      </div>
      <div name="description" className="m-4 ">
        <textarea
          name="description"
          cols="80"
          rows="8"
          placeholder="input the faulty of your device here"
        ></textarea>
      </div>
      <div name="submit" className="m-4">
        <p>
          <input type="submit" value="Submit" />
        </p>
      </div>
    </form>
  );
}
export default Repair;
