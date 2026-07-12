import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const techBadges = ["Next.js", "React", "Flutter", "Python", "C++", "Go"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="max-w-4xl mx-auto px-6 py-32 min-h-[80vh] flex flex-col md:flex-row-reverse items-center gap-12 justify-center"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, #FE7F2D, transparent, transparent, #FE7F2D)",
            animationDuration: "4s",
          }}
        />
        <div className="absolute inset-[6px] rounded-full overflow-hidden bg-background">
          <Image
            src="/profile.jpg"
            alt="Hiruy Tiku"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div>
        <p className="text-sm text-muted-foreground font-mono mb-2">
          HELLO, I&apos;M
        </p>
        <h1 className="text-4xl font-semibold mb-4">Hiruy Tiku</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Software engineering student &amp; full-stack developer
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
          Building practical software for real-world problems, from
          restaurant ordering systems to queue management systems.
        </p>
        <div className="flex gap-2 flex-wrap">
          {techBadges.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}