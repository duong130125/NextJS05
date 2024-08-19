import React from "react";

export default function IdUser(props: any) {
  const { params } = props;

  return <div>User id: {params.idUser}</div>;
}
