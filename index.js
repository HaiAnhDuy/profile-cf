// DOM Elements
const navLinks = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".nav-button");
const heroButton = document.querySelector(".hero-button");
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
    // Don't prevent default for external links (with target="_blank")
    if (this.getAttribute("target") === "_blank") {
      return; // Allow default behavior for external links
    }

    e.preventDefault();

    // Add active state
    mobileNavLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    // Handle navigation based on link text
    const linkText = this.textContent.trim();

    switch (linkText) {
      case "TRANG CHỦ":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;

      case "GIỚI THIỆU":
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
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
    // Don't prevent default for external links (with target="_blank")
    if (this.getAttribute("target") === "_blank") {
      return; // Allow default behavior for external links
    }

    e.preventDefault();

    // Add active state
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    // Add ripple effect
    createRipple(this, e);

    // Handle navigation based on link text
    const linkText = this.textContent.trim();

    switch (linkText) {
      case "TRANG CHỦ":
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;

      case "GIỚI THIỆU":
        // Scroll to about section
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
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
    // Don't prevent default for external links (with target="_blank")
    if (this.getAttribute("target") === "_blank") {
      // Close sidebar before opening external link
      mobileMenuToggle.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.style.overflow = "";
      return; // Allow default behavior for external links
    }

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
[navButton, heroButton].forEach((button) => {
  if (button) {
    button.addEventListener("click", function (e) {
      // Don't prevent default for external links (navButton with target="_blank")
      if (this.getAttribute("target") === "_blank") {
        return; // Allow default behavior for external links
      }

      e.preventDefault();

      // Add ripple effect
      createRipple(this, e);

      // Add button click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Handle button specific actions
      if (this === heroButton) {
        console.log("Explore button clicked");
        // Scroll to about section
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  }
});

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
    .nav-link, .nav-button, .hero-button {
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
    heroContent.style.transform = "translateX(-50%) translateY(20px)";
    heroContent.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateX(-50%) translateY(0)";
    }, 300);
  }
}

// Initialize animations when page loads
window.addEventListener("load", function () {
  addFadeInAnimation();

  // Set first nav link as active by default
  const firstNavLink = document.querySelector(".nav-link");
  if (firstNavLink) {
    firstNavLink.classList.add("active");
  }
});

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

console.log("Sen Cafe website loaded successfully!");

// Initialize sticky header functionality
function initStickyHeader() {
  const header = document.querySelector(".header");

  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Function to handle hash-based navigation and set active states
function handleHashNavigation() {
  const hash = window.location.hash;

  // Remove active class from all nav links
  navLinks.forEach((l) => l.classList.remove("active"));
  mobileNavLinks.forEach((l) => l.classList.remove("active"));

  // Set active state based on hash
  switch (hash) {
    case "#about-section":
      // Set "GIỚI THIỆU" as active
      const aboutNavLink = document.querySelector(
        '.nav-link[href*="about"], .nav-link:nth-child(2)'
      );
      const aboutMobileNavLink = document.querySelector(
        '.mobile-nav-link[href*="about"], .mobile-nav-link:nth-child(2)'
      );

      // Find by text content for more reliable selection
      navLinks.forEach((link) => {
        if (link.textContent.trim() === "GIỚI THIỆU") {
          link.classList.add("active");
        }
      });

      mobileNavLinks.forEach((link) => {
        if (link.textContent.trim() === "GIỚI THIỆU") {
          link.classList.add("active");
        }
      });

      // Scroll to about section
      setTimeout(() => {
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
      break;

    default:
      // Set "TRANG CHỦ" as active by default
      navLinks.forEach((link) => {
        if (link.textContent.trim() === "TRANG CHỦ") {
          link.classList.add("active");
        }
      });

      mobileNavLinks.forEach((link) => {
        if (link.textContent.trim() === "TRANG CHỦ") {
          link.classList.add("active");
        }
      });
      break;
  }
}

// Initialize sticky header when page loads
document.addEventListener("DOMContentLoaded", function () {
  initStickyHeader();
  handleHashNavigation();
  initNewsletterForm();
});

// Handle hash changes (when user navigates with back/forward buttons)
window.addEventListener("hashchange", handleHashNavigation);

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
