import SlideShell from "../components/SlideShell";

export default function Slide05Hybrid() {
  return (
    <div className="flex h-full w-full items-center px-6 sm:px-16">
      <SlideShell
        kicker="05 · La hipótesis final"
        title="La teoría del cruce"
        accent="#c4b5fd"
        subtitle="El planteamiento central de esta corriente conspirativa: una raza estelar habría intervenido en el ADN de un homínido ancestral, empalmando información genética para 'despertar' la conciencia humana."
      >
        <div className="space-y-3 mt-2">
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-cosmic shrink-0" />
            <p className="font-body text-sm text-bone-dim">
              Tablillas sumerias describirían a los{" "}
              <span className="text-cosmic">Anunnaki</span> creando al "Homo
              sapiens primitivo" mezclando su esencia con la de un homínido
              terrestre.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-atlante shrink-0" />
            <p className="font-body text-sm text-bone-dim">
              El súbito aumento en la capacidad craneal del Homo sapiens, sin
              una transición fósil "completa", alimenta la sospecha de un salto
              artificial.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-leonine shrink-0" />
            <p className="font-body text-sm text-bone-dim">
              El eslabón perdido, entonces, no sería un fósil por descubrir —
              sino la prueba oculta de un injerto genético hace más de 200,000
              años.
            </p>
          </div>
        </div>
      </SlideShell>
    </div>
  );
}
