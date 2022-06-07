import type MarkdownIt from 'markdown-it';
export declare function activate(): {
    extendMarkdownIt(md: MarkdownIt): MarkdownIt;
};
export declare function deactivate(): void;
