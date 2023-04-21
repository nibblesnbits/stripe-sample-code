import React from "react";

export default function Success({ session_id }) {
  return <p>success for session {session_id}</p>;
}

export async function getServerSideProps(context) {
  const { session_id } = context.query;

  return {
    props: {
      session_id,
    },
  };
}
