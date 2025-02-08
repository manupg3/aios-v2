import {
    RiNotificationFill,
    RiWifiLine,
    RiArrowDownLine,
  } from '@remixicon/react';
  
  export default function BadgeSolutions(){

    return (
      <>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-red-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            Solicion simple
            <span className="h-5 w-px bg-red-400" />
            <a href="#" className="inline-flex items-center gap-1.5">
              Updates
              <RiArrowDownLine className="size-4" aria-hidden={true} />
            </a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiWifiLine className="size-4" aria-hidden={true} />
              Solucion Empresarial
            </span>
            <span className="h-5 w-px bg-emerald-400" />
            <a href="#">Edit</a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-[#000] px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiArrowDownLine className="size-4" aria-hidden={true} />
              
            </span>
            <span className="h-5 w-px bg-tremor-brand-subtle" />
            <a href="#" className="inline-flex items-center gap-1.5">
              Solucion E-Commerce
              <RiArrowDownLine className="size-4" aria-hidden={true} />
            </a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-[#000] px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiNotificationFill className="size-4" aria-hidden={true} />
              
            </span>
            <span className="h-5 w-px bg-tremor-brand-subtle" />
            <a href="#" className="inline-flex items-center gap-1.5">
              Mantenimiento Integral
              <RiArrowDownLine className="size-4" aria-hidden={true} />
            </a>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-tremor-default bg-[#000] px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted">
            <span className="inline-flex items-center gap-1.5">
              <RiNotificationFill className="size-4" aria-hidden={true} />
              
            </span>
            <span className="h-5 w-px bg-tremor-brand-subtle" />
            <a href="#" className="inline-flex items-center gap-1.5">
              Solucion IA
              <RiArrowDownLine className="size-4" aria-hidden={true} />
            </a>
          </span>
        </div>
      </>
    );
  }