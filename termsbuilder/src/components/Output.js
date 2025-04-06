export default function Output({ terms, privacy }) {
    return (
      <div className="p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold">Terms of Service</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: terms }} />
        </section>
        <section>
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: privacy }} />
        </section>
      </div>
    );
  }
  