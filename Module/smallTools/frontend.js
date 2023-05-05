const queryBuilder = (data, fromStart = true) => {
  let query = "";
  if (fromStart) query += "?";
  for (const [key, value] of Object.entries(data)) {
    if (query === "?") query += `${key}=${value}`;
    else query += `&${key}=${value}`;
  }

  return query;
};
