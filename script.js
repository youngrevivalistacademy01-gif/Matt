document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const loaderCount = document.getElementById('loader-count');
  const loaderFill = document.getElementById('loader-fill');
  const loaderCaption = document.getElementById('loader-caption');
  const loaderImg = document.getElementById('loader-img');
  
  const mainContent = document.getElementById('main-content');
  const skeletonWrapper = document.getElementById('skeleton-wrapper');
  const realContent = document.getElementById('real-content');

  // Preloader Product Images & Captions
  const loaderSequence = [
    {
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
      caption: "Intelligent Optical Surveillance"
    },
    {
      img: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
      caption: "High-Efficiency Solar Grids"
    },
    {
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=600&q=80",
      caption: "Seamless Commercial Energy Storage"
    }
  ];

  // CHECK SESSION STORAGE: Has the loader already run in this session?
  const hasLoadedBefore = sessionStorage.getItem('matt_enterprise_loaded');

  if (hasLoadedBefore) {
    // Refresh case: Bypass loader and skeleton completely
    if (loader) loader.style.display = 'none';
    if (skeletonWrapper) skeletonWrapper.classList.add('hidden');
    
    mainContent.classList.add('visible');
    realContent.classList.remove('hidden');
  } else {
    // Initial Visit or New Session: Run Loader & Skeleton
    let progress = 0;

    const interval = setInterval(() => {
      progress += 1;
      loaderCount.textContent = `${progress}%`;
      loaderFill.style.width = `${progress}%`;

      // Cycle Images and Captions based on progress threshold
      if (progress === 35) {
        updateLoaderSlide(loaderSequence[1]);
      } else if (progress === 70) {
        updateLoaderSlide(loaderSequence[2]);
      }

      if (progress >= 100) {
        clearInterval(interval);
        
        // Save flag in sessionStorage
        sessionStorage.setItem('matt_enterprise_loaded', 'true');

        // Step 1: Hide Loader
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        mainContent.classList.add('visible');

        // Step 2: Show Skeleton Screen for 2 seconds then show page
        setTimeout(() => {
          skeletonWrapper.classList.add('hidden');
          realContent.classList.remove('hidden');
        }, 2000);
      }
    }, 25);
  }

  function updateLoaderSlide(item) {
    loaderImg.style.opacity = '0.3';
    setTimeout(() => {
      loaderImg.src = item.img;
      loaderCaption.textContent = item.caption;
      loaderImg.style.opacity = '1';
    }, 200);
  }
});

// Accordion Dropdown for Item Specifications
function toggleDetails(containerId) {
  const content = document.getElementById(containerId);
  const btn = content.previousElementSibling;

  if (content.classList.contains('open')) {
    content.style.maxHeight = '0px';
    content.classList.remove('open');
    btn.classList.remove('active');
  } else {
    content.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
    btn.classList.add('active');
  }
}
