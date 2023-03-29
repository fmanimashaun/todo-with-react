import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    message: '',
    carBrand: '',
    isCheck: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox'
      ? e.target.checked : e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <h1>React Form Handling</h1>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
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
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            defaultValue={user.message}
          />
        </label>
        <label htmlFor="carBrand">
          Car Brand:
          <select
            name="carBrand"
            id="carBrand"
            value={user.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Select a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label htmlFor="isCheck">
          <input
            type="checkbox"
            name="isCheck"
            id="isCheck"
            checked={user.isCheck}
            onChange={handleChange}
          />
          Check me
        </label>
        <label htmlFor="gender">
          Male:
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={user.gender === 'male'}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gender">
          Female:
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={user.gender === 'female'}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="50"
            value={user.price}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h5>
        Name:
        {user.firstName}
        <span> </span>
        {user.lastName}
      </h5>
      <p>
        Message:
        {user.message}
      </p>
      <h5>
        Favorite car brand:
        {user.carBrand}
      </h5>
      <h5>
        Is it checked? :
        {user.isCheck ? 'Yes' : 'No'}
      </h5>
      <h5>
        Gender :
        {user.gender}
      </h5>
      <h5>
        Price : $
        {user.price}
      </h5>
    </>
  );
};

export default Form;
