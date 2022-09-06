import { useEffect } from "react";
import { getSales } from "../api/sales";
import { useDispatch } from "react-redux";
import { fetch } from "../store/reducers";

function useFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    getSales().then((sales) => {
      dispatch(fetch(sales));
    });
  }, []);
}

export default useFetch;
