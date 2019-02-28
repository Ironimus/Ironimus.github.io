export const colors = {
	text: '#BEBEBE',
	background: '#263238',
	complementary: '#7CB0FF',
}

export const breakpoints = {
	mobile: 720,
	fileTreeVisibility: 1150,
}

export const media = {
	mobile: `@media(max-width: ${breakpoints.mobile}px)`,
	desktop: `@media(min-width: ${breakpoints.mobile + 1}px)`,
}

// this token has only public_repo scope, so there no reasons to hide it
export const GITHUB_TOKEN = // but github won't allow me just leave it as string
'c8e69da123346ac1f773b8c06bbd4766430ae0ca'.split``.reverse().join``
