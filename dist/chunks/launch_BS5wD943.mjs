const launch = new Proxy({"src":"/_astro/launch.2DEeHh8P.png","width":1200,"height":824,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/launch.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/launch.png");
							return target[name];
						}
					});

export { launch as default };
