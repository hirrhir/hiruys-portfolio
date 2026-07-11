import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-2">Contact</h2>
      <p className="text-muted-foreground mb-12">
        Have a project in mind or just want to say hi? Reach out.
      </p>

      <form className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border border-border rounded-md px-3 py-2 bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-border rounded-md px-3 py-2 bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="border border-border rounded-md px-3 py-2 bg-transparent"
          />
        </div>
        <Button type="submit" className="w-fit">
          Send
        </Button>
      </form>
    </section>
  );
}