import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DdAgofIr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Authors","meta_title":"","description":"this is meta description"};
				const file = "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/src/content/authors/-index.md";
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
