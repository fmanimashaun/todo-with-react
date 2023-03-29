import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    message: '',
    carBrand: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];
  let id = 0;
  const carBrandOptions = carBrands.map((carBrand) => {
    id += 1;
    return (
      <option value={carBrand} key={id}>
        {carBrand}
      </option>
    );
  });
  return (
    <>
      <h1>React Form Handling</h1>
      <form action="#" method="#">
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="lasttName">
          Last Name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            defaultValue={user.message}
          />
        </label>
        <br />
        <label htmlFor="carBrand">
          Car Brand:
          <select
            name="carBrand"
            id="carBrand"
            value={user.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>--Select a car brand--</option>
            {carBrandOptions}
          </select>
        </label>
      </form>
      <h5>
        Name:
        {user.firstName}
        {user.lastName}
        <br />
        Message:
        {user.message}
      </h5>
    </>
  );
};

export default Form;
