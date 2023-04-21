import React from "react";

export default function Pay() {
  return (
    <form method="POST" action="/api/pay">
      <input type="submit" value="Pay" />
    </form>
  );
}
