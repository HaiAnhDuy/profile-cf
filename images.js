// DOM Elements
const navLinks = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".nav-button");
const logoContainer = document.querySelector(".logo-container");

// Mobile Menu Elements
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Mobile Menu Toggle Functionality
if (mobileMenuToggle && mobileSidebar) {
  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileSidebar.classList.toggle("active");
    document.body.style.overflow = mobileSidebar.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close sidebar when clicking overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close sidebar when clicking nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close sidebar on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileSidebar.classList.contains("active")) {
      mobileMenuToggle.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Add smooth scrolling for mobile navigation links
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Handle navigation based on link text
    const linkText = this.textContent.trim();

    // Only prevent default for internal scrolling, not external navigation
    if (linkText === "GIỚI THIỆU" || linkText === "THỰC ĐƠN") {
      // Don't prevent default - let browser handle the navigation to index.html
    }

    // Add active state
    mobileNavLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    switch (linkText) {
      case "TRANG CHỦ":
        window.location.href = "index.html";
        break;

      case "GIỚI THIỆU":
        window.location.href = "index.html#about-section";
        break;

      case "THỰC ĐƠN":
        window.location.href =
          "https://www.canva.com/design/DAGnB59DUGE/BE8lxMJkZKrU-YQXcEHylQ/view?utm_content=DAGnB59DUGE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2d1a61597c";
        break;

      // case "THƯ VIỆN":
      //   window.location.href = "image.html";
      //   break;

      case "LIÊN HỆ":
        window.location.href = "contact.html";
        break;

      default:
        console.log(`Mobile navigation clicked: ${linkText}`);
    }
  });
});

// Add smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Handle navigation based on link text
    const linkText = this.textContent.trim();

    // Only prevent default for internal scrolling, not external navigation
    if (linkText === "GIỚI THIỆU" || linkText === "THỰC ĐƠN") {
      // Don't prevent default - let browser handle the navigation to index.html
    }

    // Add active state
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    // Add ripple effect
    createRipple(this, e);

    switch (linkText) {
      case "TRANG CHỦ":
        // Navigate to home page
        window.location.href = "index.html";
        break;

      case "GIỚI THIỆU":
        // Navigate to index.html and scroll to about section
        window.location.href = "index.html#about-section";
        break;

      case "THỰC ĐƠN":
        // Navigate to index.html and scroll to products section
        window.location.href =
          "https://www.canva.com/design/DAGnB59DUGE/BE8lxMJkZKrU-YQXcEHylQ/view?utm_content=DAGnB59DUGE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2d1a61597c";
        break;

      // case "THƯ VIỆN":
      //   // Navigate to image gallery page
      //   window.location.href = "image.html";
      //   break;

      case "LIÊN HỆ":
        // Navigate to contact page
        window.location.href = "contact.html";
        break;

      default:
        console.log(`Navigation clicked: ${linkText}`);
    }
  });
});

// Mobile Navigation Button
const mobileNavButton = document.querySelector(".mobile-nav-button");
if (mobileNavButton) {
  mobileNavButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Close sidebar
    mobileMenuToggle.classList.remove("active");
    mobileSidebar.classList.remove("active");
    document.body.style.overflow = "";

    // Scroll to products section for ordering
    const productsSection = document.querySelector(".products-section");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// Add click effects to buttons
if (navButton) {
  navButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Add ripple effect
    createRipple(this, e);

    // Add button click animation
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);

    console.log("Order button clicked");
    // Scroll to products section for ordering
    const productsSection = document.querySelector(".products-section");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// Add logo hover effect
if (logoContainer) {
  logoContainer.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });

  logoContainer.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}

// Create ripple effect function
function createRipple(element, event) {
  const ripple = document.createElement("div");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .nav-link, .nav-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #e8c1c1;
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #e8c1c1;
        border-radius: 1px;
    }
