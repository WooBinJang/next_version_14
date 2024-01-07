import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}
const photoDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>userId : {id}</h1>
      <h1>photoId : {photoId}</h1>
    </div>
  );
};

export default photoDetailPage;
