import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ce1J-QHw.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Contact","meta_title":"","description":"this is meta description","draft":false};
				const file = "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/src/content/contact/-index.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };