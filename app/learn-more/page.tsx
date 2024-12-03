import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Learn More About VITB MUN</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Model United Nations?</h2>
          <p className="mb-4">Model United Nations, also known as Model UN or MUN, is an educational simulation and academic activity in which students can learn about diplomacy, international relations, and the United Nations. Participants in Model UN conferences, known as delegates, are placed in committees and assigned countries to represent, or occasionally other organizations or political figures, where they represent members of that body. They are presented with their assignments in advance, along with a topic or topics that their committee will discuss. Delegates conduct research before conferences and formulate positions that they will then debate with their fellow delegates in the committee, staying true to the actual position of the member they are representing.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Participating in MUN</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Develop public speaking and debate skills</li>
            <li>Enhance research and writing abilities</li>
            <li>Improve critical thinking and problem-solving skills</li>
            <li>Gain knowledge about international affairs and global issues</li>
            <li>Network with students from diverse backgrounds</li>
            <li>Build confidence and leadership skills</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">VITB MUN Club Activities</h2>
          <p className="mb-4">Our club organizes various activities throughout the year, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Weekly meetings and practice sessions</li>
            <li>Workshops on public speaking, research, and diplomacy</li>
            <li>Intra-college MUN conferences</li>
            <li>Participation in national and international MUN conferences</li>
            <li>Guest lectures by diplomats and international relations experts</li>
          </ul>
        </section>
        <div className="mt-8">
          <Link href="/join-us">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Join Us Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

