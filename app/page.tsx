export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          🛡️ RGPD Compliance SaaS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Conformité RGPD en 30 minutes pour PME/TPE
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
          Démarrer gratuitement
        </button>
      </div>
    </div>
  );
}