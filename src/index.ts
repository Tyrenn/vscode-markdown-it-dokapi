import dokapi from '@tyren/markdown-it-dokapi';
import type MarkdownIt from 'markdown-it';

export function activate() {
	return {
		extendMarkdownIt(md : MarkdownIt) {
			return md.use(dokapi);
		}
	};
}

export function deactivate() {}