`;
document.head.appendChild(style);

// Add parallax effect to hero background
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero-background");
  const speed = scrolled * 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

// Add fade-in animation for hero content
function addFadeInAnimation() {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";
    heroContent.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 300);
  }
}

// Initialize animations when page loads
window.addEventListener("load", function () {
  addFadeInAnimation();

  // Set active navigation based on current page
  setActiveNavigation();

  // Initialize sticky header with scroll effect
  initStickyHeader();
});

// Sticky Header with Scroll Effect
function initStickyHeader() {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
  });
}

// Function to set active navigation based on current page
function setActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Remove active class from all nav links
  const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  allNavLinks.forEach((link) => link.classList.remove("active"));

  // Set active based on current page
  if (currentPage === "image.html") {
    // Set "THƯ VIỆN" as active
    const galleryLinks = document.querySelectorAll('a[href="image.html"]');
    galleryLinks.forEach((link) => {
      if (link.textContent.trim() === "THƯ VIỆN") {
        link.classList.add("active");
      }
    });
  } else if (currentPage === "contact.html") {
    // Set "LIÊN HỆ" as active
    const contactLinks = document.querySelectorAll('a[href="contact.html"]');
    contactLinks.forEach((link) => {
      if (link.textContent.trim() === "LIÊN HỆ") {
        link.classList.add("active");
      }
    });
  } else if (currentPage === "index.html" || currentPage === "") {
    // Set "TRANG CHỦ" as active
    const homeLinks = document.querySelectorAll('a[href="index.html"]');
    homeLinks.forEach((link) => {
      if (link.textContent.trim() === "TRANG CHỦ") {
        link.classList.add("active");
      }
    });
  }
}

// Add typing effect for hero title
function addTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    heroTitle.style.borderRight = "3px solid #f5e8d7";

    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          heroTitle.style.borderRight = "none";
        }, 500);
      }
    }, 100);
  }
}

// Uncomment the line below if you want typing effect
// setTimeout(addTypingEffect, 800);

// Additional functionality for new sections
document.addEventListener("DOMContentLoaded", function () {
  // Product cards interaction
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productName = this.querySelector(".product-name").textContent;
      console.log("Product selected:", productName);
      // Add product selection functionality
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Animate sections
  const sectionsToAnimate = document.querySelectorAll(
    ".about-section, .products-section, .space-section"
  );
  sectionsToAnimate.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });

  // Animate product cards with stagger effect
  const productCardsForAnimation = document.querySelectorAll(".product-card");
  productCardsForAnimation.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // About button and Space button functionality
  const aboutButton = document.querySelector(".about-button");
  const spaceButton = document.querySelector(".space-button");

  if (aboutButton) {
    aboutButton.addEventListener("click", function (e) {
      e.preventDefault();
      createRipple(this, e);

      // Scroll to products section
      const productsSection = document.querySelector(".products-section");
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  if (spaceButton) {
    spaceButton.addEventListener("click", function (e) {
      e.preventDefault();
      createRipple(this, e);

      // Scroll to footer or contact section
      const footer = document.querySelector(".footer");
      if (footer) {
        footer.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // Newsletter form functionality
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector(".newsletter-input");
      const submitButton = this.querySelector(".newsletter-button");
      const email = emailInput.value.trim();

      if (email) {
        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = "Đang gửi...";
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
          // Reset form
          emailInput.value = "";
          submitButton.textContent = "Đã gửi!";
          submitButton.style.backgroundColor = "#10b981";

          // Show success message
          console.log("Newsletter subscription successful for:", email);

          // Reset button after 2 seconds
          setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "";
          }, 2000);
        }, 1000);
      }
    });
  }

  // Footer links smooth scroll
  const footerLinks = document.querySelectorAll(".footer-link");
  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Social links interaction
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const platform = this.getAttribute("aria-label");
      console.log(`Opening ${platform} page...`);
      // Add actual social media links here
    });
  });

  // Add footer to sections animation
  const footer = document.querySelector(".footer");
  if (footer) {
    footer.style.opacity = "0";
    footer.style.transform = "translateY(30px)";
    footer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(footer);
  }
});

// Simple Filter Functionality - Place at the end of the file
window.addEventListener("load", function () {
  console.log("Window loaded, setting up filters...");

  const filterTabs = document.querySelectorAll(".filter-tab");
  const gallerySection = document.querySelector(".gallery-section");
  const videoSection = document.querySelector(".video-section");
  const galleryButton = document.querySelector(".gallery-button");
  const videoButton = document.querySelector(".video-button");

  console.log("Found filter tabs:", filterTabs.length);
  console.log("Gallery section:", gallerySection);
  console.log("Video section:", videoSection);

  // Function to limit items in "all" filter
  function limitItemsInAllFilter() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const videoItems = document.querySelectorAll(".video-item");

    // Show only first 9 gallery items
    galleryItems.forEach((item, index) => {
      if (index < 9) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    // Show only first 2 video items
    videoItems.forEach((item, index) => {
      if (index < 2) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    console.log("Limited to 9 images and 2 videos in 'all' filter");
  }

  // Function to show all items (used for individual filters)
  function showAllItems(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach((item) => {
      item.style.display = "block";
    });
  }

  // Function to show/hide buttons based on current filter
  function updateButtonsVisibility(currentFilter) {
    if (galleryButton && videoButton) {
      if (currentFilter === "all") {
        galleryButton.style.display = "inline-block";
        videoButton.style.display = "inline-block";
      } else if (currentFilter === "images") {
        galleryButton.style.display = "none";
        videoButton.style.display = "none";
      } else if (currentFilter === "videos") {
        galleryButton.style.display = "none";
        videoButton.style.display = "none";
      }
    }
  }

  // Function to switch to a specific filter
  function switchToFilter(targetFilter) {
    // Find and click the target filter tab
    const targetTab = document.querySelector(`[data-filter="${targetFilter}"]`);
    if (targetTab) {
      // Remove active from all tabs
      filterTabs.forEach((t) => t.classList.remove("active"));

      // Add active to target tab
      targetTab.classList.add("active");

      // Show/hide sections
      if (targetFilter === "images") {
        gallerySection.style.display = "block";
        videoSection.style.display = "none";
        console.log("Switched to images filter");
        // Show all images when switching to images filter
        showAllItems(".gallery-item");
        setTimeout(() => {
          gallerySection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      } else if (targetFilter === "videos") {
        gallerySection.style.display = "none";
        videoSection.style.display = "block";
        console.log("Switched to videos filter");
        // Show all videos when switching to videos filter
        showAllItems(".video-item");
        setTimeout(() => {
          videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else if (targetFilter === "all") {
        gallerySection.style.display = "block";
        videoSection.style.display = "block";
        console.log("Switched to all filter");
        // Limit items when switching to all filter
        limitItemsInAllFilter();
      }

      // Update buttons visibility
      updateButtonsVisibility(targetFilter);
    }
  }

  if (filterTabs.length > 0 && gallerySection && videoSection) {
    filterTabs.forEach((tab, index) => {
      console.log(`Setting up tab ${index}:`, tab.getAttribute("data-filter"));

      tab.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Tab clicked:", this.getAttribute("data-filter"));

        // Remove active from all tabs
        filterTabs.forEach((t) => t.classList.remove("active"));

        // Add active to clicked tab
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        // Show/hide sections with item limits
        if (filter === "all") {
          gallerySection.style.display = "block";
          videoSection.style.display = "block";
          console.log("Showing all sections with limits");
          // Limit to 9 images and 2 videos in "all" filter
          limitItemsInAllFilter();
        } else if (filter === "images") {
          gallerySection.style.display = "block";
          videoSection.style.display = "none";
          console.log("Showing only gallery");
          // Show all images when in images filter
          showAllItems(".gallery-item");
          setTimeout(() => {
            gallerySection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        } else if (filter === "videos") {
          gallerySection.style.display = "none";
          videoSection.style.display = "block";
          console.log("Showing only videos");
          // Show all videos when in videos filter
          showAllItems(".video-item");
          setTimeout(() => {
            videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }

        // Update buttons visibility
        updateButtonsVisibility(filter);

        // Update infinite scroll state
        InfiniteScroll.onFilterChange();
      });
    });

    // Set initial button visibility (default is "all")
    updateButtonsVisibility("all");

    // Add click events for the buttons
    if (galleryButton) {
      galleryButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Gallery button clicked - switching to images filter");
        switchToFilter("images");
      });
    }

    if (videoButton) {
      videoButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Video button clicked - switching to videos filter");
        switchToFilter("videos");
      });
    }
  } else {
    console.log("Filter setup failed - missing elements");
  }

  // Set initial limits for "all" filter on page load
  limitItemsInAllFilter();
});

// Gallery Item Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const videoItems = document.querySelectorAll(".video-item");

  // Gallery items hover effect
  galleryItems.forEach((item) => {
    const image = item.querySelector(".gallery-image");
    const overlay = item.querySelector(".gallery-overlay");

    item.addEventListener("mouseenter", function () {
      if (image) {
        image.style.transform = "scale(1.05)";
        image.style.transition = "transform 0.3s ease";
      }
      if (overlay) {
        overlay.style.background = "rgba(61, 35, 20, 0.9)";
        overlay.style.transition = "background 0.3s ease";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (image) {
        image.style.transform = "scale(1)";
      }
      if (overlay) {
        overlay.style.background = "rgba(61, 35, 20, 0.8)";
      }
    });
  });

  // Video items hover effect
  videoItems.forEach((item) => {
    const thumbnail = item.querySelector(".video-thumbnail");
    const playButton = item.querySelector(".video-play-button");

    item.addEventListener("mouseenter", function () {
      if (thumbnail) {
        thumbnail.style.transform = "scale(1.05)";
        thumbnail.style.transition = "transform 0.3s ease";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (thumbnail) {
        thumbnail.style.transform = "scale(1)";
      }
    });

    // Add click event for video play
    item.addEventListener("click", function () {
      const youtubeId = this.getAttribute("data-youtube-id");
      if (youtubeId) {
        openVideoModal(youtubeId);
      }

      // Add a visual feedback
      if (playButton) {
        playButton.style.transform = "translate(-50%, -50%) scale(0.9)";
        setTimeout(() => {
          playButton.style.transform = "translate(-50%, -50%) scale(1.1)";
        }, 150);
      }
    });
  });

  // Video Modal functionality
  const videoModal = document.getElementById("video-modal");
  const videoModalClose = document.getElementById("video-modal-close");
  const youtubeIframe = document.getElementById("youtube-iframe");

  function openVideoModal(videoId) {
    if (videoModal && youtubeIframe) {
      // Set YouTube embed URL with autoplay
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      youtubeIframe.src = embedUrl;

      // Show modal
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Focus on close button for accessibility
      if (videoModalClose) {
        videoModalClose.focus();
      }
    }
  }

  function closeVideoModal() {
    if (videoModal && youtubeIframe) {
      videoModal.classList.remove("active");
      document.body.style.overflow = "";

      // Stop video by clearing src
      youtubeIframe.src = "";
    }
  }

  // Close button event
  if (videoModalClose) {
    videoModalClose.addEventListener("click", closeVideoModal);
  }

  // Close modal when clicking outside the video
  if (videoModal) {
    videoModal.addEventListener("click", function (e) {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  // Keyboard navigation for video modal
  document.addEventListener("keydown", function (e) {
    if (videoModal && videoModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeVideoModal();
      }
    }
  });
});

// Infinite Scroll and Loading functionality
const InfiniteScroll = {
  // Mock data for additional images - these are different from existing ones in HTML
  // In real app, this would come from API and be truly unique content
  imageData: [
    {
      src: "images/cf_store.jpg",
      alt: "Góc làm việc yên tĩnh",
      title: "Không gian học tập lý tưởng",
    },
    {
      src: "images/cf_sen.jpg",
      alt: "Cà phê đậm đà buổi chiều",
      title: "Hương vị cà phê đặc trưng",
    },
    {
      src: "images/hero.jpg",
      alt: "Barista tài năng",
      title: "Kỹ thuật pha chế chuyên nghiệp",
    },
    {
      src: "images/ts_sen.jpg",
      alt: "Trà sen thanh mát",
      title: "Thức uống thư giãn",
    },
    {
      src: "images/cf_suada.jpg",
      alt: "Cà phê sáng sớm",
      title: "Khởi đầu ngày mới hoàn hảo",
    },
    {
      src: "images/ts_olong.jpg",
      alt: "Hương trà thơm lừng",
      title: "Trà cao cấp nhập khẩu",
    },
  ],

  videoData: [
    {
      youtubeId: "6x1yluqMuc4",
      thumbnail: "images/ts_sen.jpg",
      title: "Hướng dẫn pha trà sen",
    },
    {
      youtubeId: "-fOpQGLxCTE",
      thumbnail: "images/cf_suada.jpg",
      title: "Bí quyết cà phê sữa đá ngon",
    },
  ],

  currentImagePage: 0, // Start from 0 since we already have images in HTML
  currentVideoPage: 0, // Start from 0 since we already have videos in HTML
  itemsPerPage: 3, // Load fewer items each time
  isLoading: false,
  hasMoreImages: true,
  hasMoreVideos: true,

  init() {
    this.setupScrollDetection();
    this.createLoadingIndicator();
  },

  setupScrollDetection() {
    let scrollTimeout;

    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (this.isLoading) return;

        // Get footer element to use as trigger point
        const footer = document.querySelector(".footer");
        if (!footer) return;

        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Trigger when footer comes into view (with some offset for mobile)
        const triggerOffset = window.innerWidth <= 768 ? 100 : 200; // Smaller offset on mobile
        const footerTopPosition = footerRect.top;

        // Load more content when footer is about to come into view
        if (footerTopPosition <= windowHeight + triggerOffset) {
          this.loadMoreContent();
        }
      }, 100);
    });
  },

  createLoadingIndicator() {
    const loadingHTML = `
      <div class="loading-indicator" id="loading-indicator" style="display: none;">
        <div class="loading-spinner"></div>
        <div class="loading-text">Đang tải thêm nội dung...</div>
      </div>
      <div class="end-message" id="end-message" style="display: none;">
        <div class="end-message-content">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="#e8c1c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="end-message-text">Bạn đã xem hết tất cả nội dung!</div>
          <div class="end-message-subtext">Hãy quay lại sau để xem thêm nội dung mới</div>
        </div>
      </div>
    `;

    // Add loading indicator after gallery section
    const gallerySection = document.querySelector(".gallery-section");
    if (gallerySection) {
      gallerySection.insertAdjacentHTML("afterend", loadingHTML);
    }

    // Add loading indicator after video section as well
    const videoSection = document.querySelector(".video-section");
    if (videoSection) {
      const videoLoadingHTML = `
        <div class="loading-indicator video-loading" id="video-loading-indicator" style="display: none;">
          <div class="loading-spinner"></div>
          <div class="loading-text">Đang tải thêm video...</div>
        </div>
        <div class="end-message video-end" id="video-end-message" style="display: none;">
          <div class="end-message-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#e8c1c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="end-message-text">Bạn đã xem hết tất cả video!</div>
            <div class="end-message-subtext">Hãy quay lại sau để xem thêm video mới</div>
          </div>
        </div>
      `;
      videoSection.insertAdjacentHTML("afterend", videoLoadingHTML);
    }
  },

  showLoading() {
    const currentFilter = this.getCurrentFilter();

    if (currentFilter === "videos") {
      const videoLoadingIndicator = document.getElementById(
        "video-loading-indicator"
      );
      if (videoLoadingIndicator) {
        videoLoadingIndicator.style.display = "flex";
      }
    } else {
      const loadingIndicator = document.getElementById("loading-indicator");
      if (loadingIndicator) {
        loadingIndicator.style.display = "flex";
      }
    }
  },

  hideLoading() {
    const loadingIndicator = document.getElementById("loading-indicator");
    if (loadingIndicator) {
      loadingIndicator.style.display = "none";
    }

    const videoLoadingIndicator = document.getElementById(
      "video-loading-indicator"
    );
    if (videoLoadingIndicator) {
      videoLoadingIndicator.style.display = "none";
    }
  },

  showEndMessage() {
    const currentFilter = this.getCurrentFilter();

    if (currentFilter === "videos") {
      const videoEndMessage = document.getElementById("video-end-message");
      if (videoEndMessage) {
        videoEndMessage.style.display = "flex";
      }
    } else {
      const endMessage = document.getElementById("end-message");
      if (endMessage) {
        endMessage.style.display = "flex";
      }
    }
  },

  hideEndMessage() {
    const endMessage = document.getElementById("end-message");
    if (endMessage) {
      endMessage.style.display = "none";
    }

    const videoEndMessage = document.getElementById("video-end-message");
    if (videoEndMessage) {
      videoEndMessage.style.display = "none";
    }
  },

  loadMoreContent() {
    if (this.isLoading) return;

    const currentFilter = this.getCurrentFilter();

    // Don't load more content if we're in "all" filter - it has fixed limits
    if (currentFilter === "all") {
      console.log(
        "Infinite scroll disabled for 'all' filter - showing fixed 9 images + 2 videos"
      );
      return;
    }

    if (currentFilter === "images") {
      if (this.hasMoreImages) {
        this.loadMoreImages();
      }
    }

    if (currentFilter === "videos") {
      if (this.hasMoreVideos) {
        this.loadMoreVideos();
      }
    }
  },

  getCurrentFilter() {
    const activeTab = document.querySelector(".filter-tab.active");
    return activeTab ? activeTab.getAttribute("data-filter") : "all";
  },

  loadMoreImages() {
    if (this.isLoading || !this.hasMoreImages) return;

    this.isLoading = true;
    this.showLoading();

    // Simulate API call delay
    setTimeout(() => {
      const startIndex = this.currentImagePage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const newImages = this.imageData.slice(startIndex, endIndex);

      if (newImages.length === 0) {
        this.hasMoreImages = false;
        this.hideLoading();
        this.checkAndShowEndMessage();
        this.isLoading = false;
        return;
      }

      this.appendImages(newImages);
      this.currentImagePage++;

      // Check if there are more images
      if (startIndex + this.itemsPerPage >= this.imageData.length) {
        this.hasMoreImages = false;
      }

      this.hideLoading();
      this.checkAndShowEndMessage();
      this.isLoading = false;
    }, 800); // Simulate network delay
  },

  loadMoreVideos() {
    if (this.isLoading || !this.hasMoreVideos) return;

    this.isLoading = true;
    this.showLoading();

    // Simulate API call delay
    setTimeout(() => {
      const startIndex = this.currentVideoPage * 2; // 2 videos per load
      const endIndex = startIndex + 2;
      const newVideos = this.videoData.slice(startIndex, endIndex);

      if (newVideos.length === 0) {
        this.hasMoreVideos = false;
        this.hideLoading();
        this.checkAndShowEndMessage();
        this.isLoading = false;
        return;
      }

      this.appendVideos(newVideos);
      this.currentVideoPage++;

      // Check if there are more videos
      if (startIndex + 2 >= this.videoData.length) {
        this.hasMoreVideos = false;
      }

      this.hideLoading();
      this.checkAndShowEndMessage();
      this.isLoading = false;
    }, 800);
  },

  checkAndShowEndMessage() {
    const currentFilter = this.getCurrentFilter();
    let shouldShowEndMessage = false;

    if (currentFilter === "all") {
      shouldShowEndMessage = !this.hasMoreImages && !this.hasMoreVideos;
    } else if (currentFilter === "images") {
      shouldShowEndMessage = !this.hasMoreImages;
    } else if (currentFilter === "videos") {
      shouldShowEndMessage = !this.hasMoreVideos;
    }

    if (shouldShowEndMessage) {
      this.showEndMessage();
    } else {
      this.hideEndMessage();
    }
  },

  appendImages(images) {
    const galleryGrid = document.querySelector(".gallery-grid");
    if (!galleryGrid) return;

    images.forEach((imageData, index) => {
      const imageHTML = this.createImageHTML(imageData);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = imageHTML;
      const newItem = tempDiv.firstElementChild;

      // Add staggered animation
      newItem.style.opacity = "0";
      newItem.style.transform = "translateY(30px)";
      newItem.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`;

      galleryGrid.appendChild(newItem);

      // Trigger animation
      setTimeout(() => {
        newItem.style.opacity = "1";
        newItem.style.transform = "translateY(0)";
      }, 100);

      // Add hover effects to new items
      this.addImageHoverEffects(newItem);

      // Add lightbox functionality to new items
      this.addLightboxToImage(newItem);
    });
  },

  appendVideos(videos) {
    const videoGrid = document.querySelector(".video-grid");
    if (!videoGrid) return;

    videos.forEach((videoData, index) => {
      const videoHTML = this.createVideoHTML(videoData);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = videoHTML;
      const newItem = tempDiv.firstElementChild;

      // Add staggered animation
      newItem.style.opacity = "0";
      newItem.style.transform = "translateY(30px)";
      newItem.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`;

      videoGrid.appendChild(newItem);

      // Trigger animation
      setTimeout(() => {
        newItem.style.opacity = "1";
        newItem.style.transform = "translateY(0)";
      }, 100);

      // Add hover effects and click functionality to new videos
      this.addVideoInteractions(newItem);
    });
  },

  createImageHTML(imageData) {
    return `
      <div class="gallery-item">
        <div class="gallery-image-container">
          <img src="${imageData.src}" alt="${imageData.alt}" class="gallery-image">
          <div class="gallery-overlay">
            <div class="gallery-text">${imageData.title}</div>
          </div>
          <div class="gallery-corners">
            <div class="corner corner-tl"></div>
            <div class="corner corner-tr"></div>
            <div class="corner corner-bl"></div>
            <div class="corner corner-br"></div>
          </div>
        </div>
      </div>
    `;
  },

  createVideoHTML(videoData) {
    return `
      <div class="video-item" data-youtube-id="${videoData.youtubeId}">
        <div class="video-thumbnail-container">
          <img src="${videoData.thumbnail}" alt="${videoData.title}" class="video-thumbnail">
          <div class="video-play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="white"/>
            </svg>
          </div>
          <div class="video-overlay">
            <div class="video-text">${videoData.title}</div>
          </div>
          <div class="video-corners">
            <div class="corner corner-tl"></div>
            <div class="corner corner-tr"></div>
            <div class="corner corner-bl"></div>
            <div class="corner corner-br"></div>
          </div>
        </div>
      </div>
    `;
  },

  addImageHoverEffects(item) {
    const image = item.querySelector(".gallery-image");
    const overlay = item.querySelector(".gallery-overlay");

    item.addEventListener("mouseenter", function () {
      if (image) {
        image.style.transform = "scale(1.05)";
        image.style.transition = "transform 0.3s ease";
      }
      if (overlay) {
        overlay.style.background = "rgba(61, 35, 20, 0.9)";
        overlay.style.transition = "background 0.3s ease";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (image) {
        image.style.transform = "scale(1)";
      }
      if (overlay) {
        overlay.style.background = "rgba(61, 35, 20, 0.8)";
      }
    });
  },

  addVideoInteractions(item) {
    const thumbnail = item.querySelector(".video-thumbnail");
    const playButton = item.querySelector(".video-play-button");

    item.addEventListener("mouseenter", function () {
      if (thumbnail) {
        thumbnail.style.transform = "scale(1.05)";
        thumbnail.style.transition = "transform 0.3s ease";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (thumbnail) {
        thumbnail.style.transform = "scale(1)";
      }
    });

    item.addEventListener("click", function () {
      const youtubeId = this.getAttribute("data-youtube-id");
      if (youtubeId) {
        openVideoModal(youtubeId);
      }

      if (playButton) {
        playButton.style.transform = "translate(-50%, -50%) scale(0.9)";
        setTimeout(() => {
          playButton.style.transform = "translate(-50%, -50%) scale(1.1)";
        }, 150);
      }
    });
  },

  addLightboxToImage(item) {
    item.addEventListener("click", function () {
      const image = this.querySelector(".gallery-image");
      if (image) {
        openLightbox(image.src, image.alt);
      }
    });
  },

  reset() {
    this.currentImagePage = 1;
    this.currentVideoPage = 1;
    this.isLoading = false;
    this.hasMoreImages = true;
    this.hasMoreVideos = true;
    this.hideLoading();
    this.hideEndMessage();
  },

  // Reset when filter changes
  onFilterChange() {
    this.hideLoading();
    this.hideEndMessage();

    // Remove dynamically loaded items to prevent accumulation
    this.removeDynamicItems();

    // Reset pagination when switching filters to ensure fresh loading
    this.currentImagePage = 0;
    this.currentVideoPage = 0;
    this.hasMoreImages = true;
    this.hasMoreVideos = true;

    console.log("Filter changed - pagination reset and dynamic items removed");
  },

  // Remove items that were added dynamically via infinite scroll
  removeDynamicItems() {
    const galleryGrid = document.querySelector(".gallery-grid");
    const videoGrid = document.querySelector(".video-grid");

    if (galleryGrid) {
      const galleryItems = galleryGrid.querySelectorAll(".gallery-item");
      // Keep only the first 12 items (original items from HTML)
      galleryItems.forEach((item, index) => {
        if (index >= 12) {
          item.remove();
        }
      });
    }

    if (videoGrid) {
      const videoItems = videoGrid.querySelectorAll(".video-item");
      // Keep only the first 4 items (original items from HTML)
      videoItems.forEach((item, index) => {
        if (index >= 4) {
          item.remove();
        }
      });
    }

    console.log("Removed dynamically added items");
  },
};

// Initialize infinite scroll when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  InfiniteScroll.init();
  ScrollIndicator.init();
});

// Scroll Indicator functionality
const ScrollIndicator = {
  indicator: null,

  init() {
    this.indicator = document.getElementById("scroll-indicator");
    if (this.indicator) {
      this.setupScrollIndicator();
    }
  },

  setupScrollIndicator() {
    // Show/hide indicator based on scroll position and available content
    window.addEventListener("scroll", () => {
      const currentFilter = InfiniteScroll.getCurrentFilter();

      // Don't show scroll indicator in "all" filter since it has fixed content
      if (currentFilter === "all") {
        this.hide();
        return;
      }

      // Check if there's more content to load for other filters
      let hasMoreContent = false;
      if (currentFilter === "images") {
        hasMoreContent = InfiniteScroll.hasMoreImages;
      } else if (currentFilter === "videos") {
        hasMoreContent = InfiniteScroll.hasMoreVideos;
      }

      // Get footer element to determine scroll progress
      const footer = document.querySelector(".footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Show indicator when user has scrolled a bit but footer is not yet visible and there's more content
      const footerVisible = footerRect.top <= windowHeight;

      if (scrollPercentage > 20 && !footerVisible && hasMoreContent) {
        this.show();
      } else {
        this.hide();
      }
    });

    // Click handler for scroll indicator
    this.indicator.addEventListener("click", () => {
      // Scroll down by one viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  },

  show() {
    if (this.indicator) {
      this.indicator.classList.add("visible");
    }
  },

  hide() {
    if (this.indicator) {
      this.indicator.classList.remove("visible");
    }
  },
};

// Add lightbox functionality
function openLightbox(imageSrc, imageAlt) {
  // Create lightbox if it doesn't exist
  let lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    const lightboxHTML = `
      <div class="lightbox" id="lightbox">
        <div class="lightbox-content">
          <button class="lightbox-close" id="lightbox-close">&times;</button>
          <img class="lightbox-image" id="lightbox-image" src="" alt="">
          <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lightboxHTML);
    lightbox = document.getElementById("lightbox");

    // Add close functionality
    const closeBtn = document.getElementById("lightbox-close");
    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  // Set image and show lightbox
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightboxCaption.textContent = imageAlt;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Update existing gallery items to support lightbox
document.addEventListener("DOMContentLoaded", function () {
  const existingGalleryItems = document.querySelectorAll(".gallery-item");
  existingGalleryItems.forEach((item) => {
    InfiniteScroll.addLightboxToImage(item);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  initNewsletterForm();
});
// Newsletter form handling
function initNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterInput = document.querySelector(".newsletter-input");
  const newsletterButton = document.querySelector(".newsletter-button");

  if (newsletterForm && newsletterInput && newsletterButton) {
    newsletterForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = newsletterInput.value.trim();

      // Validate email
      if (!email) {
        showNotification("Vui lòng nhập email của bạn!", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Email không hợp lệ!", "error");
        return;
      }

      // Show loading state
      const originalButtonText = newsletterButton.textContent;
      newsletterButton.textContent = "Đang gửi...";
      newsletterButton.disabled = true;
      newsletterInput.disabled = true;

      try {
        // Send email to Google Apps Script API
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwD7LkfgT_iF42bjXJAV2GCOMS_JusKG7JHMZK_4xUfD61vEf4arK4L0dhK4ergXS_cDQ/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              timestamp: new Date().toISOString(),
              source: "newsletter",
            }),
          }
        );

        // Reset form
        newsletterInput.value = "";
        showNotification("Cảm ơn bạn đã đăng ký nhận tin!", "success");
      } catch (error) {
        console.error("Error submitting newsletter:", error);
        showNotification("Có lỗi xảy ra. Vui lòng thử lại!", "error");
      } finally {
        // Restore button state
        newsletterButton.textContent = originalButtonText;
        newsletterButton.disabled = false;
        newsletterInput.disabled = false;
      }
    });
  }
}
// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show notification function
function showNotification(message, type = "info") {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${
      type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#2196F3"
    };
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    max-width: 300px;
    word-wrap: break-word;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}
