import Card from '@/components/ui/Card'

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface FeaturesProps {
  title?: string
  features: Feature[]
}

export default function Features({ title, features }: FeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated">
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
