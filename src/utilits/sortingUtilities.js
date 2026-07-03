export const sortTickets = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort(
        (a, b) => Number(b.priority) - Number(a.priority),
      );
    case "Low to High":
      return [...tickets].sort(
        (a, b) => Number(a.priority) - Number(b.priority),
      );

    default:
      return tickets;
  }
};
