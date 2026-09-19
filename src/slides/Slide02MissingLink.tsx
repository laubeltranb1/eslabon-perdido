import SlideShell from '../components/SlideShell'

export default function Slide02MissingLink() {
  return (
    <div className="flex h-full w-full items-center px-6 sm:px-16">
      <SlideShell
        kicker="02 · La grieta en el registro fósil"
        title="¿Qué es el eslabón perdido?"
        accent="#8b5cf6"
        subtitle='Se le llama "eslabón perdido" al fósil transicional hipotético que conectaría a nuestros ancestros primates con el género Homo — una pieza que, según la cultura popular, nunca terminó de aparecer.'
      >
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div className="rounded-lg border border-bone-dim/15 bg-void-900/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest-plus text-atlante mb-2">
              Lo que dice la ciencia
            </p>
            <p className="font-body text-sm text-bone-dim leading-relaxed">
              En realidad existen numerosos fósiles transicionales — Australopithecus,
              Homo habilis, Homo erectus — que documentan el cambio gradual. El
              "vacío" es más mediático que real.
            </p>
          </div>
          <div className="rounded-lg border border-cosmic/30 bg-cosmic/5 p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest-plus text-cosmic mb-2">
              Lo que dice la teoría conspirativa
            </p>
            <p className="font-body text-sm text-bone-dim leading-relaxed">
              Para los teóricos alternativos, ese vacío no es casualidad: es la
              evidencia oculta de una intervención externa que aceleró el salto
              evolutivo de nuestros ancestros.
            </p>
          </div>
        </div>
      </SlideShell>
    </div>
  )
}
