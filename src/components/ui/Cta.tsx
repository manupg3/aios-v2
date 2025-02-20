"use client"
import { useState, FormEvent } from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "../Button";
import { Input } from "../Input";

export default function Cta() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [solution, setSolution] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setAnimate(true);
      setTimeout(() => {
        setStep(2);
        setAnimate(false);
      }, 300); // Duration should match the CSS transition duration
    } else {
      // Handle final form submission
      console.log("Email:", email);
      console.log("Solution:", solution);
    }
  };

  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto mb-20 mt-32 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute -z-10 select-none opacity-70"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-indigo-500/20 ring-1 ring-black/5 dark:shadow-indigo-500/20 dark:ring-white/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
              >
                ¿Listo para empezar?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg dark:text-gray-400">
                <Balancer>
                  Llevemos tu negocio al próximo nivel integrando nuestras
                  Soluciones.
                </Balancer>
              </p>
            </div>
            <div className="mt-14 w-full rounded-[16px] bg-gray-300/5 p-1.5 ring-1 ring-black/[3%] backdrop-blur dark:bg-gray-900/10 dark:ring-white/[3%]">
              <div className="rounded-xl bg-white p-4 shadow-lg shadow-indigo-500/10 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-500/10 dark:ring-white/5">
                <form
                  className={`flex flex-col items-center gap-3 sm:flex-row transition-opacity duration-300 ${animate ? 'opacity-0' : 'opacity-100'}`}
                  onSubmit={handleSubmit}
                  style={{ height: animate ? '0' : 'auto' }}
                >
                  {step === 1 ? (
                    <>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        id="email"
                        className="h-10 w-full min-w-0 flex-auto"
                        inputClassName="h-full"
                        placeholder="Tu Mejor Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        className="h-10 w-full sm:w-fit sm:flex-none"
                        type="submit"
                        variant="primary"
                      >
                        Siguiente
                      </Button>
                    </>
                  ) : (
                    <>
                      <label htmlFor="solution" className="sr-only">
                        Solución
                      </label>
                      <select
                        name="solution"
                        id="solution"
                        className="h-10 w-full min-w-0 flex-auto rounded border border-gray-300 px-3 py-2 text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Selecciona una solución
                        </option>
                        <option value="solution1">Solución 1</option>
                        <option value="solution2">Solución 2</option>
                        <option value="solution3">Solución 3</option>
                      </select>
                      <Button
                        className="h-10 w-full sm:w-fit sm:flex-none"
                        type="submit"
                        variant="primary"
                      >
                        Empezar Ahora
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              ¿No estás seguro cuál elegir?{" "}
              <a
                href="/soluciones"
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              >
                Mirar soluciones
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
