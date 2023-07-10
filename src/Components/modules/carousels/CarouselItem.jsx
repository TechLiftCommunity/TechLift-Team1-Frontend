import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item shadow" style={{ width: width }}>
      <div className="px-6">
        <img className="carousel-img" src={item.icon.default} />
        <div className="flex items-center gap-4 pt-8 ">
          <img className="carousel-image" src={item.image} />
          <div className="font-extrabold text-2xl text-black font-SpaceGrotesk">{item.title}</div>
        </div>

        <div className="carousel-item-text font-SpaceGrotesk text-fcBlack ">
          {item.description}
        </div>
      </div>
    </div>
  );
};
