import React from "react"; 

type Props = {
  text: Text
};
type Text = {
  [category: string] : string
}; 

export default function HeroSection({text}: Props) {
  const {title, description, imagePath} = text; 

  return (
    <div className="container">
      <div className="section-hero">
        <div className="hero-message">
          <div className="text">
            <div className="title font-semibold text-4xl md:text-5xl lg:text-6xl text-neutral-900">{title}</div>
            <div className="description font-normal text-lg md:text-xl text-neutral-600">{description}</div>
          </div>
          <div className="buttons-row">
            <button className="group flex justify-center items-center gap-1.5 grow bg-white hover:bg-neutral-50 focus:bg-neutral-50 px-5 py-3 disabled:bg-neutral-100 rounded border-[0.5px] border-solid border-neutral-200 disabled:border-0">
              <span className="font-medium text-base text-neutral-900 group-disabled:text-neutral-400">Learn more</span>
            </button>
            <button id="see-pricing" className="group flex justify-center items-center gap-1.5 grow bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 px-5 py-3 rounded">
              <span className="font-medium text-base text-white group-disabled:text-neutral-400">See pricing</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={imagePath}></img>
        </div>
      </div>
    </div>
  )
}