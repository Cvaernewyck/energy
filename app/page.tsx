import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero / Contact Info */}
      <header className="bg-green-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          Energie-advies voor KMO & Industrie
        </h1>
        <p className="mt-4">sonny@sd2energy.be | 0472 695 409</p>
      </header>

      {/* Werkwijze */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800">
          Onze Werkwijze
        </h2>
        <p className="mt-4 text-lg">
          Wij begeleiden bedrijven en industriële klanten in hun
          energietransitie. Als erkend partner van Elindus analyseren wij
          energiecontracten, optimaliseren verbruik en volgen alles actief op.
        </p>
      </section>

      {/* Troeven */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-800">
            Onze Troeven
          </h2>
          <ul className="mt-6 list-disc list-inside space-y-3 text-lg">
            <li>Eerste kennismaking</li>
            <li>Analyse van de factuur</li>
            <li>Opvolging en monitoring</li>
          </ul>
        </div>
      </section>

      {/* Over ons */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800">Over ons</h2>
        <p className="mt-4 text-lg">
          Ik ben Sonny Dupont, zelfstandig partner van Elindus met meer dan 12
          jaar ervaring in de energiemarkt. Ik begeleid KMO’s en industriële
          klanten bij het optimaliseren van hun energiecontracten en verbruik.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        2025 SD2 Energy BV
      </footer>
    </div>
  );
}
