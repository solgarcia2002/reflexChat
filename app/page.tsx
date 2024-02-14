import ButtonGradient from './components/buttonGradient'
import Link from "next/link"
export default function Home() {

  return (
    <main className="fixed p-0 h-screen w-screen bg-custom-gradient">
      <video autoPlay={true} loop className="h-screen w-screen" muted>
        <source src='/video-home.mp4' />
      </video>
      <div className="fixed mt-[-30%] flex flex-direction-col">
        <h1 className=" ms-[6%] max-w-[50%] text-5xl text-white uppercase">AI-driven, human-hearted: Train to be the whisper of hope that feels like a hand to hold.</h1>
        <Link href='/chat'><ButtonGradient title='Chat with US now' /></Link>
      </div>
    </main>
  );
}
