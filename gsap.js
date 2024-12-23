// Animasi untuk teks hitam (muncul dari kiri)
gsap.from("#subheading", {
  x: -200, // Teks hitam muncul dari kiri
  opacity: 0, // Awalnya tidak terlihat
  duration: 1, // Durasi animasi
  ease: "power4.out", // Easing untuk animasi halus
});

// Animasi untuk teks hitam bagian kedua (muncul dari kiri)
gsap.from("#heading", {
  x: -200, // Teks hitam muncul dari kiri
  opacity: 0, // Awalnya tidak terlihat
  duration: 1, // Durasi animasi
  delay: 0.5, // Sedikit tunda agar teks subheading selesai dulu
  ease: "power4.out", // Easing untuk animasi halus
});

// Animasi untuk teks ungu (muncul dari kanan)
gsap.from("#heading .text-pri", {
  x: 200, // Teks ungu muncul dari kanan
  opacity: 0, // Awalnya tidak terlihat
  stagger: 0.2, // Teks ungu muncul satu per satu
  duration: 0.5, // Durasi masing-masing animasi
  delay: 1.2, // Tunda sedikit setelah teks hitam muncul
  ease: "power4.out", // Animasi halus
});

// Animasi untuk gambar
gsap.fromTo(
  "#home img",
  {
    y: 200, // Gambar dimulai dari bawah
    scale: 1.5, // Gambar lebih besar di awal
    opacity: 0, // Gambar tidak terlihat
  },
  {
    y: 0, // Gambar kembali ke posisi normal
    scale: 1, // Gambar mengecil ke ukuran normal
    opacity: 1, // Gambar menjadi terlihat
    duration: 1, // Durasi animasi
    delay: 1.5, // Tunda setelah teks selesai muncul
    ease: "power4.out", // Animasi halus
  }
);

// Animasi untuk pembungkus tombol dan ikon media sosial
gsap.fromTo(
  "#home .flex.items-center",
  {
    y: 50, // Dimulai dari bawah
    opacity: 0, // Tidak terlihat
  },
  {
    y: 0, // Kembali ke posisi semula
    opacity: 1, // Menjadi terlihat
    duration: 1, // Durasi animasi
    delay: 2.3, // Mulai setelah gambar selesai
    ease: "power4.out", // Easing untuk animasi halus
  }
);



gsap.registerPlugin(ScrollTrigger);

const animationProjects = document.querySelectorAll(".animation-projects");

animationProjects.forEach((project, index) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project, // Setiap elemen sebagai pemicu
      start: "top 90%", // Animasi dimulai saat elemen 80% dari viewport
      end: "top 10%", // Animasi selesai saat elemen mencapai 20% dari viewport
      toggleActions: "play none none none", // Muncul saat scroll ke bawah, hilang saat scroll ke atas
    },
    opacity: 0, // Awalnya tidak terlihat
    y: 100, // Dimulai dari bawah
    duration: 1, // Durasi animasi
    ease: "power4.out", // Animasi halus
    delay: index * 0.2, // Stagger manual untuk elemen berurutan
  });
});



gsap.registerPlugin(ScrollTrigger);

// Animasi bagian About Me
gsap.from("#about .flex-wrap > div", {
  scrollTrigger: {
    trigger: "#about", // Elemen yang memicu animasi
    start: "top 30%", // Dimulai saat elemen 80% masuk viewport
    end: "top 5%", // Selesai saat elemen mencapai 20% viewport
    toggleActions: "play none none none", // Animasi hanya dimainkan sekali
  },
  opacity: 0, // Awalnya tidak terlihat
  y: 100, // Dimulai dengan posisi sedikit di bawah
  duration: 1.2, // Durasi animasi
  ease: "power4.out", // Efek animasi halus
  stagger: 0.5, // Penundaan antar elemen untuk efek bertahap
});



gsap.registerPlugin(ScrollTrigger);

// Animasi untuk teks dan deskripsi
gsap.from("#contact h4, #contact h5, #contact p", {
  scrollTrigger: {
    trigger: "#contact", // Elemen yang memicu animasi
    start: "top 30%", // Animasi dimulai saat elemen mencapai 80% viewport
    end: "top 5%", // Selesai saat elemen mencapai 20% viewport
    toggleActions: "play none none none", // Animasi hanya dimainkan sekali
  },
  opacity: 0, // Awalnya tidak terlihat
  x: -100, // Masuk dari kiri
  duration: 1, // Durasi animasi
  ease: "power4.out", // Efek animasi halus
  stagger: 0.3, // Penundaan antara elemen
});

// Animasi untuk ikon dan informasi kontak
gsap.from("#contact .space-y-6 > div", {
  scrollTrigger: {
    trigger: "#contact", // Elemen yang memicu animasi
    start: "top 30%", // Animasi dimulai saat elemen mencapai 80% viewport
    end: "top 5%", // Selesai saat elemen mencapai 20% viewport
    toggleActions: "play none none none", // Animasi hanya dimainkan sekali
  },
  opacity: 0, // Awalnya tidak terlihat
  x: -100, // Masuk dari kiri
  duration: 1, // Durasi animasi
  delay: 1,
  ease: "power4.out", // Efek animasi halus
  stagger: 0.2, // Penundaan antara elemen
});

// Animasi untuk form
gsap.from("#contact form", {
  scrollTrigger: {
    trigger: "#contact", // Elemen yang memicu animasi
    start: "top 30%", // Animasi dimulai saat elemen mencapai 80% viewport
    end: "top 5%", // Selesai saat elemen mencapai 20% viewport
    toggleActions: "play none none none", // Animasi hanya dimainkan sekali
  },
  opacity: 0, // Awalnya tidak terlihat
  x: 100, // Masuk dari kanan
  duration: 1, // Durasi animasi
  delay: 1.5,
  ease: "power4.out", // Efek animasi halus
});
