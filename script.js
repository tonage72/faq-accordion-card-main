const accordion = document.getElementsByClassName('qa')

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function() {
	
		if (this.classList.contains('active')) {
			for (i = 0; i < accordion.length; i++) {
				accordion[i].classList.remove('active');
			}
		} else {
			for (i = 0; i < accordion.length; i++) {
				accordion[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}