import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ProjectsSection() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-8 text-[#FE7F2D]">Projects</h2>
      <p className="text-muted-foreground mb-12">
        A selection of things I&apos;ve built.
      </p>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            {project.techStack.length > 0 && (
              <CardContent className="flex gap-2 flex-wrap">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}