import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import PhoneMockup from '@/components/sections/PhoneMockup'
import FeaturedApps from '@/components/sections/FeaturedApps'
import Testimonials from '@/components/sections/Testimonials'
import AppStoreCTA from '@/components/sections/AppStoreCTA'
import CTA from '@/components/sections/CTA'
import { getMDXBySlug } from '@/lib/mdx'

export default async function HomePage() {
  const heroData = await getMDXBySlug('homepage', 'hero')
  const featuresData = await getMDXBySlug('homepage', 'features')
  const showcaseData = await getMDXBySlug('homepage', 'showcase')
  const testimonialsData = await getMDXBySlug('homepage', 'testimonials')
  const portfolioData = await getMDXBySlug('portfolio', 'portfolio')

  return (
    <>
      {/* Hero Section */}
      {heroData && (
        <Hero
          headline={heroData.frontmatter.title}
          subheadline={heroData.frontmatter.subheadline}
          primaryCta={heroData.frontmatter.primaryCta}
          secondaryCta={heroData.frontmatter.secondaryCta}
          stats={heroData.frontmatter.stats}
        />
      )}

      {/* Phone Mockup Showcase */}
      {showcaseData && (
        <PhoneMockup
          title={showcaseData.frontmatter.title}
          subtitle={showcaseData.frontmatter.subtitle}
          phoneImage={showcaseData.frontmatter.phoneImage}
          stats={showcaseData.frontmatter.stats}
        />
      )}

      {/* Featured Apps */}
      {portfolioData && (
        <FeaturedApps
          title="Our Apps"
          subtitle="Beautifully crafted mobile experiences for everyday life"
          apps={portfolioData.frontmatter.products.map((product: any) => ({
            title: product.title,
            description: product.description,
            category: product.category,
            image: product.image,
            link: product.link,
            rating: product.rating,
            downloads: product.downloads,
            features: product.technologies
          }))}
        />
      )}

      {/* Features */}
      {featuresData && (
        <Features
          title={featuresData.frontmatter.title}
          subtitle={featuresData.frontmatter.subtitle}
          features={featuresData.frontmatter.features}
        />
      )}

      {/* Testimonials */}
      {testimonialsData && (
        <Testimonials
          title={testimonialsData.frontmatter.title}
          subtitle={testimonialsData.frontmatter.subtitle}
          testimonials={testimonialsData.frontmatter.testimonials}
        />
      )}

      {/* App Store CTA */}
      <AppStoreCTA
        title="Ready to Get Started?"
        subtitle="Download our apps today and discover a better way to learn and connect."
      />

      {/* Final CTA */}
      <CTA
        title="Have Questions?"
        subtitle="We'd love to hear from you. Reach out to learn more about our apps."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
