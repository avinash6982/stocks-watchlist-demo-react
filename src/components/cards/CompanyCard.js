import React, { useState } from "react";
import {
  BsBookmarkCheck,
  BsBookmarkDash,
  BsBookmarkPlus,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "../Buttons";
import { addToWatchlist, removeFromWatchlist } from "../../redux/watchlist";
import Spinner from "../Spinner";

const CompanyCard = (props) => {
  const dispatch = useDispatch();
  const [itemAdded, setItemAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const addWatch = () => {
    dispatch(addToWatchlist(props?.data));
    if (props?.isHomeScreen) setItemAdded(true);
  };

  const removeWatch = () => {
    dispatch(removeFromWatchlist(props?.data["1. symbol"]));
  };

  return (
    <div className="rounded overflow-hidden bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props?.data["1. symbol"]}</div>
        <p className="text-gray-700 text-base">{props?.data["2. name"]}</p>
        <p className="text-gray-700 text-base">{props?.data["3. type"]}</p>
        <p className="text-gray-700 text-base">{props?.data["4. region"]}</p>
      </div>
      <div className="p-6 flex flex-row-reverse">
        {props?.isHomeScreen && itemAdded ? (
          <PrimaryButton
            icon={<BsBookmarkCheck size={20} />}
            inverted
            containerStyle="bg-green-600 px-3.5 py-2.5 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          />
        ) : loading ? (
          <PrimaryButton
            inverted
            containerStyle="bg-green-600 px-3.5 py-2.5 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            icon={<Spinner />}
          />
        ) : (
          <PrimaryButton
            onClick={() => (!props.inWatchlist ? addWatch() : removeWatch())}
            inverted
            containerStyle={
              !props.inWatchlist
                ? "bg-blue-600 px-3.5 py-2.5 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                : "bg-red-600 px-3.5 py-2.5 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            }
            icon={
              !props.inWatchlist ? (
                <BsBookmarkPlus size={20} />
              ) : (
                <BsBookmarkDash size={20} />
              )
            }
          />
        )}
      </div>
    </div>
  );
};
export default CompanyCard;
