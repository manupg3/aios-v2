import {
    RiArrowDownLine,
    RiCheckLine
  } from '@remixicon/react';
  
  export default function BadgeSolutions(){

    return (
      <>
        <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              Solucion Simple
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#"><RiArrowDownLine className="size-4" aria-hidden={true} /></a>
          </span>
           <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              Solucion Empresarial
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#"><RiArrowDownLine className="size-4" aria-hidden={true} /></a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              Solucion Ecommerce
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#"><RiArrowDownLine className="size-4" aria-hidden={true} /></a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              Mantenimiento Integral
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#"><RiArrowDownLine className="size-4" aria-hidden={true} /></a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              Solucion IA
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#"><RiArrowDownLine className="size-4" aria-hidden={true} /></a>
          </span>
        </div>
      </>
    );
  }