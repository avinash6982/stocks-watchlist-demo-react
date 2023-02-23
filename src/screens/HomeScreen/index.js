import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import CompanyCard from "../../components/cards/CompanyCard";
import SearchInput from "./components/SearchInput";
import Spinner from "../../components/Spinner";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getRequest } from "../../api";

const HomeScreen = () => {
  const { items } = useSelector((state) => state.watchlist);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [watchListItemKeys, setWatchListItemKeys] = useState([]);
  const [note, setNote] = useState("");
  const onSearch = (value) => {
    setLoading(true);
    // getRequest()
    axios
      .get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=FR43V4S17Q5WE3IQ`
      )
      .then((res) => {
        setSearchResults(res?.data?.bestMatches || []);
        setNote(res?.data?.Note);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (items && items.length > 0) {
      let newKeys = items.map((item) => item["1. symbol"]);
      setWatchListItemKeys(newKeys);
    }
  }, [items]);

  const debouncedResults = useMemo(() => {
    return debounce(onSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <main>
      <div className="relative px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <SearchInput onSubmit={debouncedResults} />
          </div>
        </div>
        {loading ? (
          <div className="mx-auto max-w-2xl">
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <Spinner />
            </div>
          </div>
        ) : (
          <div className="px-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchResults.map((companyDetails, index) => (
                <CompanyCard
                  isHomeScreen
                  data={companyDetails}
                  key={index}
                  inWatchlist={
                    watchListItemKeys.includes(companyDetails["1. symbol"]) ||
                    false
                  }
                />
              ))}
            </div>
          </div>
        )}
        <div className="mx-auto max-w-2xl">
          <div className="sm:mb-8 sm:flex sm:justify-center">{note}</div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
