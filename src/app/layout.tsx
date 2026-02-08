import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadim - AWS Cloud Engineer | Terraform, Docker, Kubernetes Expert",
  description: "AWS Cloud Engineer specializing in scalable, secure & cost-optimized cloud infrastructure. Expert in Terraform, Docker, Kubernetes, and serverless architectures. Building production-ready cloud solutions.",
  keywords: [
    "AWS Cloud Engineer",
    "Cloud Infrastructure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "DevOps Engineer",
    "AWS Solutions Architect",
    "Serverless Architecture",
    "CloudFormation",
    "CI/CD Pipeline",
    "AWS Lambda",
    "Infrastructure as Code",
    "Cloud Security",
    "Cost Optimization",
    "Multi-AZ Deployment"
  ],
  authors: [{ name: "Nadim" }],
  creator: "Nadim",
  publisher: "Nadim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nadim.in',
    siteName: 'Nadim - AWS Cloud Engineer Portfolio',
    title: 'Nadim - AWS Cloud Engineer | Terraform, Docker, Kubernetes Expert',
    description: 'AWS Cloud Engineer specializing in scalable, secure & cost-optimized cloud infrastructure. Expert in Terraform, Docker, Kubernetes, and serverless architectures.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nadim - AWS Cloud Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadim - AWS Cloud Engineer | Terraform, Docker, Kubernetes Expert',
    description: 'AWS Cloud Engineer specializing in scalable, secure & cost-optimized cloud infrastructure.',
    images: ['/og-image.png'],
    creator: '@yourusername',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://nadim.in',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nadim",
    "jobTitle": "AWS Cloud Engineer",
    "description": "AWS Cloud Engineer specializing in scalable, secure & cost-optimized cloud infrastructure",
    "url": "https://nadim.in",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourprofile"
    ],
    "knowsAbout": [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "DevOps",
      "Cloud Infrastructure"
    ],
    "email": "contact@nadim.in"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
