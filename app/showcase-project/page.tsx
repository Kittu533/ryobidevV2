"use client";

import ProjectCard, {
  ProjectCardProps,
} from "@/components/showcase-project/project-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiNuxtdotjs,
  SiTypescript,
  SiFirebase,
  SiFastapi,
  SiFlutter,
  SiPhp,
  SiVuedotjs,
} from "react-icons/si";

export default function ShowcaseProject() {
  const projects: ProjectCardProps[] = [
    {
      title: "Jobprep",
      description:
        "Jobprep is a platform designed to help users prepare for job interviews by providing a wide range of resources and tools.",
      image: "/jobprep.webp",
      isFeatured: false,
      techStack: [
        { icon: <SiNuxtdotjs className="text-white" />, name: "Nuxt" },
        {
          icon: <SiTailwindcss className="text-blue-400" />,
          name: "TailwindCSS",
        },
        {
          icon: <SiTypescript className="text-yellow-400" />,
          name: "Typescript",
        },
        { icon: <SiFastapi className="text-blue-500" />, name: "FastAPI" },
      ],
      links: [{ label: "Live Demo", url: "https://jobprep-six.vercel.app/" }],
    },
    {
      title: "Jogfarm",
      description:
        "Jogfarm is a mobile application that helps farmers manage their agricultural activities efficiently, from crop planning to harvest tracking, all in one place.",
      image: "/jogfarm.webp",
      isFeatured: false,
      techStack: [
        { icon: <SiFlutter className="text-blue-500" />, name: "Flutter" },
        { icon: <SiFirebase className="text-blue-500" />, name: "Firebase" },
      ],
      links: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.jogfarm.jogfarmv1&pcampaignid=web_share",
        },
      ],
    },
    {
      title: "Ecommerce Website",
      description:
        "Ecommerce Website adalah platform toko online modern yang dibangun menggunakan Next.js, TypeScript, dan TailwindCSS. Website ini menawarkan pengalaman belanja yang cepat, responsif, dan mudah digunakan, serta menampilkan desain yang clean dan profesional.",
      image: "/Ecoomerce-webdev.png",
      isFeatured: false,
      techStack: [
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        {
          icon: <SiTypescript className="text-blue-400" />,
          name: "TypeScript",
        },
        {
          icon: <SiTailwindcss className="text-blue-400" />,
          name: "TailwindCSS",
        },
      ],
      links: [
        {
          label: "live demo",
          url: "https://play.google.com/store/apps/details?id=com.jogfarm.jogfarmv1&pcampaignid=web_share",
        },
      ],
    },
    {
      title: "Company Profile - Ancatama Citra Abadi",
      description:
        "Company Profile - Ancatama Citra Abadi adalah platform yang dirancang untuk memberikan informasi lengkap tentang perusahaan, termasuk layanan, portofolio, dan kontak. Website ini dibangun menggunakan Next.js, TypeScript, dan TailwindCSS.",
      image: "/ancatamacitraabadi.png",
      isFeatured: false,
      techStack: [
        { icon: <SiPhp className="text-white" />, name: "PHP" },
        { icon: <SiMysql className="text-white" />, name: "MySQL" },
      ],
      links: [{ label: "live demo", url: "https://ancatamacitraabadi.co.id" }],
    },
    {
      title: "SEWALUX - Sewa Barang Elektronik",
      description:
        "SEWALUX adalah website penyewaan barang elektronik yang memudahkan pengguna untuk mencari, memesan, dan mengelola kebutuhan sewa elektronik secara online. Dibangun menggunakan Laravel 11, Filament, dan MySQL, platform ini menawarkan pengalaman pengguna yang modern, aman, dan efisien.",
      image: "/sewalux.webp",
      isFeatured: false,
      techStack: [
        { icon: <SiPhp className="text-white" />, name: "Laravel 11" },
        { icon: <SiPhp className="text-white" />, name: "Filament" },
        { icon: <SiMysql className="text-white" />, name: "MySQL" },
      ],
      links: [],
    },
    {
      title: "SEWA HOTEL - Sewa Kamar Hotel Online",
      description:
        "SEWA HOTEL adalah website penyewaan kamar hotel yang memudahkan pengguna untuk mencari, memesan, dan mengelola kebutuhan akomodasi secara online. Platform ini dibangun menggunakan Laravel 11, Filament, dan MySQL, sehingga menawarkan pengalaman pemesanan hotel yang modern, aman, dan efisien.",
      image: "/booking-hotel.webp",
      isFeatured: false,
      techStack: [
        { icon: <SiPhp className="text-white" />, name: "Laravel 11" },
        { icon: <SiPhp className="text-white" />, name: "Filament" },
        { icon: <SiMysql className="text-white" />, name: "MySQL" },
      ],
      links: [],
    },
    {
      title: "SimplePOS - Point of Sale System",
      description:
        "SimplePOS adalah aplikasi Point of Sale (POS) modern yang memudahkan pengelolaan transaksi penjualan, inventori, dan laporan keuangan secara real-time. Dibangun dengan Vue 3, Pinia untuk state management, TailwindCSS untuk UI yang responsif, dan terintegrasi dengan REST API untuk sinkronisasi data yang cepat dan aman.",
      image: "/simple-pos-vue3.png",
      isFeatured: false,
      techStack: [
        { icon: <SiVuedotjs className="text-green-500" />, name: "Vue 3" },
        { icon: <SiVuedotjs className="text-green-400" />, name: "Pinia" },
        {
          icon: <SiTailwindcss className="text-blue-400" />,
          name: "TailwindCSS",
        }
      ],
      links: [],
    },
  ];

  return (
    <div className="w-full min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Header */}
      <Spotlight />

      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here you can find a collection of my public/open-source projects. Feel
          free to explore and check them out!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-2 bg-orange-600/30 text-orange-300 rounded-lg hover:bg-orange-600/40 transition-colors"
        >
          <FaChevronLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
