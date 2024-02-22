const jessePoteetHeadshot = new Proxy({"src":"/_astro/jesse-poteet-headshot.sPaDQqtT.jpg","width":1778,"height":1796,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/jesse-poteet-headshot.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/jesse-poteet-headshot.jpg");
							return target[name];
						}
					});

export { jessePoteetHeadshot as default };
