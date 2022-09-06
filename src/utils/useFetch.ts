import { useEffect, useState } from "react";
import { getSales } from "../api/sales";
import { useDispatch } from "react-redux";
import { fetch } from "../store/reducers";

function useFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("adf");
    getSales().then((sales) => {
      console.log("useEffect");
      dispatch(fetch(sales));
    });
    return () => {
      console.log("return");
    };
  }, []);
}

export default useFetch;
