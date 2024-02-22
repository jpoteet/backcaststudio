const banner = new Proxy({"src":"/_astro/banner.DJ27R86s.png","width":2000,"height":1042,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/banner.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/banner.png");
							return target[name];
						}
					});

export { banner as default };
