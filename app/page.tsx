import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import { getMDXBySlug } from '@/lib/mdx'

export default async function HomePage() {
  const heroData = await getMDXBySlug('homepage', 'hero')
  const featuresData = await getMDXBySlug('homepage', 'features')

  return (
    <>
      {heroData && (
        <Hero
          headline={heroData.frontmatter.title}
          subheadline={heroData.frontmatter.subheadline}
          primaryCta={heroData.frontmatter.primaryCta}
          secondaryCta={heroData.frontmatter.secondaryCta}
        />
      )}

      {featuresData && (
        <Features
          title={featuresData.frontmatter.title}
          features={featuresData.frontmatter.features}
        />
      )}
    </>
  )
}
