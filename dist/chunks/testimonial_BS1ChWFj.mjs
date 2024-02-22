import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DdAgofIr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"title":"What others say about me","description":"Don't just take my word for it - hear from others' experience working with me.","testimonials":[{"name":"Leanne","designation":"Leadership","avatar":"/images/avatar-sm.png","content":"Jesse designed my company logo and website and was extremely professional, detail oriented and innovative throughout the process. I highly recommend his services, you will not be disappointed!"},{"name":"Jordan","designation":"Corporate","avatar":"/images/avatar-sm.png","content":"Jesse is excellent at communicating, delegating, asking questions when necessary, and prioritizing multiple tasks. He is known for having an upbeat attitude and being self-motivated. I always know the job would be done correctly and efficiently."},{"name":"Jeremy","designation":"Retail","avatar":"/images/avatar-sm.png","content":"Jesse has worked on multiple project for me and I'm always impressed with the quality of his work and his timely turnaround. He has a great ability to prioritize and take ideas and turn them into action."},{"name":"Marvin","designation":"Agency","avatar":"/images/avatar-sm.png","content":"I have worked with Jesse for years. His professionalism and attention to detail is what separates him from the majority of individuals in his field."},{"name":"Hannah","designation":"Non-Profit","avatar":"/images/avatar-sm.png","content":"Jesse does excellent work when it comes to website design and set-up. We needed someone that could make our website what we desired and then show us how to maintain it and Jesse has done just that."}]};
				const file = "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/src/content/sections/testimonial.md";
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
