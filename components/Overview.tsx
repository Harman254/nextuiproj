
export default function Overview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px] text-foreground mx-auto text-lg">
                Our features are designed to check the Weather for you as you focus on your productivity.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
