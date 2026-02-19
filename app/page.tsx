import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Expertise from '@/components/sections/Expertise'
import Process from '@/components/sections/Process'
import CTA from '@/components/sections/CTA'
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
          stats={heroData.frontmatter.stats}
        />
      )}

      {featuresData && (
        <Features
          title={featuresData.frontmatter.title}
          subtitle={featuresData.frontmatter.subtitle}
          features={featuresData.frontmatter.features}
        />
      )}

      <Expertise />

      <Process />

      <CTA />
    </>
  )
}
