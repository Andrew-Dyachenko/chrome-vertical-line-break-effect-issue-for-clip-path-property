window.addEventListener('load', function pageIsFullyLoaded () {
	const html = document.documentElement;
	const form = document.getElementById('faq__control-panel');
	const dirControl = document.getElementById('ltr-rtl-toggle');
	const animationControl = document.getElementById('animation-toggle');
	const faqContainer = document.getElementById('faq__container');
	const removeLocalStorageItemControl = document.getElementById('remove-local-storage-item');
	const storageName = 'chrome-vertical-line-break-effect-issue-for-clip-path-property';

	function toggleDir (condition) {
		if (condition) {
			html.setAttribute('dir', 'rtl');
		}
		else {
			html.setAttribute('dir', 'ltr');
		}

		return condition;
	}

	function toggleAnimation (condition) {
		if (condition) {
			faqContainer.classList.add('faq__container--animate');
		}
		else {
			faqContainer.classList.remove('faq__container--animate');
		}
	}

	function getLocalStorage (sn = storageName, parse = true) {
		const ls = window.localStorage.getItem(sn);

		if (parse) {
			return JSON.parse(ls);
		}

		return ls;
	}

	function setLocalStorage (sn = storageName, state = {}) {
		return window.localStorage.setItem(sn, JSON.stringify({
			...getLocalStorage(sn),
			...state
		}))
	}

	function removeLocalStorageItem(lsn = storageName) {
		window.localStorage.removeItem(storageName);
	}

	if (!getLocalStorage(storageName, false)) {
		setLocalStorage(storageName, {
			animate: false,
			dir: 'ltr'
		});
	}
	else {
		const { animate, dir } = getLocalStorage();
		toggleAnimation(animate);
		toggleDir(dir);
	}

	dirControl.onchange = function dirControlOnChange() {
		setLocalStorage(storageName, {dir: this.checked})
		return toggleDir(this.checked)
	};

	animationControl.onchange = function animationControlOnChange() {
		setLocalStorage(storageName, {animate: this.checked})
		return toggleAnimation(this.checked);
	};

	removeLocalStorageItemControl.onclick = function removeLocalStorageItemControlOnClick () {
		const originInnerText = this.innerText;
		removeLocalStorageItem(storageName);
		clearTimeout(this.timeout);
		this.setAttribute('disabled', 'disabled');
		this.innerText = 'Now it\'s cleared!'
		setTimeout(() => {
			this.innerText = originInnerText;
			this.removeAttribute('disabled');
		}, 3000);
		toggleDir();
		toggleAnimation();
		form.reset();
	};
});
