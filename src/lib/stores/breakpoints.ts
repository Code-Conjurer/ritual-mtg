import { readable } from 'svelte/store';
import { browser } from '$app/environment';

const DESKTOP_BREAKPOINT = 768;

interface Breakpoints {
	isMobile: boolean;
	isDesktop: boolean;
	width: number;
}

function createBreakpointStore() {
	const defaultValue: Breakpoints = {
		isMobile: true,
		isDesktop: false,
		width: 0
	};

	if (!browser) {
		return readable<Breakpoints>(defaultValue);
	}

	return readable<Breakpoints>(getBreakpoints(), (set) => {
		function handleResize() {
			set(getBreakpoints());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
}

function getBreakpoints(): Breakpoints {
	const width = window.innerWidth;
	return {
		isMobile: width < DESKTOP_BREAKPOINT,
		isDesktop: width >= DESKTOP_BREAKPOINT,
		width
	};
}

export const breakpoints = createBreakpointStore();
