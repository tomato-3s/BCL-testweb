export default function InfoPanel() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border border-zinc-200 h-fit">
      <div className="space-y-8">
        <section>
          <h3 className="font-bold text-xl text-zinc-800 mb-3">File Requirements</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Preferred formats: STEP, DXF, or PDFs. Please scale vectors 1:1.
            For laser cutting, please specify process by color and convert text to vectors.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-xl text-zinc-800 mb-3">How We Quote</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Quotes are based on processing time and turnaround time. We need finalized files for accurate quotes.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-xl text-zinc-800 mb-3">Design Services</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Need help with design? We offer design services by the hour. Let us know your requirements for a quote.
          </p>
        </section>
      </div>
    </div>
  );
}