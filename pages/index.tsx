import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image 
        src='https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={500}
        height={500}
        alt=''
      />
    </>
  );
}
