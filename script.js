document.addEventListener('alpine:init', () => {
        Alpine.data('app', () => ({
          mobileMenuOpen: false,
          
          openVideo(videoId) {
            this.videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            this.videoModalOpen = true;
            document.body.style.overflow = 'hidden';
          },
          
          closeVideo() {
            this.videoModalOpen = false;
            this.videoUrl = '';
            document.body.style.overflow = '';
          }
        }));
      });
      
      // Inicializar Alpine.js
      document.addEventListener('DOMContentLoaded', () => {
        // Podrías agregar aquí cualquier inicialización adicional que necesites
      });