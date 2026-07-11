import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Express", "Prisma", "PostgreSQL", "Socket.io", "Next.js"],
  },
  {
    label: "Tools",
    skills: ["Git", "Vercel", "Render"],
  },
  {
    label: "Currently learning",
    skills: ["Django", "Go"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-sm text-muted-foreground font-mono mb-3">
              {group.label.toUpperCase()}
            </p>
            <div className="flex gap-2 flex-wrap">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
