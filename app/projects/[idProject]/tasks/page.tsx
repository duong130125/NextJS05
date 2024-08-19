import React from "react";

export default function Task(props: any) {
  const { params } = props;

  return <div>danh sách nhiệm vụ của dự án có id: {params.idProject}</div>;
}
