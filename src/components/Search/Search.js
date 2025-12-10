import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../../api/OpenWeatherService";
import { components } from "react-select";

const CustomOption = (props) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={`https://flagcdn.com/24x18/${data.country.toLowerCase()}.png`}
          alt={data.country}
          width="24"
          height="18"
          style={{ borderRadius: "3px" }}
        />
        <span>{data.label}</span>
      </div>
    </components.Option>
  );
};


const CustomSingleValue = (props) => {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={`https://flagcdn.com/24x18/${data.country.toLowerCase()}.png`}
          alt={data.country}
          width="24"
          height="18"
          style={{ borderRadius: "3px" }}
        />
        <span>{data.label}</span>
      </div>
    </components.SingleValue>
  );
};

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const result = await fetchCities(inputValue);

    return {
      options: result.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.country}`,
        country: city.country,
      })),
    };
  };

  const onChangeHandler = (selectedOption) => {
    setSearchValue(selectedOption);
    onSearchChange(selectedOption);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue,
      }}
    />
  );
};

export default Search;
