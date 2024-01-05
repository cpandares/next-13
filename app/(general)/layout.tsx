import { NavBar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex  flex-col items-center p-24">
        <h1>Hello Root Layout Root Name</h1>
          {children}
      </div>
    </>
  );
}