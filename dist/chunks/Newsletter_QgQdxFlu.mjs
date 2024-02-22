const Newsletter = new Proxy({"src":"/_astro/Newsletter.A7z2lL2e.png","width":4000,"height":4000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/Newsletter.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/Newsletter.png");
							return target[name];
						}
					});

export { Newsletter as default };
