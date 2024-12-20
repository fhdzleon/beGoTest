/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from "react";
import formatDate from "@/helpers/formatDate";
import formatTime from "@/helpers/formatTime";
import useOrderStore from "@/store/orderStore";

const OrderCard = () => {
  const { filteredOrders, setOrders, setError } = useOrderStore();

  /*  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null); */

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Error en la solicitud de datos");
        }
        const data = await response.json();
        setOrders(data.result);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchOrders();
  }, [setOrders, setError]);

  return (
    <div className="max-w-md w-full flex mt-9 flex-col">
      {filteredOrders.map((order) => (
        <div className="flex flex-col mb-9 text-textColor " key={order._id}>
          <p className="text-[17px] mb-3 font-thin">
            <span className="text-[#969798] mr-2 text-[17px]">Order</span>#
            {order.order_number}
          </p>
          <div className="border-2 rounded-3xl pt-3 ">
            <div className="px-5">
              <div className="flex">
                <img src={`${order.type}.svg`} alt={`icono ${order.type}`} />
                <p className="ml-3">{order.type}</p>
              </div>
              <div className="border-b-2 my-5 border-[#2c2c2c]"></div>

              <div>
                <div>
                  <p className="text-[8px] text-textGray">PICKUP</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[15px]">
                    {order.destinations[0].address
                      .split(",")[2]
                      .trim()
                      .split(" ")
                      .slice(1)
                      .join(" ")}
                  </p>
                  <p className="text-textGray text-[11px]">
                    {formatDate(order.destinations[0].start_date)}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-textGray">
                    {order.destinations[0].address.split(",")[0].trim()}
                  </p>
                  <p className="  text-[12px]">
                    {formatTime(order.destinations[0].start_date)}
                  </p>
                </div>
              </div>

              {/* Segunda Seccion */}
              <div className="mt-6">
                <div>
                  <p className="text-[8px] text-textGray">DROPOFF</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[15px]">
                    {order.destinations[1].address
                      .split(",")[2]
                      .trim()
                      .split(" ")
                      .slice(1)
                      .join(" ")}
                  </p>
                  <p className="text-textGray text-[11px]">
                    {formatDate(order.destinations[1].start_date)}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-textGray">
                    {order.destinations[1].address.split(",")[0].trim()}
                  </p>
                  <p className="  text-[12px]">
                    {formatTime(order.destinations[1].start_date)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-9 "></div>
            <button className="w-[130px] h-[45px] text-black font-semibold text-[15px] justify-center items-center flex rounded-tl-3xl rounded-bl-3xl rounded-br-3xl bg-button ml-auto">
              Resume
              <img className="mx-2" src="/eye.svg" alt="resume" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
