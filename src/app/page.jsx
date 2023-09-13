import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoTeammate from '@/images/clients/teammate/logo-light.svg'
import logoTeammateDark from '@/images/clients/teammate/logo-dark.svg'
import logoBroadsoft from '@/images/clients/broadsoft/logo-light.svg'
import logoCocaCola from '@/images/clients/cocacola/logo-light.svg'
import logoMailerlite from '@/images/clients/mailerlite/logo-light.svg'
import logoKurmi from '@/images/clients/kurmi/logo-light.svg'
import logoGlance from '@/images/clients/glance/logo-light.svg'
import logoCisco from '@/images/clients/cisco/logo-light.svg'
import logoEzymigrate from '@/images/clients/ezymigrate/logo-light.svg'
import imageLaptop from '@/images/laptop.webp'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Broadsoft', logoBroadsoft],
  ['Teammate', logoTeammate],
  ['Kurmi', logoKurmi],
  ['Cisco', logoCisco],
  ['Glance', logoGlance],
  ['Mailerlite', logoMailerlite],
  ['Coca Cola', logoCocaCola],
  ['Ezymigrate', logoEzymigrate],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with loads of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing Cloud for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe cloud is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We specialise in helping startups, established businesses, and companies in crisis to launch, scale, and secure their software in the cloud while optimizing costs
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                // sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Startups"><br />
            - Consulting on infrastructure design and implementation <br />
            - Platform and technology recommendations<br />
            - Bootstrapping and setting up your cloud infrastructure<br />
            - Cloud cost optimization strategies<br />
            - Software development and architecture guidance<br />
            - Offshore staff augmentation for development teams.
            </ListItem>
            <ListItem title="Established businesses"><br />
            - Cloud optimization consulting <br />
            - Migration strategy and implementation <br />
            - Best-practice solutions for improved performance <br />
            - Cloud cost optimization services <br />
            - Software development and performance optimization <br />
            - Staff augmentation for technology teams <br />

            </ListItem>
            <ListItem title="Companies in crisis"><br />
            - Swift hands-on response to urgent issues<br />
            - Comprehensive troubleshooting and recovery<br />
            - Long-term strategies to prevent future crises, including cost optimization<br />
            - Expert software development support and guidance<br />
            - Rapid staff augmentation for critical projects<br />

            </ListItem>
            <ListItem title="Businesses concerned about security"><br />
            - Security assessments and recommendations <br />
            - Penetration testing and vulnerability analysis <br />
            - Robust security solutions for your stack and application <br />
            - Secure software development practices <br />
            - Skilled staff augmentation for security projects <br />
            - Cloud cost optimization for security investments <br />

            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a company working at the intersection of cloud technology and customized solutions',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Leading Cloud Partner for Your Business Growth.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are working at the intersection of cloud technology and customized solutions. It’s a really busy intersection though — a lot of our
            us have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Teammate', logo: logoTeammateDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
