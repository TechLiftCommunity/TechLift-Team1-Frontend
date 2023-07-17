import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "James Nelson",
      description:
        " If you have been looking for a platform to grow your career for many years, people that will point out your errors and give you reasons to learn and improve, join Techlift",
      icon: require("./Media/quote.svg"),
      image: require("./Media/Ellipse.png"),
    },
    {
      title: "Bolujoko Great",
      description:
        " Met great mentors who added nuggets to my knowledge. Got connected to industrious people, Tech lift helped me to become an overall better person, in and outside the job.",
      icon: require("./Media/quote.svg"),
      image: require("./Media/Ellipse.png"),
    },
    {
      title: "Esther Funmi",
      description:
        " Since joining this community, I have had the chance of working on projects with brilliant minds. This has afforded me the opportunity to learn the importance of working with a team",
      icon: require("./Media/quote.svg"),
      image: require("./Media/Ellipse.png"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons ">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">
            <HiChevronLeft
              size={30}
              className="text-fcPrimary border rounded-full h-10 w-10 md:h-12 md:w-12 bg-fcWhite"
            />
          </span>{" "}
        </button>
        {/* <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div> */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">
            <HiChevronRight
              size={30}
              className="text-fcPrimary border rounded-full h-10 w-10 md:h-12 md:w-12 bg-fcWhite"
            />
          </span>
        </button>
      </div>
    </div>
  );
};
