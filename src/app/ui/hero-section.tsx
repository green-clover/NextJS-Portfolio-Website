"use client"
import Image from 'next/image'
import { developer } from '../lib/placeholder-data'

export default function HeroSection() {

  const { name, summary, about } = developer
  return (
    <div className="h-[85vh] py-16 flex flex-col justify-center text-center">
      <Image
        src="/profile.jpg"
        width={100}
        height={100}
        className="m-auto rounded-full"
        alt="Picture of the author"
      />
      <h1 className='pt-5 text-4xl font-extrabold tracking-[.1em]'>{name}</h1>
      <p className='max-w-2xl m-auto py-5 text-slate-300'>{summary} <br /> {about}</p>
      <div>
        ddddddddd<br />
        ddddddddd<br />
        ddddddddd<br />
        ddddddddd<br />
        ddddddddd<br />
      </div>
    </div>
  )
}
