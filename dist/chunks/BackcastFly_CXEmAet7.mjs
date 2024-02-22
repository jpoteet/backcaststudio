const BackcastFly = new Proxy({"src":"/_astro/BackcastFly.jKIJBary.png","width":550,"height":447,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/BackcastFly.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/BackcastFly.png");
							return target[name];
						}
					});

export { BackcastFly as default };
