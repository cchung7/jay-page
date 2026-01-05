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
  title: "Jay Chung | Profile",
  description: "A personal portfolio.",
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