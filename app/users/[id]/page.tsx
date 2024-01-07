import React from "react";

interface Props {
  params: {
    id: number;
  };
}
const userDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1>userId : {id}</h1>
    </div>
  );
};

export default userDetailPage;
