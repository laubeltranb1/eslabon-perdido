import SlideShell from '../components/SlideShell'

export default function Slide01Darwin() {
  return (
    <div className="flex h-full w-full items-center px-6 sm:px-16">
      <SlideShell
        kicker="01 · La base científica"
        title="La teoría de Darwin"
        accent="#2ee6d6"
        subtitle="En 1859, Charles Darwin publicó El origen de las especies, proponiendo que todos los seres vivos descienden de ancestros comunes a través de la selección natural."
      >
        <ul className="mt-2 space-y-3 font-body text-sm sm:text-base text-bone-dim">
          <li className="flex gap-3">
            <span className="font-mono text-atlante">01</span>
            Los individuos de una especie varían entre sí de forma natural.
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-atlante">02</span>
            Quienes tienen rasgos más favorables para su entorno sobreviven y se reproducen más.
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-atlante">03</span>
            Con el tiempo, esas variaciones se acumulan hasta formar nuevas especies.
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-atlante">04</span>
            Todo ser vivo —incluido el humano— comparte un árbol genealógico común.
          </li>
        </ul>
        <p className="mt-6 font-mono text-xs text-bone-dim/70 border-l-2 border-atlante/40 pl-3">
          "No es la especie más fuerte la que sobrevive, sino la que mejor se adapta al cambio."
        </p>
      </SlideShell>
    </div>
  )
}
