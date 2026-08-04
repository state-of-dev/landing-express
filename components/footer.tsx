import { product } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 md:px-12 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="min-w-0">
          <h2 className="font-sans text-2xl font-light tracking-tight text-white sm:text-3xl">Hardcoded Studio</h2>
          <p className="mt-2 max-w-xl font-mono text-xs leading-6 text-muted-foreground sm:mt-3 sm:text-sm">
            Landing profesional por {product.priceLabel}, {product.taxLabel}.
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-between border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block md:border-0 md:pt-0 md:text-right md:text-xs">
          <p>CDMX</p>
          <p className="md:mt-2">{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
