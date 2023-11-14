import Saludo from "@/components/Saludo";
import Image from "next/image";
import logo from '../assets/logoHeader-dVb.svg'
import Link from "next/link";
import Header from "@/components/ui/Header";
import Boton from "@/components/ui/Boton";

export const metadata = {
  title: 'Coder App - Página inicio',
  keywords: ['Trabajo Practico', 'next', 'js', 'react']
}

const Home = () => {

  return (
    <main>
      <div className="container m-auto my-10">
        <h1 className="text-2xl font-bold">Maquetado de Pablo Alí</h1>
        <Saludo />
      </div>
    </main>
  )
}

export default Home