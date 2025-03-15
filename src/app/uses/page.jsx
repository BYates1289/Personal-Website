import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'My Toolkit: Tools That Power My Workflow.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Toolkit: Tools That Power My Workflow."
      intro="Explore the tools and products that power my work and creativity. Each plays a vital role in streamlining my workflow and enhancing productivity. From hardware to software, these are the essential components of my toolkit."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="AMD Ryzen 7 3700X / 32GB RAM / NVIDIA GeForce RTX 2060">
            Despite being a few years old, this machine still crushes anything I throw at it. From handling demanding applications to tackling intensive tasks, it proves its worth time and time again. A powerhouse that continues to deliver.
          </Tool>
          <Tool title="2 x 27 inch SR350 Full HD Monitor With Bezel-Less Display">
          With sharp visuals and a sleek, bezel-less design, these provide a seamless experience. Perfect for multitasking, they excel in both performance and clarity, enhancing productivity and entertainment alike.
          </Tool>
          <Tool title="Logitech K780 Keyboard / M720 Triathlon Mouse">
          Ergonomically crafted and highly dependable, these seamlessly integrate into my setup. They offer precision, comfort, and efficiency, making daily tasks effortless and improving overall productivity.
          </Tool>
          <Tool title="Beats Studio Pro">
          Delivering exceptional sound quality with rich tones and deep bass, these are perfect for work, relaxation, or creative projects. Comfortable for extended use, they elevate my listening experience and fit seamlessly into my professional and personal setup.
          </Tool>
          <Tool title="Boulies Master Chair">
          Built with ergonomic precision, this chair provides exceptional comfort and support. Its sleek design and adjustable features ensure it integrates seamlessly into my workspace, enhancing both productivity and overall well-being.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="Visual Studio Code">
          An essential part of my workflow, this versatile code editor provides an intuitive interface and extensive customisation options. With its powerful features and seamless integrations, it enhances productivity and makes tackling complex projects more efficient. An indispensable tool in my setup.
          </Tool>
          <Tool title="Vercel">
          A powerful platform for modern web development, this tool streamlines the process of building, deploying, and scaling web applications. With seamless integrations and a focus on performance, it enhances productivity and ensures a smooth development workflow. An essential resource in my toolkit.
          </Tool>
          <Tool title="Tailwind CSS">
          I use Tailwind CSS for its efficiency and flexibility, allowing me to quickly build custom, responsive designs without writing extensive CSS. It’s an essential tool for creating modern and polished web projects.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Balsamiq">
          I use Balsamiq to quickly create wireframes and mockups for my projects. Its intuitive interface helps me visualise ideas and plan layouts effectively, streamlining the design process and ensuring clarity in my workflows.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Microsoft Planner">
          I use Microsoft Planner to stay organised and manage tasks efficiently. Its intuitive interface helps me track progress, prioritise work, and collaborate seamlessly, making it an integral part of my productivity toolkit.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
