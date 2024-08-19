import React from "react";

export default function IdProject(props: any) {
  const { params } = props;

  return <div>trang chi tiết dự án có id: {params.idProject}</div>;
}
