document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.code == 'KeyP') {

      const url = window.location.href;
      const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
      const match = url.match(regex);

      if (match) {
        const videoId = match[1];
        console.log(videoId); 
        const previewUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        downloadImage(previewUrl, videoId);
      }

    }
  });

  async function downloadImage(imageSrc, imageName) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = imageName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }