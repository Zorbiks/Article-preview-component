const toolbox = document.getElementById('toolbox');
const shareButton = document.getElementById('share-btn');

shareButton.addEventListener('click', function() {
	toolbox.classList.toggle('active');
	shareButton.classList.toggle('active');
});
