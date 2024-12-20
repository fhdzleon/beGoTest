"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useOrderStore from "@/store/orderStore";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const { filterOrders, filteredOrders } = useOrderStore();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    filterOrders(value);
  };

  return (
    <>
      <div className="max-w-md w-full flex mt-9 border-b-2 pb-3 border-[#2c2c2c]  ">
        <img src="/search.svg" alt="find" />
        <input
          className="w-full px-4 bg-bgBody outline-none text-textColor"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {filteredOrders.length === 0 && search && (
        <p className="text-gray-500 mt-3">No se encontraron resultados</p>
      )}
    </>
  );
};

export default SearchBar;
