export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-muted-foreground flex justify-between">
        <p>&copy; {new Date().getFullYear()} Hiruy Tiku</p>
        
         <a href="mailto:Hiruytikue@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          Hiruytikue@gmail.com
        </a>
      </div>
    </footer>
  );
}