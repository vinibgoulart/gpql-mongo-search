import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";
import { FilterMapping } from "@entria/graphql-mongo-helpers/lib/types";
import { escapeRegex } from "../../utils/escapeRegex";

export const productFilterMapping: FilterMapping<string> = {
  search: {
    type: FILTER_CONDITION_TYPE.CUSTOM_CONDITION,
    format: (value: string) => {
      if (value) {
        const safeSearch = escapeRegex(value.trim());
        const searchRegex = new RegExp(`${safeSearch}`, "ig");

        const pipeline = {
          $or: [
            {
              name: {
                $regex: searchRegex,
              },
            },
            {
              description: {
                $regex: searchRegex,
              },
            },
          ],
        };

        return pipeline;
      }

      return {};
    },
  },
};
