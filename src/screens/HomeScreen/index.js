import React, { useState } from "react";
import axios from "axios";

import CompanyCard from "../../components/cards/CompanyCard";
import SearchInput from "./components/SearchInput";
import Spinner from "../../components/Spinner";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [note, setNote] = useState("");
  const onSearch = (value) => {
    setLoading(true);
    axios
      .get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=FR43V4S17Q5WE3IQ`
      )
      .then((res) => {
        console.warn(res?.data);
        setSearchResults(res?.data?.bestMatches || []);
        setNote(res?.data?.Note);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <div className="relative px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <SearchInput onSubmit={onSearch} />
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
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchResults.map((companyDetails, index) => (
                <CompanyCard data={companyDetails} key={index} />
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
