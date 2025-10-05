import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-4 sm:py-8 px-4 bg-card border-t border-border mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="w-full sm:w-auto text-center sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Shahrukh Mirza Nawandish.
          <span className="block sm:inline"> All rights reserved.</span>
        </p>
      </div>

      {/* Arrow Button */}
      <a
        href="#hero"
        className="hidden sm:inline-flex mt-2 sm:mt-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors self-center sm:self-auto"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
