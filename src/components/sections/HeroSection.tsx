import { Badge } from "@/components/ui/badge";

const techBadges = ["Next.js", "React", "Flutter", "Python", "C++", "Go"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="max-w-3xl mx-auto px-6 py-32 min-h-[80vh] flex flex-col justify-center"
    >
      <p className="text-sm text-muted-foreground font-mono mb-2">
        HELLO, I&apos;M
      </p>
      <h1 className="text-4xl font-semibold mb-4">Hiruy Tiku</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Software engineering student &amp; full-stack developer
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
        Building practical software for real-world problems, from restaurant
        ordering systems to queue management systems.
      </p>
      <div className="flex gap-2 flex-wrap">
        {techBadges.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}