import React from "react";

import CompanyCard from "../../components/cards/CompanyCard";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.watchlist);

  return (
    <main>
      <div className="relative px-6 py-5 lg:px-8">
        <div className="px-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((companyDetails, index) => (
              <CompanyCard
                data={companyDetails}
                key={index}
                inWatchlist={true}
              />
            ))}
          </div>
        </div>
        {!items ||
          (items.length < 1 && (
            <>
              <div className="mx-auto max-w-2xl">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  No items on watchlist, search and add stocks to the watchlist.
                </div>
              </div>
              <div className="mx-auto max-w-2xl">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <PrimaryButton
                    title="Go to homescreen"
                    onClick={() => navigate("/")}
                  />
                </div>
              </div>
            </>
          ))}
      </div>
    </main>
  );
};

export default Watchlist;
