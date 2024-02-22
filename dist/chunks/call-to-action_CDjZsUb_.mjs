import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DdAgofIr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"title":"Ready to Transform Your Business? Let's Start Building Your Success Story Today","image":"/images/launch.png","description":"Unlock the full potential of your business with my tailored solutions and expert guidance. Schedule a consultation with our team to discuss how I can help you achieve your marketing goals and propel your business to new heights.","button":{"enable":true,"label":"Book a Discovery Call","link":"https://savvycal.com/jessepoteet/backcast-intro"}};
				const file = "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/src/content/sections/call-to-action.md";
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
