/* ============================================================
   model portfolio — interactions
   - sticky nav state
   - mobile menu
   - lightbox gallery (keyboard + swipe)
   - reveal-on-scroll
   ============================================================ */
(function () {
  "use strict";

  /* ---------- sticky nav ---------- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (window.scrollY > window.innerHeight * 0.7) nav.classList.add("solid");
    else nav.classList.remove("solid");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("show");
      toggle.classList.toggle("x");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("show");
        toggle.classList.remove("x");
      }
    });
  }

  /* ---------- lightbox ---------- */
  var shots = Array.prototype.slice.call(document.querySelectorAll(".shot"));
  var lb = document.querySelector(".lb");
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector(".lb__cap");
  var idx = 0;

  function srcFull(shot) {
    var img = shot.querySelector("img");
    return { src: img.getAttribute("src"), alt: img.getAttribute("alt") };
  }
  function show(i) {
    idx = (i + shots.length) % shots.length;
    var d = srcFull(shots[idx]);
    lbImg.src = d.src;
    lbImg.alt = d.alt;
    lbCap.textContent = (idx + 1).toString().padStart(2, "0") + " / " +
      shots.length.toString().padStart(2, "0") + "  —  " + d.alt;
  }
  function open(i) {
    show(i);
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  shots.forEach(function (s, i) {
    s.addEventListener("click", function () { open(i); });
  });
  lb.querySelector(".lb__close").addEventListener("click", close);
  lb.querySelector(".lb__prev").addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
  lb.querySelector(".lb__next").addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
  /* swipe */
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.style.opacity = 1; en.target.style.transform = "none"; io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(22px)";
      el.style.transition = "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";
      io.observe(el);
    });
  }

  /* ---------- year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
