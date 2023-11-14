import Link from "next/link"




const ProductosLayout = ({children}) => {

    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
                <Link href={"/productos/all"}>Todos</Link>
                <Link href={"/productos/auriculares"}>Auriculares</Link>
                <Link href={"/productos/tablets"}>Tablets</Link>
                <Link href={"/productos/heladeras"}>Heladeras</Link>
            </nav>

            {children}
        </div>
    )
}

export default ProductosLayout