import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Projects Completed",
    "Authored In-Depth Course on Educative",
    "Competetive Programmer",
    "Student at IIT Kanpur",
    "Pro React Web Developer",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
