import HeroSection from "./components/HeroSection";
import imagePath from "./img/prism.png";

const text = {
  title: "Well crafted abstract images", 
  description: "High quality abstract images for your projects, wallpaper and presentations.", 
  imagePath
}

export default function App() {
  return (
    <HeroSection text={text}/>
  )
}