// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/components/navbar";
// import { Github, Twitter, Linkedin } from "lucide-react";
// import { ThemeProvider } from "@/components/theme-provider";
// import { CartProvider } from "@/lib/cart-context";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Frisco Fighter | Professional Profile & Shop",
//   description: "A sophisticated personal portfolio and digital marketplace.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} min-h-screen bg-background text-foreground scroll-smooth`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <CartProvider>
//             <div className="relative flex min-h-screen flex-col">
//               <Navbar />
//               <Toaster position="top-right" richColors />
//               <main className="flex-1">{children}</main>
//             </div>
//             <footer className="w-full bg-primary text-primary-foreground py-24 px-6 border-t border-white/5">
//               <div className="container max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
//                 <div className="flex flex-col items-center gap-4">
//                   <div className="h-10 w-10 bg-accent rounded-xl flex items-center justify-center font-black text-white text-xs">FF</div>
//                   <h4 className="font-heading font-black text-2xl tracking-tighter uppercase italic">Frisco <span className="opacity-40">Fighter.</span></h4>
//                 </div>

//                 <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
//                   <a href="#about" className="hover:text-accent transition-colors">About</a>
//                   <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
//                   <a href="/shop" className="hover:text-accent transition-colors">Shop</a>
//                   <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
//                 </nav>

//                 <div className="flex gap-6">
//                   <a href="#" title="GitHub Repository" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Github className="h-4 w-4" /></a>
//                   <a href="#" title="Twitter Profile" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Twitter className="h-4 w-4" /></a>
//                   <a href="#" title="LinkedIn Profile" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Linkedin className="h-4 w-4" /></a>
//                 </div>

//                 <div className="space-y-2">
//                   <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest whitespace-nowrap">
//                     Built with ❤️ by Architectural Digital Suite.
//                   </p>
//                   <p className="text-[9px] font-medium text-white/20 uppercase tracking-widest">
//                     © {new Date().getFullYear()} Frisco Fighter. All rights reserved.
//                   </p>
//                 </div>
//               </div>
//             </footer>
//           </CartProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/lib/cart-context";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frisco Fighter | Professional Profile & Shop",
  description: "A sophisticated personal portfolio and digital marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-background text-foreground scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {/* Added 'relative' position for scroll tracking */}
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <Toaster position="top-right" richColors />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}