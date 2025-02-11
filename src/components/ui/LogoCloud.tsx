export default function LogoCloud() {
  return (
    <section
      id="logo-cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-32"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg font-medium tracking-tighter text-gray-800 dark:text-gray-200">
         Usando un amplio stack tecnologico
      </p>
      <div className="container-imgs-stack grid grid-cols-2 gap-10 gap-y-4 text-gray-900 md:grid-cols-5 md:gap-x-20 dark:text-gray-200">
        <img 
          src="/images/wordpress-logo.svg" 
          alt="wordpress" 
          className="h-auto"
        />
        <img 
          src="/images/shopify-logo.svg" 
          alt="shopify" 
          className="h-auto"
        />
        <img 
          src="/images/react-logo.svg" 
          alt="Capsule" 
          className="h-auto"
        />
        <img 
          src="/images/openai-logo.svg" 
          alt="Catalog" 
          className="h-auto"
        />
        <img 
          src="/images/nextjs-logo.svg" 
          alt="Cloudwatch" 
          className="h-auto"
        />
        
      </div>
    </section>
  )
}