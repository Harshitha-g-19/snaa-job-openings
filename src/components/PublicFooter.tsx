const PublicFooter = () => {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SNAA Business Processing Center Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
