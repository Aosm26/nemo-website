export default function Home() {
  return (
    <div className="text-center py-20">
      {/* Başlık ve Açıklama */}
      <h1 className="text-5xl font-bold text-primary">Learn Languages with Nemo</h1>
      <p className="text-lg text-secondary mt-4">Fast, fun, and effective way to learn languages</p>

      {/* Get Started Butonu */}
      <a href="#features" className="mt-6 inline-block bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary transition">
        Get Started
      </a>

      {/* Features Bölümü */}
      <section id="features" className="py-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-primary mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard title="Multiple Languages" desc="Learn from over 20+ languages worldwide." />
          <FeatureCard title="Smart Learning" desc="AI-powered lessons that adapt to you." />
          <FeatureCard title="Community Support" desc="Join learners from all around the world." />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
