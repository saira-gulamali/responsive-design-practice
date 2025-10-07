import React from "react";

const FeatureItem = (props) => {
  const { image, title, description } = props;

  return (
    <div className=" max-w-[350px]">
      <img className="w-[150px]" src={image} />
      <h1 className="text-violet-900 text-2xl font-medium">{title}</h1>
      <div className="text-zinc-500 textxl ">{description}</div>
    </div>
  );
};

export default FeatureItem;
