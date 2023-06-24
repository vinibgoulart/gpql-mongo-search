import { buildMongoConditionsFromFilters } from "@entria/graphql-mongo-helpers";

export const getPipeline = (filters, context, filterMapping) => {
  if (!filters) {
    return null;
  }

  if (!filterMapping) {
    return null;
  }

  const filterResults = buildMongoConditionsFromFilters(
    context,
    filters,
    filterMapping
  );

  return [
    {
      $match: {
        ...filterResults.conditions,
      },
    },
    ...filterResults.pipeline,
  ];
};
