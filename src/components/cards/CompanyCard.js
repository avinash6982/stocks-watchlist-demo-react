import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";

import { PrimaryButton } from "../Buttons";

const CompanyCard = (data) => {
  return (
    <div class="rounded overflow-hidden bg-white shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data?.data["1. symbol"]}</div>
        <p class="text-gray-700 text-base">{data?.data["2. name"]}</p>
        <p class="text-gray-700 text-base">{data?.data["3. type"]}</p>
        <p class="text-gray-700 text-base">{data?.data["4. region"]}</p>
      </div>
      <div class="p-6 flex flex-row-reverse">
        <PrimaryButton
          inverted
          containerStyle="bg-green-600 px-3.5 py-2.5 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          icon={<BsBookmarkPlus size={20} />}
        />
      </div>
    </div>
  );
};
export default CompanyCard;
