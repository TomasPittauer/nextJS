import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Vítejte v aplikaci pro správu her!</h1>
            <p>Tato aplikace vám umožní spravovat seznam her.</p>
            <Link href="/games">
                Dashboard
            </Link>
        </div>
    );
}
