export default function AboutSection() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-8">About</h2>
      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a 3rd-year software engineering student at Addis Ababa
          University, currently interning at Tilla Health.
        </p>
        <p>
          I work across both web and mobile development — building with
          React and Next.js on the frontend, and Flutter for mobile.
        </p>
        <p>
          I&apos;m motivated by building software that solves real,
          practical problems — from streamlining order management to
          simplifying access to public services.
        </p>
      </div>
    </section>
  );
}