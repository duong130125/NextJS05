"use client";
import React from "react";

export default function IdProduct(props: any) {
  const { params } = props;
  return <div>Product Id: {params.idProduct}</div>;
}
