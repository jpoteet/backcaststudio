import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DdAgofIr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Jesse Poteet","email":"jesse@backcaststudio.com","image":"/images/avatar.png","description":"Jesse Poteet, owner and founder of Backcast Studio & Alpine Apparel Co","social":[{"name":"instagram","icon":"FaInstagram","link":"https://instagram.com/jpoteet"},{"name":"twitter","icon":"FaTwitter","link":"https://twitter.com/jessepoteet"},{"name":"linkedin","icon":"FaLinkedin","link":"https://linkedin.com/in/jessepoteet"}]};
				const file = "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/src/content/authors/jesse-poteet.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
