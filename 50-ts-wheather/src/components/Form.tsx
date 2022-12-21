import React, { ChangeEvent } from 'react';
interface Props {
  getWeather: (city: string) => void;
}
const Form = ({ getWeather }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    getWeather(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" placeholder="City" />
      <button type="submit">Get weather</button>
    </form>
  );
};

export default Form;
