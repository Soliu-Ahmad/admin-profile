import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <Image src='/tezos-Lh3HAnw8RtU-unsplash.jpg' width={100} height={120} />
                </div>

                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/admin"><a>AdminPage</a></Link>
            </nav>

        </>
    );
}

export default Navbar;