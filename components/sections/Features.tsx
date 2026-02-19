import Card from '@/components/ui/Card'

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

export default function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="container relative z-10">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-xl text-light-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="glass" className="group">
              {feature.icon && (
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-light-100">{feature.title}</h3>
              <p className="text-light-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
