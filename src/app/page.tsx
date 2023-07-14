import Image from 'next/image'
import Hero from './views/Hero'
import ProductList from './views/ProductList'
import ImageBackground from './views/ImageBackground'
import { aboutMeData, pages } from './data/data'

export default function Home() {
  return (
    <div>
      <Hero/>
    </div>
      )
}
