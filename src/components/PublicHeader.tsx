import { Link } from "react-router-dom";

const PublicHeader = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/snaa-logo.jpg"
            alt="SNAA Business Processing Centre"
            className="h-16 w-16 object-contain rounded"
          />
          <div>
            <h1 className="font-heading text-lg font-bold text-foreground leading-tight">
              SNAA Business Processing Center
            </h1>
            <p className="text-xs text-muted-foreground">Pvt. Ltd.</p>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;