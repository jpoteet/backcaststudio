const imagePlaceholder = new Proxy({"src":"/_astro/image-placeholder.DyBpoAJD.png","width":1096,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/image-placeholder.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/image-placeholder.png");
							return target[name];
						}
					});

export { imagePlaceholder as default };
